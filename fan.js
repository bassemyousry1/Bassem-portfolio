(()=>{
 const showcase=document.querySelector('.fan-showcase'),track=showcase.querySelector('.fan-track'),hero=document.querySelector('.reference-hero');
 const words=[...document.querySelectorAll('.ribbon-word')],reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let time=0,deckTime=0,previous=0,hovered=false,focused=false,inView=true,dragging=false,swiped=false,dragStart=0,manualSwing=0,resumeAt=0;
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;},{threshold:.02}).observe(hero);
 function updateNav(){document.body.classList.toggle('fan-intro-active',hero.getBoundingClientRect().bottom>110);}
 addEventListener('scroll',updateNav,{passive:true});updateNav();
 track.addEventListener('pointerover',e=>{if(e.pointerType==='mouse'&&e.target.closest('.fan-card'))hovered=true;});
 track.addEventListener('pointerout',e=>{if(!e.relatedTarget?.closest?.('.fan-card'))hovered=false;});
 track.addEventListener('focusin',()=>focused=true);track.addEventListener('focusout',e=>focused=track.contains(e.relatedTarget));
 showcase.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;dragging=true;swiped=false;dragStart=e.clientX;manualSwing=Number.parseFloat(showcase.style.getPropertyValue('--fan-swing'))||0;resumeAt=performance.now()+5000;});
 showcase.addEventListener('pointermove',e=>{if(!dragging)return;if(Math.abs(e.clientX-dragStart)>6)swiped=true;const degrees=Math.max(-8,Math.min(8,manualSwing+(e.clientX-dragStart)/15));showcase.style.setProperty('--fan-swing',degrees+'deg');});
 showcase.addEventListener('click',e=>{if(swiped){e.preventDefault();e.stopPropagation();swiped=false;}},true);
 function endDrag(){dragging=false;const degrees=Number.parseFloat(showcase.style.getPropertyValue('--fan-swing'))||0;deckTime=Math.asin(Math.max(-1,Math.min(1,degrees/8)))/.48;resumeAt=performance.now()+4500;}
 showcase.addEventListener('pointerup',endDrag);showcase.addEventListener('pointercancel',endDrag);
 showcase.style.touchAction='pan-y';
 function frame(now){const dt=Math.min((now-previous)/1000,.05);previous=now;
  const paused=reduced.matches||document.body.classList.contains('motion-paused')||document.hidden||!inView;
  if(!paused){time+=dt;
   // Two printed faces orbit the same horizontal ribbon; each letter follows its surface.
   words.forEach((word,row)=>[...word.children].forEach((letter,i)=>{const phase=time*.95+i*.17+row*Math.PI;const front=Math.cos(phase)>0;
    letter.style.transform=`translateY(${(((row===0?-1:1)+Math.sin(phase)*.24)*Math.min(25,innerWidth*.035)).toFixed(2)}px) scaleY(${(.42+.13*Math.abs(Math.cos(phase))).toFixed(3)}) skewY(${(Math.cos(phase)*-5).toFixed(2)}deg)`;
    letter.style.color=front?'#f7f4f0':'transparent';letter.style.zIndex=front?'2':'1';
   }));
   if(!hovered&&!focused&&!dragging&&now>=resumeAt){deckTime+=dt;showcase.style.setProperty('--fan-swing',(Math.sin(deckTime*.48)*8).toFixed(3)+'deg');}
  }
  requestAnimationFrame(frame);
 }
 requestAnimationFrame(frame);
 track.addEventListener('click',e=>{const card=e.target.closest('.fan-card');if(!card)return;if(card.dataset.fanSector)document.querySelector(`[data-sector-target="${card.dataset.fanSector}"]`)?.click();});
})();


