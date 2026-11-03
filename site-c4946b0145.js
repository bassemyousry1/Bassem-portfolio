/* External image references; the image bytes load only when needed. */
window.__portfolioImageMap={
  "__PORTFOLIO_IMG_0__": "assets/images/portfolio-img-0.webp",
  "__PORTFOLIO_IMG_1__": "assets/images/portfolio-img-1.webp",
  "__PORTFOLIO_IMG_2__": "assets/images/portfolio-img-2.webp",
  "__PORTFOLIO_IMG_3__": "assets/images/portfolio-img-3.webp",
  "__PORTFOLIO_IMG_4__": "assets/images/portfolio-img-4.webp",
  "__PORTFOLIO_IMG_5__": "assets/images/portfolio-img-5.webp",
  "__PORTFOLIO_IMG_6__": "assets/images/portfolio-img-6.webp",
  "__PORTFOLIO_IMG_7__": "assets/images/portfolio-img-7.webp",
  "__PORTFOLIO_IMG_8__": "assets/images/portfolio-img-8.webp",
  "__PORTFOLIO_IMG_9__": "assets/images/portfolio-img-9.webp",
  "__PORTFOLIO_IMG_10__": "assets/images/portfolio-img-10.webp",
  "__PORTFOLIO_IMG_11__": "assets/images/portfolio-img-11.webp",
  "__PORTFOLIO_IMG_12__": "assets/images/portfolio-img-12.webp",
  "__PORTFOLIO_IMG_13__": "assets/images/portfolio-img-13.webp",
  "__PORTFOLIO_IMG_14__": "assets/images/portfolio-img-14.webp",
  "__PORTFOLIO_IMG_15__": "assets/images/portfolio-img-15.webp",
  "__PORTFOLIO_IMG_16__": "assets/images/portfolio-img-16.webp",
  "__PORTFOLIO_IMG_17__": "assets/images/portfolio-img-17.webp",
  "__PORTFOLIO_IMG_18__": "assets/images/portfolio-img-18.webp",
  "__PORTFOLIO_IMG_19__": "assets/images/portfolio-img-19.webp",
  "__PORTFOLIO_IMG_20__": "assets/images/portfolio-img-20.webp",
  "__PORTFOLIO_IMG_21__": "assets/images/portfolio-img-21.webp",
  "__PORTFOLIO_IMG_22__": "assets/images/portfolio-img-22.webp",
  "__PORTFOLIO_IMG_23__": "assets/images/portfolio-img-23.webp",
  "__PORTFOLIO_IMG_24__": "assets/images/portfolio-img-24.webp",
  "__PORTFOLIO_IMG_25__": "assets/images/portfolio-img-25.webp",
  "__PORTFOLIO_IMG_26__": "assets/images/portfolio-img-26.webp",
  "__PORTFOLIO_IMG_27__": "assets/images/portfolio-img-27.webp",
  "__PORTFOLIO_IMG_28__": "assets/images/portfolio-img-28.webp",
  "__PORTFOLIO_IMG_29__": "assets/images/portfolio-img-29.webp",
  "__PORTFOLIO_IMG_30__": "assets/images/portfolio-img-30.webp",
  "__PORTFOLIO_IMG_31__": "assets/images/portfolio-img-31.webp",
  "__PORTFOLIO_IMG_32__": "assets/images/portfolio-img-32.webp",
  "__PORTFOLIO_IMG_33__": "assets/images/portfolio-img-33.webp",
  "__PORTFOLIO_IMG_34__": "assets/images/portfolio-img-34.webp",
  "__PORTFOLIO_IMG_35__": "assets/images/portfolio-img-35.webp",
  "__PORTFOLIO_IMG_36__": "assets/images/portfolio-img-36.webp",
  "__PORTFOLIO_IMG_37__": "assets/images/portfolio-img-37.webp",
  "__PORTFOLIO_IMG_38__": "assets/images/portfolio-img-38.webp",
  "__PORTFOLIO_IMG_39__": "assets/images/portfolio-img-39.webp",
  "__PORTFOLIO_IMG_40__": "assets/images/portfolio-img-40.webp",
  "__PORTFOLIO_IMG_41__": "assets/images/portfolio-img-41.webp",
  "__PORTFOLIO_IMG_42__": "assets/images/portfolio-img-42.webp",
  "__PORTFOLIO_IMG_43__": "assets/images/portfolio-img-43.webp",
  "__PORTFOLIO_IMG_44__": "assets/images/portfolio-img-44.webp",
  "__PORTFOLIO_IMG_45__": "assets/images/portfolio-img-45.webp",
  "__SECTOR_HEALTH_1__": "assets/images/sector-health-1.webp",
  "__SECTOR_HEALTH_2__": "assets/images/sector-health-2.webp",
  "__SECTOR_HEALTH_3__": "assets/images/sector-health-3.webp",
  "__SECTOR_BIZ_1__": "assets/images/sector-biz-1.webp",
  "__SECTOR_BIZ_2__": "assets/images/sector-biz-2.webp",
  "__SECTOR_BIZ_3__": "assets/images/sector-biz-3.webp",
  "__SECTOR_AUTO_1__": "assets/images/sector-auto-1.webp",
  "__SECTOR_AUTO_2__": "assets/images/sector-auto-2.webp",
  "__SECTOR_SERVICE_1__": "assets/images/sector-service-1.webp",
  "__SECTOR_SERVICE_2__": "assets/images/sector-service-2.webp",
  "__SECTOR_SERVICE_3__": "assets/images/sector-service-3.webp",
  "__SECTOR_RE_1__": "assets/images/sector-re-1.webp",
  "__CAMPAIGN_HADARA__": "assets/images/campaign-hadara.webp",
  "__CAMPAIGN_SHERBINY_1__": "assets/images/campaign-sherbiny-1.webp",
  "__CAMPAIGN_SHERBINY_2__": "assets/images/campaign-sherbiny-2.webp",
  "__CAMPAIGN_GHARBIA__": "assets/images/campaign-gharbia.webp",
  "__CASE_DRTAMER__": "assets/images/case-drtamer.webp",
  "__CASE_EXIGE__": "assets/images/case-exige.webp",
  "__CASE_BAZAAR_UAE__": "assets/images/case-bazaar-uae.webp",
  "__CASE_BAZAAR_JORDAN__": "assets/images/case-bazaar-jordan.webp",
  "__CASE_BAZAAR_EGYPT__": "assets/images/case-bazaar-egypt.webp",
  "__CASE_BAZAAR_ACCOUNT__": "assets/images/case-bazaar-account.webp",
  "__CASE_ZAFRAN__": "assets/images/case-zafran.webp",
  "__CASE_TADBEER_STRONG__": "assets/images/case-tadbeer-strong.webp",
  "__CASE_K7_STRONG__": "assets/images/case-k7-strong.webp",
  "__CASE_SHAK_FOLLOWERS__": "assets/images/case-shak-followers.webp",
  "__CASE_SHAK_PROFILE__": "assets/images/case-shak-profile.webp"
};
window.__resolvePortfolioAssets=value=>typeof value==='string'?value.replace(/__[A-Z][A-Z0-9_]*__/g,key=>window.__portfolioImageMap[key]||key):value;

