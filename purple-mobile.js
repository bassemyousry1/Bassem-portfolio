/* Mobile controls delegate to the existing, accessible desktop controls. */
(()=>{
 const mobile=matchMedia('(max-width:720px)');
 function accordionList(containerSelector,itemSelector,headingSelector,iconSelector){
  const source=document.querySelector(containerSelector);if(!source)return;
  const list=document.createElement('div');list.className='mobile-accordion-list';
  source.querySelectorAll(itemSelector).forEach(item=>{
   const detail=document.createElement('details'),summary=document.createElement('summary');
   const icon=item.querySelector(iconSelector)?.cloneNode(true);
   if(icon){icon.setAttribute('aria-hidden','true');summary.append(icon);}
   const title=document.createElement('span');title.textContent=item.querySelector(headingSelector).textContent;summary.append(title);
   detail.append(summary);
   const description=item.querySelector('p').cloneNode(true);detail.append(description);
   const extra=item.querySelector('small');if(extra)detail.append(extra.cloneNode(true));
   list.append(detail);
  });
  source.after(list);source.classList.add('mobile-has-alternative');
 }
 accordionList('#platforms .platforms','.platform','h3','.platform-icon');
 accordionList('#services .discipline',':scope > div','b','.iconbox');
 function picker(tabsSelector,stackSelector,attribute,labelText,id){
  const tabs=[...document.querySelectorAll(tabsSelector)],stack=document.querySelector(stackSelector);if(!tabs.length||!stack)return;
  const label=document.createElement('label');label.className='mobile-case-picker';label.htmlFor=id;
  const caption=document.createElement('span');caption.textContent=labelText;
  const select=document.createElement('select');select.id=id;select.setAttribute('aria-label',labelText);
  tabs.forEach((tab,index)=>{const option=document.createElement('option');option.value=tab.getAttribute(attribute);option.textContent=`${String(index+1).padStart(2,'0')} · ${tab.textContent.trim()}`;select.append(option);});
  const sync=()=>{const active=tabs.find(tab=>tab.getAttribute('aria-selected')==='true');if(active)select.value=active.getAttribute(attribute);};
  select.addEventListener('change',()=>{tabs.find(tab=>tab.getAttribute(attribute)===select.value)?.click();if(mobile.matches){const top=label.getBoundingClientRect().top+scrollY-110;window.scrollTo({top,behavior:'instant'});}});
  const observer=new MutationObserver(sync);tabs.forEach(tab=>observer.observe(tab,{attributes:true,attributeFilter:['aria-selected']}));
  sync();label.append(caption,select);stack.before(label);
 }
 picker('.campaign-v21-tab','.campaign-v21-stack','data-campaign-target','Choose a client','mobile-client');
 picker('.sector-tab','.sector-case-stack','data-sector-target','Choose a sector','mobile-sector');
 const wrappers=[];
 function syncDisclosures(){
  if(!mobile.matches){wrappers.splice(0).forEach(({element,detail})=>{detail.before(element);detail.remove();});return;}
  if(wrappers.length)return;
  [['.case-story','Campaign approach'],['.campaign-scope-note','About these case studies']].forEach(([selector,title])=>document.querySelectorAll(selector).forEach(element=>{
   const detail=document.createElement('details');detail.className='mobile-story-details';
   const summary=document.createElement('summary');summary.textContent=title;detail.append(summary);element.before(detail);detail.append(element);wrappers.push({element,detail});
  }));
 }
 syncDisclosures();mobile.addEventListener('change',syncDisclosures);
})();
