/* Aerosystems Notebook: highlight the nav item of the section in view and fill the progress line. */
(function(){
  var nav=document.querySelector('.nav'); if(!nav) return;
  var links=[].slice.call(nav.querySelectorAll('a[href^="#"]'));
  var bar=nav.querySelector('.progress');
  var secs=links.map(function(a){return document.getElementById(a.getAttribute('href').slice(1));});
  function update(){
    var cur=0;
    secs.forEach(function(s,i){ if(s && s.getBoundingClientRect().top-120<=0) cur=i; });
    links.forEach(function(a,i){ a.classList.toggle('is-active',i===cur); if(i===cur) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current'); });
    var max=document.documentElement.scrollHeight-innerHeight;
    if(bar) bar.style.setProperty('--progress', max>0?Math.min(1,scrollY/max):0);
  }
  addEventListener('scroll',update,{passive:true}); addEventListener('resize',update); update();
})();