document.getElementById('year').textContent=new Date().getFullYear();

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Assign varied directions + stagger delays without cluttering the HTML */
const revealEls=[...document.querySelectorAll('.reveal')];
revealEls.forEach((el,i)=>{
  if(el.classList.contains('platform')){
    const n=[...el.parentElement.children].indexOf(el);
    el.classList.add(n%2===0?'from-left':'from-right');
    el.style.setProperty('--reveal-delay',`${n*85}ms`);
  }else if(el.classList.contains('project')){
    const n=[...el.parentElement.children].indexOf(el);
    el.classList.add('zoom-in');
    el.style.setProperty('--reveal-delay',`${Math.min(n*70,280)}ms`);
  }else if(el.parentElement?.classList.contains('discipline')){
    const n=[...el.parentElement.children].indexOf(el);
    el.style.setProperty('--reveal-delay',`${n*70}ms`);
  }else if(el.tagName==='ARTICLE' && el.parentElement?.classList.contains('recent')){
    const n=[...el.parentElement.children].indexOf(el);
    el.style.setProperty('--reveal-delay',`${n*80}ms`);
  }
});

const obs=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -7% 0px'});
revealEls.forEach(el=>obs.observe(el));

/* Animated hero numbers — synced with the stats entrance */
const countEls=[...document.querySelectorAll('.countup')];
const statsBlock=document.querySelector('.stats');
let countersStarted=false;

