let mode='ops';
const ARCHIVE_ALL=(typeof ARCHIVE!=='undefined'?ARCHIVE:[]).concat(typeof ARCHIVE2!=='undefined'?ARCHIVE2:[]);
const PEOPLE_ALL=(typeof PEOPLE!=='undefined'?PEOPLE:[]).concat(typeof PEOPLE2!=='undefined'?PEOPLE2:[]);
const grid=document.getElementById('grid'),q=document.getElementById('q'),
fC=document.getElementById('fCountry'),fCat=document.getElementById('fCategory'),
fS=document.getElementById('fStatus'),fE=document.getElementById('fEra'),
fSort=document.getElementById('fSort'),count=document.getElementById('count'),
modal=document.getElementById('modal'),sheetBody=document.getElementById('sheetBody'),
tabOps=document.getElementById('tabOps'),tabPeople=document.getElementById('tabPeople');
const EXTRA=Object.assign({},typeof EXTRA_A!=='undefined'?EXTRA_A:{},typeof EXTRA_B!=='undefined'?EXTRA_B:{},typeof EXTRA_C!=='undefined'?EXTRA_C:{},typeof EXTRA_D!=='undefined'?EXTRA_D:{});
function full(e){return EXTRA[e.id]||e.details}
document.getElementById('stOps').textContent=ARCHIVE_ALL.length;
document.getElementById('stPeople').textContent=PEOPLE_ALL.length;
const uniq=a=>[...new Set(a)].sort();
function fillFilters(){
 fC.innerHTML='<option value="">All regions</option>';fCat.innerHTML='<option value="">All categories</option>';fS.innerHTML='<option value="">All evidence levels</option>';
 if(mode==='ops'){
  uniq(ARCHIVE_ALL.flatMap(e=>e.countries)).forEach(c=>{let o=document.createElement('option');o.textContent=c;fC.appendChild(o)});
  uniq(ARCHIVE_ALL.map(e=>e.category)).forEach(c=>{let o=document.createElement('option');o.textContent=c;fCat.appendChild(o)});
  uniq(ARCHIVE_ALL.map(e=>e.status)).forEach(c=>{let o=document.createElement('option');o.textContent=c;fS.appendChild(o)});
 }else{
  uniq(PEOPLE_ALL.map(e=>e.role)).forEach(c=>{let o=document.createElement('option');o.textContent=c;fCat.appendChild(o)});
  uniq(PEOPLE_ALL.map(e=>e.status)).forEach(c=>{let o=document.createElement('option');o.textContent=c;fS.appendChild(o)});
 }
}
function eraOf(y){if(y<1950)return '1940s';if(y<1960)return '1950s';if(y<1970)return '1960s';if(y<1980)return '1970s';if(y<1990)return '1980s';if(y<2000)return '1990s';return '2000s+'}
function cls(s){s=s.toLowerCase();if(s.includes('no evidence')||s.includes('correction'))return 'lore';if(s.includes('disputed')||s.includes('proposed')||s.includes('reported')||s.includes('unproven')||s.includes('extent debated'))return 'disputed';return 'proven'}
function render(){
 let s=q.value.toLowerCase().trim();
 if(mode==='ops'){
  let list=ARCHIVE_ALL.filter(e=>{
   let hay=(e.title+' '+e.summary+' '+full(e)+' '+e.countries.join(' ')+' '+e.agencies.join(' ')+' '+e.category).toLowerCase();
   if(s&&!hay.includes(s))return false;
   if(fC.value&&!e.countries.includes(fC.value))return false;
   if(fCat.value&&e.category!==fCat.value)return false;
   if(fS.value&&e.status!==fS.value)return false;
   if(fE.value&&eraOf(e.yearStart)!==fE.value)return false;
   return true;
  });
  if(fSort.value==='az')list.sort((a,b)=>a.title.localeCompare(b.title));
  else if(fSort.value==='year-desc')list.sort((a,b)=>b.yearStart-a.yearStart);
  else list.sort((a,b)=>a.yearStart-b.yearStart);
  count.textContent=list.length+' / '+ARCHIVE_ALL.length+' operations';
  grid.innerHTML=list.map(e=>`<article class="card"><h3>${e.title}</h3><div class="years">${e.years} · ${e.countries.join(', ')}</div><div class="status ${cls(e.status)}">● ${e.status}</div><div class="tags"><span class="tag">${e.category}</span>${e.agencies.map(a=>`<span class="tag">${a}</span>`).join('')}</div><p>${e.summary}</p><button data-kind="ops" data-id="${e.id}">Open full dossier →</button></article>`).join('')||'<p>No results.</p>';
 }else{
  let list=PEOPLE_ALL.filter(e=>{
   let hay=(e.name+' '+e.role+' '+e.summary+' '+e.details).toLowerCase();
   if(s&&!hay.includes(s))return false;
   if(fCat.value&&e.role!==fCat.value)return false;
   if(fS.value&&e.status!==fS.value)return false;
   return true;
  });
  list.sort((a,b)=>a.name.localeCompare(b.name));
  count.textContent=list.length+' / '+PEOPLE_ALL.length+' figures';
  grid.innerHTML=list.map(e=>`<article class="card"><h3>${e.name}</h3><div class="years">${e.role} · ${e.years}</div><div class="status ${cls(e.status)}">● ${e.status}</div><p>${e.summary}</p><button data-kind="people" data-id="${e.id}">Open file →</button></article>`).join('')||'<p>No results.</p>';
 }
}
grid.addEventListener('click',ev=>{
 let b=ev.target.closest('button[data-id]');if(!b)return;
 if(b.dataset.kind==='ops'){
  let e=ARCHIVE_ALL.find(x=>x.id===b.dataset.id);
  sheetBody.innerHTML=`<h2>${e.title}</h2><div class="status ${cls(e.status)}">● ${e.status}</div><div class="kv"><b>Years:</b> ${e.years}<br><b>Where:</b> ${e.countries.join(', ')}<br><b>Who:</b> ${e.agencies.join(', ')}<br><b>Type:</b> ${e.category}</div><h3>Full dossier</h3><p>${full(e)}</p><h3>Why it matters</h3><p>${e.summary}</p><div class="kv"><b>Start here (primary sources):</b> ${e.sources}</div>`;
 }else{
  let e=PEOPLE_ALL.find(x=>x.id===b.dataset.id);
  sheetBody.innerHTML=`<h2>${e.name}</h2><div class="status ${cls(e.status)}">● ${e.status}</div><div class="kv"><b>Role:</b> ${e.role}<br><b>Years:</b> ${e.years}</div><h3>File</h3><p>${e.details}</p><div class="kv"><b>Start here:</b> ${e.sources}</div>`;
 }
 modal.classList.remove('hidden');
});
document.getElementById('close').onclick=()=>modal.classList.add('hidden');
modal.addEventListener('click',ev=>{if(ev.target===modal)modal.classList.add('hidden')});
[q,fC,fCat,fS,fE,fSort].forEach(el=>el.addEventListener('input',render));
document.getElementById('reset').onclick=()=>{q.value='';fillFilters();fE.value='';fSort.value='year';render()};
tabOps.onclick=()=>{mode='ops';tabOps.classList.add('on');tabPeople.classList.remove('on');fillFilters();render()};
tabPeople.onclick=()=>{mode='people';tabPeople.classList.add('on');tabOps.classList.remove('on');fillFilters();render()};
fillFilters();render();
