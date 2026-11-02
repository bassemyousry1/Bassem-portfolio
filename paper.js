/* Small, optional motion; content and controls remain usable without it. */
(()=>{
 const pref=matchMedia('(prefers-reduced-motion: reduce)');
 const toggle=document.createElement('button');
 toggle.className='paper-motion-toggle';toggle.type='button';
 toggle.setAttribute('aria-label','Pause decorative motion');
 document.body.append(toggle);
 let paused=pref.matches;
 function sync(){document.body.classList.toggle('motion-paused',paused);toggle.textContent=paused?'Motion: off':'Motion: on';toggle.setAttribute('aria-pressed',String(paused));toggle.setAttribute('aria-label',paused?'Enable decorative motion':'Pause decorative motion');}
 toggle.addEventListener('click',()=>{paused=!paused;sync()});pref.addEventListener('change',e=>{paused=e.matches;sync()});sync();
 const intro=document.querySelectorAll('.paper-about-grid>*');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('paper-arrived');observer.unobserve(e.target)}}),{threshold:.15});
 intro.forEach(el=>{el.classList.add('paper-enter');observer.observe(el)});
 document.querySelectorAll('.paper-polaroid').forEach(card=>{
  card.addEventListener('pointermove',e=>{if(paused||e.pointerType!=='mouse')return;const r=card.getBoundingClientRect();card.style.setProperty('--tilt',`${((e.clientX-r.left)/r.width-.5)*8}deg`)});
  card.addEventListener('pointerleave',()=>card.style.removeProperty('--tilt'));
 });
})();