function startHeroCounters(){
  if(countersStarted)return;
  countersStarted=true;

  countEls.forEach(el=>{
    const target=Number(el.dataset.target);
    const suffix=el.dataset.suffix||'';

    if(reduceMotion){
      el.textContent=target+suffix;
      return;
    }

    /* Keep the original counting speed exactly as it was. */
    const duration=1150;
    const start=performance.now();

    const tick=now=>{
      const t=Math.min((now-start)/duration,1);
      const eased=1-Math.pow(1-t,3);
      el.textContent=Math.round(target*eased)+suffix;
      if(t<1)requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

if(statsBlock){
  if(reduceMotion){
    startHeroCounters();
  }else{
    /*
      Start on the exact frame the stats entrance animation begins.
      This keeps every V17-3 hero timing intact, but removes the
      visible pause where the cards could sit at 0 before counting.
    */
    statsBlock.addEventListener('animationstart',event=>{
      if(event.animationName==='heroEnter')startHeroCounters();
    },{once:true});

    /* Safety fallback in case the animation event has already fired. */
    requestAnimationFrame(()=>{
      const styles=getComputedStyle(statsBlock);
      if(parseFloat(styles.opacity)>0.01)startHeroCounters();
    });
  }
}

/* Scroll progress + restrained parallax. One RAF per frame, no heavy library. */
const progressBar=document.querySelector('.scroll-progress span');
const grid=document.querySelector('.gridfx');
const proofImg=document.querySelector('.proof img');
const projectImgs=[...document.querySelectorAll('.project img')];
const nav=document.querySelector('nav');
let ticking=false;

function updateMotion(){
  const y=window.scrollY;
  const max=Math.max(document.documentElement.scrollHeight-innerHeight,1);
  if(progressBar)progressBar.style.transform=`scaleX(${Math.min(y/max,1)})`;
  if(nav)nav.classList.toggle('scrolled',y>36);

  if(!reduceMotion){
    if(grid){
      const gy=Math.min(y*.085,72);
      const rot=-5+Math.min(y*.0015,1.4);
      grid.style.setProperty('--grid-y',`${gy}px`);
      grid.style.setProperty('--grid-r',`${rot}deg`);
    }

    projectImgs.forEach(img=>{
      const card=img.closest('.project');
      const r=card.getBoundingClientRect();
      if(r.bottom>0 && r.top<innerHeight){
        const center=r.top+r.height/2;
        const delta=(center-innerHeight/2)/innerHeight;
        img.style.setProperty('--img-y',`${Math.max(-18,Math.min(18,-delta*28))}px`);
      }
    });

    if(proofImg){
      const r=proofImg.closest('.proof').getBoundingClientRect();
      if(r.bottom>0 && r.top<innerHeight){
        const delta=(r.top+r.height/2-innerHeight/2)/innerHeight;
        proofImg.style.setProperty('--proof-y',`${Math.max(-22,Math.min(22,-delta*34))}px`);
      }
    }
  }
  ticking=false;
}
function requestMotion(){
  if(!ticking){
    requestAnimationFrame(updateMotion);
    ticking=true;
  }
}
addEventListener('scroll',requestMotion,{passive:true});
addEventListener('resize',requestMotion,{passive:true});
updateMotion();

const YASSMINE_CASE_HTML=`
<div class="y-hero">
  <p>Yassmine was already generating demand through social media, but the sales process depended heavily on direct messages. As demand grew, that manual path became a bottleneck. I worked with the brand for around 18 months across paid media, website analysis and e-commerce strategy, with the goal of building a clearer path from ad click to completed purchase.</p>
  <div class="y-role">
    <span>Paid Media Strategy</span>
    <span>Meta Conversion Campaigns</span>
    <span>Funnel Optimization</span>
    <span>Website Analysis</span>
    <span>E-commerce Strategy</span>
  </div>
</div>

<div class="y-metrics">
  <div class="y-metric"><b>EGP <em>167.6K+</em></b><span>Conversion ad spend · messaging spend excluded</span></div>
  <div class="y-metric"><b><em>9.1x</em></b><span>Average account ROAS across conversion activity</span></div>
  <div class="y-metric"><b>≈ EGP <em>1.52M</em></b><span>Attributed revenue based on spend × average ROAS</span></div>
  <div class="y-metric"><b><em>18</em> months</b><span>Working with the brand across growth and conversion</span></div>
</div>
<p class="y-note">Revenue is shown as an approximation from EGP 167,628.08 conversion spend × 9.1 average ROAS. Messaging campaign spend is excluded from this calculation.</p>

<div class="y-grid">
  <div class="y-block">
    <small>The Challenge</small>
    <h4>Demand existed. The sales system was slowing it down.</h4>
    <p>The brand relied heavily on Instagram messages to convert interest into orders. That created manual conversations, limited scalability and made paid acquisition depend on a sales process that could not grow efficiently with demand.</p>
  </div>
  <div class="y-block">
    <small>What I Identified</small>
    <h4>The issue was bigger than the ads.</h4>
    <p>I reviewed the customer journey and identified friction in the website and checkout experience. Instead of treating media buying as an isolated task, the recommendation was to improve the infrastructure behind the campaigns and move toward a website-first sales journey.</p>
  </div>
  <div class="y-block">
    <small>The Recommendation</small>
    <h4>Move the business toward Shopify and website conversions.</h4>
    <p>I recommended a Shopify-led direction so the brand could rely less on manual DMs and give conversion campaigns a cleaner path to purchase. The growth plan shifted toward making the website the commercial destination rather than only a supporting touchpoint.</p>
  </div>
  <div class="y-block">
    <small>My Role</small>
    <h4>Optimize the full journey, not just Ads Manager.</h4>
    <p>My work covered conversion campaign planning and optimization, product and seasonal campaign structure, audience and creative testing, ROAS and purchase analysis, website funnel review and identifying the friction that could limit paid-media scale.</p>
  </div>
</div>

<div class="y-funnel">
  <div class="y-step"><span>01 / Before</span><b>DM-dependent sales process</b></div>
  <div class="y-step"><span>02 / Diagnosis</span><b>Website friction identified</b></div>
  <div class="y-step"><span>03 / Direction</span><b>Shopify recommendation</b></div>
  <div class="y-step"><span>04 / Funnel</span><b>Website-first conversion path</b></div>
  <div class="y-step"><span>05 / Scale</span><b>Ongoing Meta conversion campaigns</b></div>
</div>

<div class="y-campaign-head">
  <h4>Selected campaign performance</h4>
  <p>Three campaign examples from different periods show that the result was not dependent on one isolated winner.</p>
</div>

<div class="y-campaigns">
  <div class="y-campaign">
    <small>New Site Campaign</small>
    <h5>Website purchase scale after the shift</h5>
    <div class="big"><b>347</b><span>website purchases</span></div>
    <div class="big"><b class="roas">11.54x</b><span>ROAS</span></div>
  </div>
  <div class="y-campaign">
    <small>Ramadan Campaign</small>
    <h5>Seasonal conversion performance</h5>
    <div class="big"><b>53</b><span>website purchases</span></div>
    <div class="big"><b class="roas">16.95x</b><span>ROAS</span></div>
  </div>
  <div class="y-campaign">
    <small>August Campaign</small>
    <h5>Consistent purchase performance</h5>
    <div class="big"><b>72</b><span>website purchases</span></div>
    <div class="big"><b class="roas">10.84x</b><span>ROAS</span></div>
  </div>
</div>

<div class="y-proof">
  <figure><img src="__PORTFOLIO_IMG_8__" alt="Meta Ads Manager row showing New Site campaign with 347 website purchases and 11.54 ROAS" loading="lazy" decoding="async" width="1650" height="60"><figcaption>New Site campaign · 347 website purchases · 11.54x ROAS</figcaption></figure>
  <figure><img src="__PORTFOLIO_IMG_0__" alt="Meta Ads Manager row showing Ramadan campaign with 53 website purchases and 16.95 ROAS" loading="lazy" decoding="async" width="1650" height="45"><figcaption>Ramadan campaign · 53 website purchases · 16.95x ROAS</figcaption></figure>
  <figure><img src="__PORTFOLIO_IMG_34__" alt="Meta Ads Manager row showing August campaign with 72 website purchases and 10.84 ROAS" loading="lazy" decoding="async" width="1650" height="55"><figcaption>August campaign · 72 website purchases · 10.84x ROAS</figcaption></figure>
</div>

<div class="y-impact">
  <small>Business Impact</small>
  <h4>The real result was not only a better ROAS.</h4>
  <p>The bigger shift was helping the brand move away from a sales process heavily dependent on manual conversations and toward a more scalable e-commerce model. Paid media became part of a complete purchase journey not just a source of incoming messages.</p>
  <a class="y-link" href="https://www.instagram.com/yassmine.eg/" target="_blank" rel="noreferrer">View Yassmine on Instagram ↗</a>
</div>
`;
const cases={
  realestate:{
    k:'Real Estate · Meta Ads · Lead Forms',
    t:'Real Estate Lead Generation — Reported Performance',
    o:'Generate property inquiries through lead forms across Bait Al Watan, North Rehab and ZAHYA campaigns.',
    p:'Meta Ads lead forms. Reporting period: 29 January–29 October 2026. Currency: EGP.',
    u:'Property campaigns named Bait Al Watan, North Rehab and ZAHYA. Audience targeting and lead quality are not documented in the export.',
    a:'Campaign names include CBO, ABO and TEST labels. The report does not document targeting, creative tests or optimization decisions; no causal improvement is claimed.',
    r:'21 rows labeled Leads (form): 909 reported form leads, EGP 123,932.22 spend and 640,199 impressions. Weighted CPL = EGP 123,932.22 / 909 = EGP 136.34. Selected Bait Al Watan – Residential F13 9/4 campaign: 46 leads, EGP 1,730.50 spend and EGP 37.62 CPL.',
    l:'Source: Untitled-report.xlsx, Raw Data Report. Formatted Report duplicates the same records and is not counted again. Only Leads (form) rows are included. The 12 custom-conversion results, messaging, visits, awareness and rows with no result type are excluded with their spend. Most included rows use 7-day click or 1-day view attribution; one has an unspecified setting. Form leads are not verified qualified buyers, unique people, sales or revenue. No ROAS or improvement claim is supported.',
    shots:[]
  },
  sherbiny:{
    k:'Medical · Egypt · Meta Ads',
    t:'Primar Clinics — Account Scale + Selected Performance',
    o:'Generate patient inquiries while also supporting profile visibility and engagement.',
    p:'Meta Ads across separate messaging, profile-visit and engagement objectives.',
    u:'Egyptian medical audience around different clinic procedures and patient-intent levels.',
    a:'Separated campaign objectives so messaging, profile growth and engagement could each be optimized against the correct KPI instead of one blended benchmark.',
    r:'Total account spend visible in the account: EGP 216,806.54. Selected campaign proof includes 1,000 messaging conversations at EGP 11.41 per conversation, 449 conversations at EGP 95.23, 784 Instagram profile visits at EGP 3.02 per visit, and 1.7K post engagements at EGP 0.08.',
    l:'The account-scale spend and the selected campaign results are intentionally shown as different scopes. The screenshots available for this account are mobile screenshots, so they are not displayed in the portfolio.',
    shots:[]
  },
  gharbia:{
    k:'Medical Personal Brand · Egypt · Meta Ads',
    t:'Dr. Mohamed Gharbia — Visibility + Messaging',
    o:'Grow profile visibility while continuing to generate direct patient conversations.',
    p:'Meta Ads using separate profile-visit and messaging campaign objectives.',
    u:'Egyptian audience around a doctor-led personal medical brand.',
    a:'Separated discovery from inquiry generation so each campaign could optimize against its intended action.',
    r:'Total account spend visible in the account: EGP 341,847.16. A selected profile-visit campaign generated 1.1K visits at EGP 0.94 per visit. A selected messaging campaign generated 277 conversations at EGP 49.24 per conversation.',
    l:'Visibility and messaging were treated as separate jobs rather than forcing both into one performance benchmark. Mobile screenshots are not shown in the portfolio.',
    shots:[]
  },
  drtamer:{
    k:'Medical · UAE · Meta Ads',
    t:'Dr. Tamer Said — Multi-Location Procedure Campaigns',
    o:'Generate patient conversations for different procedures while supporting surgery activity across multiple UAE locations.',
    p:'Meta messaging campaigns organized around procedures and locations such as Ajman, Eastern UAE and Takmem.',
    u:'UAE audiences with different procedure needs and location proximity.',
    a:'Used procedure/location combinations to separate demand pockets and compare conversation cost by campaign rather than treating the account as one generic medical audience.',
    r:'Account snapshot: 7 visible campaigns, AED 21,167.35 total spend, 1,020 messaging conversations, AED 20.75 average cost per conversation, 196,635 reach and 499,912 impressions.',
    l:'The locations in the campaign names all belong to the same doctor and represent where procedures were being performed, not different clients. The screenshot is a selected account snapshot rather than the full body of work.',
    shots:['__CASE_DRTAMER__']
  },
  tadbeer:{
    k:'UAE · Meta Ads · WhatsApp',
    t:'Tadbeer Center — 15+ Campaigns Managed',
    o:'Generate WhatsApp inquiries for home-labor services across repeated campaign waves.',
    p:'Meta Ads using messaging-focused campaign structures and direct-response WhatsApp journeys.',
    u:'UAE audiences across multiple messaging campaigns and audience groups.',
    a:'Managed 15+ campaigns, using audience separation, direct Arabic response paths and ongoing cost-per-conversation optimization.',
    r:'A documented two-campaign snapshot shows AED 22,083.49 spend, 2,583 messaging conversations, AED 8.55 average cost per conversation and 59,086 reach. The larger campaign generated 2,254 conversations at AED 8.67; a second segment generated 329 at AED 7.71.',
    l:'The screenshot proves only two campaigns, while the broader scope of my work covered 15+ campaigns. The selected snapshot is evidence, not the full account history.',
    shots:['__CASE_TADBEER_STRONG__']
  },
  k7:{
    k:'GCC · Meta Ads · WhatsApp',
    t:'K7 Forged — 8 Campaigns Managed',
    o:'Generate qualified WhatsApp conversations for a premium automotive wheel business.',
    p:'Meta Ads across messaging and awareness, with language, saved-audience and cold-audience campaign structures.',
    u:'GCC audiences including Arabic and Russian-speaking segments.',
    a:'Managed all 8 campaigns visible in the account snapshot. Segmented audiences by language and audience type, then compared conversation volume and cost to decide where to scale or retest.',
    r:'AED 44,930.09 total managed spend across 8 campaigns. The 7 messaging campaigns generated 2,298 conversations in total. Account snapshot reach: 303,967; views: 231,957. The saved-audience campaign generated 1,737 conversations at AED 17.93 per conversation.',
    l:'The account demonstrates both scale and optimization depth: audience groups behaved differently, so segmentation and creative relevance mattered more than simply increasing budget.',
    shots:['__CASE_K7_STRONG__']
  },
  shakman:{
    k:'TikTok + Instagram · Egypt + UAE',
    t:'TheShakman — TikTok Growth + Instagram Traffic',
    o:'Grow TikTok followers while also driving Instagram profile traffic efficiently across Egypt and UAE.',
    p:'TikTok follower-growth campaigns combined with Instagram profile-visit activity and cross-market TikTok delivery.',
    u:'Egypt and UAE, with platform and market performance kept separate so cost differences were visible.',
    a:'Measured TikTok follower growth, Instagram profile visits and TikTok market delivery as separate jobs. Compared Egypt vs. UAE TikTok CPM rather than blending the markets.',
    r:'TikTok: 9,807 followers generated, 12,192 paid likes and AED 0.14 average CPF. Estimated follower-campaign spend ≈ AED 1,334.47 based on result count × displayed rounded CPF. Instagram profile-visit campaigns generated 6,053 visits on AED 885.82 visible spend, ≈ AED 0.15 per visit. TikTok market comparison: 30,812 impressions and 20,279 reach across Egypt + UAE; CPM was AED 5.57 in Egypt vs. AED 22.83 in UAE.',
    l:'The estimated TikTok follower spend is labeled as estimated because the displayed CPF values are rounded. Instagram has documented profile visits only; no Instagram follower total is claimed. Growth efficiency varied substantially by platform and market.',
    shots:['__CASE_SHAK_FOLLOWERS__','__CASE_SHAK_PROFILE__','__PORTFOLIO_IMG_15__']
  },
  bazaar:{
    k:'Jewelry / Accessories · UAE · Jordan · Egypt',
    t:'Bazaar Celine — Multi-Market Paid Media',
    o:'Drive product interest, messaging and traffic across three markets while keeping market economics and currencies separate.',
    p:'Meta Ads across a UAE account in AED and an Egypt + Jordan account in USD.',
    u:'UAE, Jordan and Egypt. Jordan received approximately 90% of the Egypt/Jordan budget allocation; Egypt approximately 10%.',
    a:'Managed multiple campaigns across the brand and kept each market’s performance context separate instead of combining AED and USD into a misleading total.',
    r:'Egypt + Jordan account scale: 128 campaigns in account, $14,970.35 total account spend, 3,961,604 reach and 10,813,352 impressions. Approximate budget allocation: Jordan ≈ $13,473.32 (90%), Egypt ≈ $1,497.04 (10%). UAE selected snapshot: 3 campaigns, AED 10,227.86 spend, 1,080 messaging conversations, AED 9.47 average cost per conversation, 89,180 reach and 299,764 views. A selected Jordan campaign recorded $105.27 spend, 43,656 impressions, 145 link clicks and $0.73 CPC.',
    l:'The 128-campaign figure is account scale, not a claim that every historical campaign was managed by me. The screenshots are selected evidence from a wider body of work across the brand.',
    shots:['__CASE_BAZAAR_ACCOUNT__','__CASE_BAZAAR_UAE__','__CASE_BAZAAR_JORDAN__','__CASE_BAZAAR_EGYPT__']
  },
  hadara:{
    k:'Education · Syria · Meta Ads',
    t:'Al Hadara Center — Course Messaging Campaigns',
    o:'Generate direct inquiries for multiple course offers through messaging campaigns.',
    p:'Meta Ads using separate messaging campaigns for different course offers.',
    u:'Syrian audiences interested in different courses. The Meta account interface displayed spend in EGP.',
    a:'Kept offers in separate campaigns and compared them on conversation volume and cost efficiency.',
    r:'Two selected campaigns generated 504 conversations at EGP 9.99 and 581 conversations at EGP 7.55. Combined selected spend ≈ EGP 9.42K, with 1,085 total conversations and ≈ EGP 8.68 weighted cost per conversation.',
    l:'Separating the offers made it easy to see which campaign generated more conversation volume at a lower cost. The available proof is mobile-format, so it is not displayed in the portfolio.',
    shots:[]
  },
  exige:{
    k:'Automotive · UAE · Meta Ads',
    t:'Exige Auto Services — Account Scale',
    o:'Support multiple automotive service offers and audience types inside a broader paid-media account.',
    p:'Meta Ads across messaging, lead and traffic activity, with visible B2C, B2B, luxury and vehicle-specific campaign structures.',
    u:'UAE automotive audiences across multiple intent levels and service categories.',
    a:'My role covered paid media management across multiple campaigns and objectives within the account. I am not presenting the full account history as if every campaign was managed by me.',
    r:'Account scale visible in the screenshot: 39 campaigns in account, AED 33,786.15 total account spend, 459,926 reach and 1,095,475 impressions.',
    l:'These totals are used as account-scale context. The screenshot is selected proof from a wider account and should not be read as a claim that all 39 historical campaigns were mine.',
    shots:['__CASE_EXIGE__']
  },
  zafran:{
    k:'Germany + Netherlands · Meta Ads',
    t:'Zafran Market — European Account Scale',
    o:'Run paid media across Germany and the Netherlands using multiple traffic and engagement objectives.',
    p:'Meta Ads across a broader account containing multiple campaign objectives and a long historical campaign list.',
    u:'Germany and the Netherlands.',
    a:'My role covered multiple campaigns within the account across the two European markets. Account-level totals are used only to show the environment and scale I worked within.',
    r:'Account scale visible in the screenshot: 154 campaigns in account, €3,634.19 total account spend, 611,270 reach and 1,815,473 impressions.',
    l:'Not all 154 historical campaigns were managed by me. The campaign count is therefore labeled “in account,” while the screenshot remains selected proof from a wider body of work.',
    shots:['__CASE_ZAFRAN__']
  },
  yassmine:{
    k:'E-commerce · Egypt · Meta Ads',
    t:'Yassmine — Conversion Growth',
    custom:YASSMINE_CASE_HTML
  }
};
const m=document.getElementById('modal'),mk=document.getElementById('mk'),mt=document.getElementById('mt'),obj=document.getElementById('obj'),platform=document.getElementById('platform'),aud=document.getElementById('aud'),app=document.getElementById('app'),res=document.getElementById('res'),learn=document.getElementById('learn'),shots=document.getElementById('shots'),genericCase=document.querySelector('#modal .case'),customCase=document.getElementById('customCase'),closeBtn=document.getElementById('close');
document.querySelectorAll('[data-case]').forEach(c=>{const openCase=()=>{const d=cases[c.dataset.case];mk.textContent=d.k;mt.textContent=d.t;
if(d.custom){
  customCase.hidden=false;customCase.innerHTML=window.__resolvePortfolioAssets(d.custom);genericCase.style.display='none';shots.style.display='none';shots.innerHTML='';
}else{
  customCase.hidden=true;customCase.innerHTML='';genericCase.style.display='grid';
  obj.textContent=d.o;platform.textContent=d.p;aud.textContent=d.u;app.textContent=d.a;res.textContent=d.r;learn.textContent=d.l;
  const caseShots=Array.isArray(d.shots)?d.shots:[];
  shots.innerHTML=caseShots.map(s=>`<img src="${window.__portfolioImageMap[s]||s}" alt="Campaign evidence">`).join('');
  shots.style.display=caseShots.length?'grid':'none';
}
m.querySelector('.panel').scrollTop=0;m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};c.onclick=openCase;c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCase()}}});
function shut(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}closeBtn.onclick=shut;m.onclick=e=>{if(e.target===m)shut()};addEventListener('keydown',e=>{if(e.key==='Escape')shut()});



/* V22.3 Campaign Case Studies — fixed-position tab switching */
const campaignV21Tabs=[...document.querySelectorAll('.campaign-v21-tab')];
const campaignV21Cases=[...document.querySelectorAll('.campaign-v21-case')];
const campaignTabsScroller=document.getElementById('campaignV21Tabs');
const campaignTabPrev=document.getElementById('campaignTabPrev');
const campaignTabNext=document.getElementById('campaignTabNext');

function updateCampaignTabArrows(){
  if(!campaignTabsScroller)return;
  const maxScroll=campaignTabsScroller.scrollWidth-campaignTabsScroller.clientWidth;
  campaignTabPrev.disabled=campaignTabsScroller.scrollLeft<=2;
  campaignTabNext.disabled=campaignTabsScroller.scrollLeft>=maxScroll-2;
}

function activateCampaignV21(id){
  campaignV21Tabs.forEach(tab=>{
    const active=tab.dataset.campaignTarget===id;
    tab.classList.toggle('active',active);
    tab.setAttribute('aria-selected',active?'true':'false');
  });

  campaignV21Cases.forEach(caseEl=>{
    caseEl.classList.toggle('active',caseEl.dataset.campaign===id);
  });
}

/* Keep focus and page position; CSS disables scroll anchoring. */
campaignV21Tabs.forEach(tab=>tab.addEventListener('click',()=>{activateCampaignV21(tab.dataset.campaignTarget);updateCampaignTabArrows();}));

if(campaignTabsScroller){
  campaignTabPrev.addEventListener('click',()=>{
    campaignTabsScroller.scrollBy({left:-260,behavior:'smooth'});
  });
  campaignTabNext.addEventListener('click',()=>{
    campaignTabsScroller.scrollBy({left:260,behavior:'smooth'});
  });
  campaignTabsScroller.addEventListener('scroll',updateCampaignTabArrows,{passive:true});
  window.addEventListener('resize',updateCampaignTabArrows);
}

activateCampaignV21('k7');
setTimeout(updateCampaignTabArrows,50);

/* V19 Selected Work: sector tabs */
const sectorTabs=[...document.querySelectorAll('.sector-tab')];
const sectorCases=[...document.querySelectorAll('.sector-case')];

function activateSector(sector){
  sectorTabs.forEach(tab=>{
    const active=tab.dataset.sectorTarget===sector;
    tab.classList.toggle('active',active);
    tab.setAttribute('aria-selected',active?'true':'false');
  });

  sectorCases.forEach(caseEl=>{
    const active=caseEl.dataset.sector===sector;
    caseEl.classList.toggle('active',active);
  });
}

sectorTabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    activateSector(tab.dataset.sectorTarget);
  });
});

