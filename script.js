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

  var tech=[
    {name:'React',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1.4" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></g></svg>'},
    {name:'TypeScript',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="22" height="22" x="1" y="1" rx="3" fill="#3178C6"/><path fill="#fff" d="M12.6 11.4H10.2V19H8.1v-7.6H5.7V9.6h6.9v1.8zm1.1 5.6c.4.2.9.4 1.4.5.5.1 1 .2 1.5.2.3 0 .6 0 .8-.1.2 0 .4-.1.6-.2.2-.1.3-.2.4-.3.1-.1.1-.3.1-.5s0-.4-.2-.5c-.1-.1-.3-.3-.5-.4-.2-.1-.5-.2-.8-.3l-.9-.4c-.4-.1-.7-.3-1-.5-.3-.2-.5-.4-.8-.6-.2-.2-.4-.5-.5-.8-.1-.3-.2-.7-.2-1.1 0-.4.1-.8.3-1.2.2-.3.4-.6.8-.9.3-.2.7-.4 1.1-.5.5-.1 1-.2 1.5-.2.5 0 .9 0 1.4.1.4.1.8.2 1.2.4v2c-.3-.2-.7-.3-1-.4-.4-.1-.8-.1-1.2-.1-.3 0-.6 0-.8.1-.2 0-.4.1-.6.2-.1.1-.3.2-.3.3-.1.1-.1.3-.1.4 0 .2 0 .3.1.5.1.1.2.2.4.3.2.1.4.2.6.3.3.1.5.2.8.3.4.2.8.3 1.1.5.3.2.6.4.9.6.2.2.4.5.6.8.1.3.2.7.2 1.1 0 .5-.1.9-.3 1.3-.2.4-.4.7-.8.9-.3.2-.7.4-1.2.5-.5.1-1 .2-1.5.2-.6 0-1.2-.1-1.7-.2-.6-.1-1.1-.3-1.5-.5V17z"/></svg>'},
    {name:'Tailwind CSS',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#06B6D4" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/></svg>'},
    {name:'ExpressJS',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="1.5" y="4" width="21" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="currentColor" d="M5.4 15.5V8.6h4.7v1.2H6.8v1.6h3v1.2h-3v1.7h3.4v1.2H5.4zm6.2 0 2.1-3.1-2-3h1.6l1.3 2 1.3-2h1.5l-2 2.9 2.1 3.2H16l-1.4-2.1-1.4 2.1h-1.6z"/></svg>'},
    {name:'Node.js',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#5FA04E" d="M12 1.75a1.5 1.5 0 0 0-.75.2l-8.1 4.68A1.5 1.5 0 0 0 2.4 7.93v9.34c0 .54.29 1.03.75 1.3l8.1 4.68c.46.27 1.04.27 1.5 0l8.1-4.68c.46-.27.75-.76.75-1.3V7.93c0-.54-.29-1.03-.75-1.3l-8.1-4.68a1.5 1.5 0 0 0-.75-.2zm0 4.05 5.8 3.35v6.7L12 19.2l-5.8-3.35v-6.7L12 5.8z"/></svg>'},
    {name:'HTML5',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#E34F26" d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.3 5.8H8.9l.2 2.3h8l-.6 6.8L12 18.2l-4.5-1.3-.3-3.5h2.2l.2 1.8 2.4.7 2.4-.7.3-2.8H7.1L6.5 5.6h11l-.2 2.2z"/></svg>'},
    {name:'CSS3',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1572B6" d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.3 4.1-.3 2.1-5.1 2.2h4.9l-.5 5.9-4.3 1.2-4.3-1.2-.3-3.2h2.2l.1 1.6 2.3.6 2.3-.6.2-2.7H7.3l-.2-2 4.8-2H6.9l-.2-1.9h10.6z"/></svg>'},
    {name:'JavaScript',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="22" height="22" x="1" y="1" rx="3" fill="#F7DF1E"/><path fill="#0a0a0b" d="M10.7 16.4c0 1.5-.9 2.2-2.2 2.2-.9 0-1.6-.4-2-1l1.1-.8c.2.4.5.6.9.6.5 0 .8-.2.8-.9v-5.1h1.4v5zm2.4.8c.5.4 1.1.7 1.9.7.8 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.1-1l-.5-.2c-1.2-.5-1.9-1.1-1.9-2.3 0-1.1.9-2 2.3-2 1 0 1.7.3 2.2 1l-1 .8c-.3-.4-.7-.6-1.2-.6-.6 0-.9.3-.9.7 0 .5.3.7 1.1 1l.5.2c1.4.6 2 1.2 2 2.4 0 1.3-1 2.2-2.6 2.2-1.2 0-2.1-.4-2.7-1.1l.7-1z"/></svg>'},
    {name:'Git',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F05032" d="M22.6 11.2 12.8 1.4a1.2 1.2 0 0 0-1.7 0L9 3.5l2.5 2.5a1.4 1.4 0 0 1 1.8 1.8l2.4 2.4a1.4 1.4 0 1 1-.8.8l-2.3-2.3v6a1.4 1.4 0 1 1-1.1 0V8.6a1.4 1.4 0 0 1-.8-1.9L8.3 4.3 1.4 11.2a1.2 1.2 0 0 0 0 1.7l9.8 9.8a1.2 1.2 0 0 0 1.7 0l9.7-9.8a1.2 1.2 0 0 0 0-1.7z"/></svg>'},
    {name:'MongoDB',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#47A248" d="M12.3 2.2c-.2-.3-.4-.3-.6 0-1.6 2.2-5 5.4-5 10.2 0 3.7 2.2 6.6 4.7 7.7v1.7h1.2v-1.7c2.5-1.1 4.7-4 4.7-7.7 0-4.8-3.4-8-5-10.2z"/><path fill="#81C784" d="M12 4.6v14.8c2-.9 3.7-3.4 3.7-6.7 0-3.7-2.2-6.5-3.7-8.1z"/></svg>'},
    {name:'MySQL',svg:'<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#00758F" stroke-width="1.8"/><path fill="none" stroke="#00758F" stroke-width="1.8" d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path fill="none" stroke="#F29111" stroke-width="1.8" d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>'}
  ];
  var html='';for(var i=0;i<2;i++)tech.forEach(function(t){html+='<span class="tech-item">'+t.svg+'<span>'+t.name+'</span></span>'});
  document.getElementById('track').innerHTML=html;

  var pending=[];
  var items=document.querySelectorAll('.hero > *, .marquee, h2, .sub, .about-intro > *, .acc, .stage, .proj, .more, .contact > *');
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
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    dot.className = 'ice-dot';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';
    dot.style.animationDelay = (Math.random() * 3) + 's';
    dot.style.animationDuration = (2 + Math.random() * 3) + 's';
    dot.style.setProperty('--dx', ((Math.random() - 0.5) * 32).toFixed(1) + 'px');
    dot.style.setProperty('--dy', ((Math.random() - 0.5) * 32).toFixed(1) + 'px');
    dot.style.setProperty('--drift-dur', (8 + Math.random() * 7).toFixed(1) + 's');
    dotsContainer.appendChild(dot);
  }
  if (!reduceMotion && matchMedia('(pointer: fine)').matches) {
    let dotRaf = null;
    window.addEventListener('pointermove', function(e) {
      if (dotRaf) return;
      dotRaf = requestAnimationFrame(function() {
        const px = (e.clientX / window.innerWidth - 0.5) * -22;
        const py = (e.clientY / window.innerHeight - 0.5) * -22;
        dotsContainer.style.transform = 'translate3d(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px,0)';
        dotRaf = null;
      });
    }, { passive: true });
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

  var loader=document.getElementById('loader'),loaderText=document.getElementById('loader-text'),
      loaderFill=document.getElementById('loader-fill'),loaderPct=document.getElementById('loader-pct'),
      loaderBar=document.querySelector('.loader-progress'),finished=false;
  var sweepHeadings=document.querySelectorAll('.heading-sweep');
  var sweepStarted=false;
  function startHeadingSweep(){
    if(sweepStarted||reduceMotion||!('IntersectionObserver' in window))return;
    sweepStarted=true;
    var sweepIo=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add('sweep-in');
        }else{
          en.target.classList.remove('sweep-in');
        }
      });
    },{threshold:.35});
    sweepHeadings.forEach(function(h){sweepIo.observe(h)});
  }
  function startReveal(){
    pending.forEach(function(el){io.observe(el)});
    startHeadingSweep();
  }
  function setProgress(pct){
    var v=Math.max(0,Math.min(100,Math.round(pct)));
    if(loaderFill)loaderFill.style.width=v+'%';
    if(loaderPct)loaderPct.textContent=v+'%';
    if(loaderBar)loaderBar.setAttribute('aria-valuenow',v);
  }
  function runProgress(duration){
    return new Promise(function(resolve){
      var t0=performance.now();
      (function step(now){
        var p=Math.min((now-t0)/duration,1);
        var eased=1-Math.pow(1-p,3);
        setProgress(eased*100);
        if(p<1)requestAnimationFrame(step);
        else resolve();
      })(t0);
    });
  }
  function finishLoading(){
    if(finished)return;finished=true;
    setProgress(100);
    loader.classList.add('done');
    document.body.style.overflow='';
    startReveal();
    setTimeout(function(){loader.remove()},800);
  }
  if(reduceMotion){
    loader.remove();startReveal();
  }else{
    root.classList.add('has-loader');
    document.body.style.overflow='hidden';
    Promise.all([scramble(loaderText,'Halimat Yakubu'),runProgress(1300)]).then(function(){
      setTimeout(finishLoading,300);
    });
    setTimeout(finishLoading,6000);
  }

  /* Hero name hover scramble easter egg */
  var heroName=document.getElementById('hero-name');
  if(heroName && !reduceMotion){
    var heroScrambler=new TextScramble(heroName,{fps:32});
    var heroScrambling=false;
    var triggerHeroScramble=function(){
      if(heroScrambling)return;
      heroScrambling=true;
      heroScrambler.setText('Halimat Yakubu').then(function(){heroScrambling=false});
    };
    heroName.addEventListener('mouseenter',triggerHeroScramble);
  }

  /* Cursor spotlight tracking on project cards and stats stage */
  if(!reduceMotion && matchMedia('(pointer: fine)').matches){
    document.querySelectorAll('.proj, .stage').forEach(function(card){
      card.addEventListener('pointermove',function(e){
        var rect=card.getBoundingClientRect();
        card.style.setProperty('--mx',(e.clientX-rect.left)+'px');
        card.style.setProperty('--my',(e.clientY-rect.top)+'px');
      },{passive:true});
    });
  }

  /* Active navigation dot based on current section */
  var navLinks=Array.prototype.slice.call(document.querySelectorAll('header nav a[href^="#"]'));
  var navSections=navLinks.map(function(link){
    var id=link.getAttribute('href').slice(1);
    return {link:link,el:document.getElementById(id)};
  }).filter(function(item){return item.el});

  function setActiveNav(activeEl){
    navSections.forEach(function(item){
      var isMatch=item.el===activeEl;
      item.link.classList.toggle('active',isMatch);
      if(isMatch)item.link.setAttribute('aria-current','page');
      else item.link.removeAttribute('aria-current');
    });
  }

  function updateActiveNav(){
    if(!navSections.length)return;
    var scrollBottom=window.scrollY+window.innerHeight;
    var docHeight=document.documentElement.scrollHeight;
    if(scrollBottom>=docHeight-4){
      setActiveNav(navSections[navSections.length-1].el);
      return;
    }
    var offset=140;
    var currentEl=navSections[0].el;
    navSections.forEach(function(item){
      if(item.el.getBoundingClientRect().top<=offset){
        currentEl=item.el;
      }
    });
    setActiveNav(currentEl);
  }

  navLinks.forEach(function(link){
    link.addEventListener('click',function(){
      var target=document.getElementById(link.getAttribute('href').slice(1));
      if(target)setActiveNav(target);
    });
  });

  var navTicking=false;
  window.addEventListener('scroll',function(){
    if(!navTicking){
      navTicking=true;
      requestAnimationFrame(function(){
        updateActiveNav();
        navTicking=false;
      });
    }
  },{passive:true});
  window.addEventListener('resize',updateActiveNav,{passive:true});
  updateActiveNav();

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
    (d.bars.indexOf('|')!==-1?d.bars.split('|'):d.bars.split(',')).forEach(function(pair){
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
