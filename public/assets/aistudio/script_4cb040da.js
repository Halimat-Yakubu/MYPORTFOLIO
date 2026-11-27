(function(){
  var root=document.documentElement,btn=document.getElementById('theme'),ico=document.getElementById('ico');
  var sun='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  var moon='<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
  var stored=null;
  try{stored=localStorage.getItem('theme')}catch(e){}
  function current(){return root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')}
  function apply(t){
    root.setAttribute('data-theme',t);
    ico.innerHTML=t==='dark'?sun:moon;
  }
  apply(stored==='light'||stored==='dark'?stored:current());
  btn.addEventListener('click',function(){
    var n=current()==='dark'?'light':'dark';apply(n);
    try{localStorage.setItem('theme',n)}catch(e){}
  });

  var tech=['React','TypeScript','Tailwind CSS','ExpressJS','Node.js','HTML5','CSS3','JavaScript','Git','MongoDB','MySQL'];
  var html='';for(var i=0;i<2;i++)tech.forEach(function(t){html+='<span>'+t+'</span>'});
  document.getElementById('track').innerHTML=html;

  var pending=[];
  var items=document.querySelectorAll('.hero > *, .marquee, h2, .sub, .acc, .stage, .proj, .more, .contact > *');
  if('IntersectionObserver' in window){
    root.classList.add('js');
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}
      });
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    items.forEach(function(el){
      var sib=Array.prototype.indexOf.call(el.parentNode.children,el);
      el.style.transitionDelay=(el.matches('.proj,.hero > *')?Math.min(sib,5)*90:0)+'ms';
      el.classList.add('reveal');pending.push(el);
    });
  }

  /* Background dots */
  const dotsContainer = document.getElementById('iceDots');
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    dot.className = 'ice-dot';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.style.animationDelay = (Math.random() * 3) + 's';
    dot.style.animationDuration = (2 + Math.random() * 3) + 's';
    dotsContainer.appendChild(dot);
  }

  /* Loading screen: scrambled name */
  class TextScramble {
    constructor(el, { chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", fps = 28 } = {}) {
      this.el = el;
      this.chars = chars;
      this.fps = fps;
      this._raf = null;
    }
    setText(newText) {
      return new Promise(resolve => {
        const length = newText.length;
        const queue = Array.from({ length }, (_, i) => ({
          to:    newText[i] || "",
          start: Math.floor(Math.random() * 8),
          end:   Math.floor(Math.random() * 10) + 12,
          char:  "",
        }));
        let frame = 0, complete = 0;
        const interval = 1000 / this.fps;
        let last = performance.now();
        const tick = (now) => {
          if (now - last < interval) { this._raf = requestAnimationFrame(tick); return; }
          last = now;
          complete = 0;
          let output = "";
          queue.forEach(item => {
            if (frame >= item.end) {
              complete++;
              output += item.to;
            } else if (frame >= item.start) {
              item.char = this.chars[Math.floor(Math.random() * this.chars.length)];
              output += item.char;
            } else {
              output += item.to;
            }
          });
          this.el.textContent = output;
          frame++;
          if (complete < queue.length) {
            this._raf = requestAnimationFrame(tick);
          } else {
            this.el.textContent = newText;
            resolve();
          }
        };
        cancelAnimationFrame(this._raf);
        this._raf = requestAnimationFrame(tick);
      });
    }
  }
  function scramble(el, text, fps = 28) {
    el.style.opacity = "1";
    return new TextScramble(el, { fps }).setText(text);
  }

  var loader=document.getElementById('loader'),loaderText=document.getElementById('loader-text'),finished=false;
  function startReveal(){pending.forEach(function(el){io.observe(el)})}
  function finishLoading(){
    if(finished)return;finished=true;
    loader.classList.add('done');
    document.body.style.overflow='';
    startReveal();
    setTimeout(function(){loader.remove()},800);
  }
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){
    loader.remove();startReveal();
  }else{
    root.classList.add('has-loader');
    document.body.style.overflow='hidden';
    scramble(loaderText,'Halimat Yakubu').then(function(){setTimeout(finishLoading,600)});
    setTimeout(finishLoading,6000);
  }

  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();this.reset();document.getElementById('thanks').classList.add('show');
  });
})();


/* What I do: accordion + animated stage */
(function(){
  var items=document.querySelectorAll('.acc-item'),stage=document.querySelector('.stage'),
      num=document.getElementById('num'),suf=document.getElementById('suf'),
      cap=document.getElementById('cap'),bars=document.getElementById('bars'),
      reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,raf,timer;

  function count(to){
    cancelAnimationFrame(raf);
    if(reduce){num.textContent=to;return}
    var t0=performance.now();
    (function step(now){
      var p=Math.min((now-t0)/1200,1);
      num.textContent=Math.round(to*(1-Math.pow(1-p,3)));
      if(p<1)raf=requestAnimationFrame(step);
    })(t0);
  }

  function play(item){
    var d=item.dataset,fills=[];
    suf.textContent=d.suffix;cap.textContent=d.label;
    bars.textContent='';
    d.bars.split(',').forEach(function(pair){
      var kv=pair.split(':'),row=document.createElement('div');
      row.className='skill';
      row.innerHTML='<span></span><b></b><div class="meter"><i></i></div>';
      row.children[0].textContent=kv[0];row.children[1].textContent=kv[1]+'%';
      bars.appendChild(row);fills.push([row.querySelector('i'),kv[1]]);
    });
    count(+d.n);
    clearTimeout(timer);
    timer=setTimeout(function(){fills.forEach(function(f){f[0].style.width=f[1]+'%'})},reduce?0:60);
  }

  items.forEach(function(item){
    var btn=item.querySelector('.acc-btn');
    btn.addEventListener('click',function(){
      if(item.classList.contains('open'))return;
      items.forEach(function(o){o.classList.remove('open');o.querySelector('.acc-btn').setAttribute('aria-expanded','false')});
      item.classList.add('open');btn.setAttribute('aria-expanded','true');play(item);
    });
  });

  var first=document.querySelector('.acc-item.open');
  if('IntersectionObserver' in window){
    var so=new IntersectionObserver(function(e){if(e[0].isIntersecting){so.disconnect();play(first)}},{threshold:.3});
    so.observe(stage);
  }else play(first);
})();