activateSector('healthcare');

/* Brand-work image lightbox */
const brandShots=[...document.querySelectorAll('.work-shot[data-full]')];
const imageLightbox=document.getElementById('imageLightbox');
const lbImage=document.getElementById('lbImage');
const lbCaption=document.getElementById('lbCaption');
const lbClose=document.getElementById('lbClose');
const lbPrev=document.getElementById('lbPrev');
const lbNext=document.getElementById('lbNext');
let activeGallery=[];
let activeIndex=0;

function showBrandShot(index){
  if(!activeGallery.length)return;
  activeIndex=(index+activeGallery.length)%activeGallery.length;
  const shot=activeGallery[activeIndex];
  lbImage.src=shot.dataset.full;
  lbImage.alt=shot.querySelector('img')?.alt||'Selected brand work';
  lbCaption.textContent=shot.dataset.caption||'Selected brand work';
  // restart a subtle image transition
  lbImage.style.animation='none';
  void lbImage.offsetWidth;
  lbImage.style.animation='';
}

function openBrandLightbox(shot){
  /* Works with both the original brand galleries and the new sector galleries. */
  const gallery=shot.closest('[data-gallery]');
  if(!gallery)return;

  activeGallery=[...gallery.querySelectorAll('.work-shot[data-full]')];
  activeIndex=activeGallery.indexOf(shot);

  if(activeIndex<0)return;

  showBrandShot(activeIndex);
  imageLightbox.classList.add('open');
  imageLightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

function closeBrandLightbox(){
  imageLightbox.classList.remove('open');
  imageLightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  lbImage.removeAttribute('src');
}

brandShots.forEach(shot=>shot.addEventListener('click',()=>openBrandLightbox(shot)));
lbClose.addEventListener('click',closeBrandLightbox);
lbPrev.addEventListener('click',()=>showBrandShot(activeIndex-1));
lbNext.addEventListener('click',()=>showBrandShot(activeIndex+1));
imageLightbox.addEventListener('click',e=>{
  if(e.target===imageLightbox)closeBrandLightbox();
});
document.addEventListener('keydown',e=>{
  if(!imageLightbox.classList.contains('open'))return;
  if(e.key==='Escape')closeBrandLightbox();
  if(e.key==='ArrowLeft')showBrandShot(activeIndex-1);
  if(e.key==='ArrowRight')showBrandShot(activeIndex+1);
});


/* Formspree project inquiry */
const inquiryForm=document.getElementById('projectInquiry');
const inquiryStatus=document.getElementById('inquiryStatus');
const inquirySubmit=document.getElementById('inquirySubmit');

if(inquiryForm){
  inquiryForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    if(!inquiryForm.reportValidity())return;

    inquirySubmit.disabled=true;
    inquirySubmit.textContent='Sending…';
    inquiryStatus.className='form-status';
    inquiryStatus.textContent='';

    try{
      const response=await fetch(inquiryForm.action,{
        method:'POST',
        body:new FormData(inquiryForm),
        headers:{'Accept':'application/json'}
      });

      if(response.ok){
        document.dispatchEvent(new Event('portfolio:inquiry-sent'));
        inquiryForm.reset();
        inquiryStatus.className='form-status success';
        inquiryStatus.textContent='Thanks your inquiry has been sent. I’ll get back to you soon.';
        inquirySubmit.textContent='Sent ✓';
        setTimeout(()=>{
          inquirySubmit.disabled=false;
          inquirySubmit.textContent='Send inquiry ↗';
        },2200);
      }else{
        let data={};
        try{data=await response.json()}catch(_){}
        throw new Error(data?.errors?.[0]?.message||'Submission failed');
      }
    }catch(err){
      inquiryStatus.className='form-status error';
      inquiryStatus.textContent='Couldn’t send it right now. You can use WhatsApp or email instead.';
      inquirySubmit.disabled=false;
      inquirySubmit.textContent='Try again';
    }
  });
}



/* Accessible navigation, tabs and modal focus management. */
const menuToggle=document.querySelector('.menu-toggle');
const mainLinks=document.getElementById('mainLinks');
function closeMenu(){mainLinks.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');}
menuToggle.addEventListener('click',()=>{
  const open=menuToggle.getAttribute('aria-expanded')!=='true';
  mainLinks.classList.toggle('is-open',open);menuToggle.setAttribute('aria-expanded',String(open));
});
mainLinks.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('nav'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mainLinks.classList.contains('is-open')){closeMenu();menuToggle.focus();}});

function accessibleTabs(tabs,panels,targetKey,panelKey,prefix){
  const sync=()=>tabs.forEach((tab,i)=>{
    const active=tab.getAttribute('aria-selected')==='true';
    tab.id=`${prefix}-tab-${i}`;tab.tabIndex=active?0:-1;
    const panel=panels.find(p=>p.dataset[panelKey]===tab.dataset[targetKey]);
    if(panel){panel.id=`${prefix}-panel-${i}`;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);tab.setAttribute('aria-controls',panel.id);panel.hidden=!active;}
  });
  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',sync);
    tab.addEventListener('keydown',e=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
      e.preventDefault();
      const index=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
      tabs[index].click();tabs[index].focus({preventScroll:true});
      tabs[index].scrollIntoView({block:'nearest',inline:'nearest',behavior:'instant'});
    });
  });sync();return sync;
}
const syncCampaignTabs=accessibleTabs(campaignV21Tabs,campaignV21Cases,'campaignTarget','campaign','campaign');
accessibleTabs(sectorTabs,sectorCases,'sectorTarget','sector','sector');
document.querySelectorAll('[data-featured-campaign]').forEach(link=>link.addEventListener('click',e=>{
  e.preventDefault();activateCampaignV21(link.dataset.featuredCampaign);syncCampaignTabs();
  const tab=campaignV21Tabs.find(t=>t.dataset.campaignTarget===link.dataset.featuredCampaign);
  if(tab){campaignTabsScroller.scrollLeft=tab.offsetLeft-campaignTabsScroller.offsetLeft;updateCampaignTabArrows();}
  document.getElementById('work').scrollIntoView({behavior:reduceMotion?'instant':'smooth',block:'start'});
}));

let dialogOpener=null;
const dialogs=[m,imageLightbox];
function manageDialog(dialog){
  let wasOpen=false;
  new MutationObserver(()=>{
    const open=dialog.classList.contains('open');
    if(open===wasOpen)return;wasOpen=open;
    if(open){
      dialogOpener=document.activeElement;
      document.querySelector('main').inert=true;document.querySelector('nav').inert=true;
      document.querySelector('footer').inert=true;
      (dialog.querySelector('button')||dialog).focus({preventScroll:true});
    }else{
      document.querySelector('main').inert=false;document.querySelector('nav').inert=false;
      document.querySelector('footer').inert=false;
      dialogOpener?.focus({preventScroll:true});
    }
  }).observe(dialog,{attributes:true,attributeFilter:['class']});
}
dialogs.forEach(manageDialog);
document.addEventListener('keydown',e=>{
  if(e.key!=='Tab')return;
  const dialog=dialogs.find(d=>d.classList.contains('open'));if(!dialog)return;
  const controls=[...dialog.querySelectorAll('a[href],button,input,select,textarea,[tabindex="0"]')].filter(el=>el.getClientRects().length&&!el.disabled);
  const first=controls[0],last=controls.at(-1);if(!first)return;
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});

// Highlight the visible destination without adding a second scroll listener.
const navItems=[...mainLinks.querySelectorAll('a')];
const sectionObserver=new IntersectionObserver(entries=>{
  const visible=entries.find(entry=>entry.isIntersecting);if(!visible)return;
  navItems.forEach(link=>{if(link.hash===`#${visible.target.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
},{rootMargin:'-15% 0px -60% 0px'});
navItems.forEach(link=>{const section=document.querySelector(link.hash);if(section)sectionObserver.observe(section);});

;
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

;
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

;
(()=>{
 const showcase=document.querySelector('.fan-showcase'),track=showcase.querySelector('.fan-track'),hero=document.querySelector('.reference-hero');
 const words=[...document.querySelectorAll('.ribbon-word')].map(word=>[...word.children]),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let frameId=0,amplitude=Math.min(25,innerWidth*.035);const faces=new WeakMap();
 let time=0,deckTime=0,previous=0,hovered=false,focused=false,inView=true,dragging=false,swiped=false,dragStart=0,manualSwing=0,resumeAt=0;
 function syncMotion(){const active=!reduced.matches&&!document.body.classList.contains('motion-paused')&&!document.hidden&&inView;if(active&&!frameId){previous=0;frameId=requestAnimationFrame(frame);}else if(!active&&frameId){cancelAnimationFrame(frameId);frameId=0;}}
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncMotion();},{threshold:.02}).observe(hero);
 document.addEventListener('visibilitychange',syncMotion);reduced.addEventListener('change',syncMotion);
 new MutationObserver(syncMotion).observe(document.body,{attributes:true,attributeFilter:['class']});
 addEventListener('resize',()=>{amplitude=Math.min(25,innerWidth*.035);},{passive:true});
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
 function frame(now){frameId=requestAnimationFrame(frame);if(!previous){previous=now;return;}if(now-previous<1000/30)return;const dt=Math.min((now-previous)/1000,.1);previous=now;
  time+=dt;
   // Two printed faces orbit the same horizontal ribbon; each letter follows its surface.
   words.forEach((letters,row)=>letters.forEach((letter,i)=>{const phase=time*.95+i*.17+row*Math.PI;const front=Math.cos(phase)>0;
    letter.style.transform=`translateY(${(((row===0?-1:1)+Math.sin(phase)*.24)*amplitude).toFixed(2)}px) scaleY(${(.42+.13*Math.abs(Math.cos(phase))).toFixed(3)}) skewY(${(Math.cos(phase)*-5).toFixed(2)}deg)`;
    if(faces.get(letter)!==front){letter.style.color=front?'#f7f4f0':'transparent';letter.style.zIndex=front?'2':'1';faces.set(letter,front);}
   }));
   if(!hovered&&!focused&&!dragging&&now>=resumeAt){deckTime+=dt;showcase.style.setProperty('--fan-swing',(Math.sin(deckTime*.48)*8).toFixed(3)+'deg');}
 }
 syncMotion();
 track.addEventListener('click',e=>{const card=e.target.closest('.fan-card');if(!card)return;if(card.dataset.fanSector)document.querySelector(`[data-sector-target="${card.dataset.fanSector}"]`)?.click();});
})();



;
/* Public project ID is supplied by the build. Never send form values or user identifiers. */
(() => {
  'use strict';
  const projectId = 'z7vz7e0zme';
  const local = ['localhost', '127.0.0.1', '::1', '[::1]'].includes(location.hostname);
  if (local || !/^[a-z0-9]+$/i.test(projectId)) return;
  const storageKey = 'bassem-analytics-consent-v1';
  const panel = document.getElementById('analyticsConsent');
  const settings = document.getElementById('analyticsSettings');
  if (!panel || !settings) return;
  let enabled = false;
  let started = false;
  let previousFocus;
  let observer;
  const timers = new Map();
  const seen = new Set();
  const headings = new Map();
  const validCases = new Set([...document.querySelectorAll('[data-case]')].map(el => el.dataset.case));
  const validSectors = new Set([...document.querySelectorAll('[data-sector-target]')].map(el => el.dataset.sectorTarget));
  function track(name) {
    if (enabled && typeof window.clarity === 'function') window.clarity('event', name);
  }
  function preference() {
    try { return localStorage.getItem(storageKey); } catch (_) { return null; }
  }
  function remember(value) {
    try { localStorage.setItem(storageKey, value); } catch (_) { /* Choice still applies in this page. */ }
  }
  function start() {
    enabled = true;
    if (started) return;
    started = true;
    document.querySelectorAll('form').forEach(form => form.setAttribute('data-clarity-mask', 'true'));
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.clarity.ms/tag/' + projectId;
    document.head.appendChild(script);
    window.clarity('set', 'site_version', 'portfolio_motion');
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        const name = headings.get(entry.target);
        clearTimeout(timers.get(entry.target));
        if (!entry.isIntersecting || entry.intersectionRatio < .5 || seen.has(name) || document.hidden) return;
        timers.set(entry.target, setTimeout(() => {
          if (!enabled || document.hidden) return;
          seen.add(name);
          track('view_section_' + name);
          observer.unobserve(entry.target);
        }, 1000));
      }), { threshold: [.5] });
      document.querySelectorAll('section[id], section.featured-results').forEach(section => {
        const heading = section.querySelector('h2, h3');
        if (!heading) return;
        headings.set(heading, (section.id || 'featured_results').replace(/-/g, '_'));
        observer.observe(heading);
      });
    }
    document.addEventListener('visibilitychange', () => {
      timers.forEach(clearTimeout);
      if (!document.hidden && enabled) headings.forEach((name, heading) => {
        if (!seen.has(name)) { observer.unobserve(heading); observer.observe(heading); }
      });
    });
    document.addEventListener('click', event => {
      if (!enabled || !(event.target instanceof Element)) return;
      const target = event.target.closest('a, button, [data-case], .work-shot');
      if (!target) return;
      const caseId = target.getAttribute('data-case');
      if (validCases.has(caseId)) track('open_case_' + caseId);
      const sector = target.getAttribute('data-sector-target');
      if (validSectors.has(sector)) track('view_creatives_' + sector.replace(/-/g, '_'));
      if (target.matches('.work-shot')) track('open_creative_image');
      if (target.matches('.fan-person')) track('hero_about_click');
      const href = target.getAttribute('href') || '';
      if (href.startsWith('mailto:')) track('contact_email_click');
      if (href.startsWith('tel:')) track('contact_phone_click');
      if (/^https:\/\/(wa\.me|api\.whatsapp\.com)(\/|$)/i.test(href)) track('contact_whatsapp_click');
    });
    document.addEventListener('portfolio:inquiry-sent', () => track('inquiry_sent'));
  }
  function closePanel() {
    panel.hidden = true;
    if (previousFocus && panel.contains(document.activeElement)) previousFocus.focus();
  }
  panel.querySelector('[data-analytics-accept]').addEventListener('click', () => {
    remember('accepted');
    closePanel();
    start();
  });
  panel.querySelector('[data-analytics-decline]').addEventListener('click', () => {
    remember('declined');
    closePanel();
    enabled = false;
    timers.forEach(clearTimeout);
    observer?.disconnect();
    if (started) {
      window.clarity('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' });
      // A reload fully unloads the recording library; the stored choice prevents restarting it.
      location.reload();
    }
  });
  settings.hidden = false;
  settings.addEventListener('click', () => {
    previousFocus = settings;
    panel.hidden = false;
    panel.querySelector('[data-analytics-accept]').focus();
  });
  const choice = preference();
  if (choice === 'accepted') start();
  else if (choice !== 'declined') panel.hidden = false;
})();
