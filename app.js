const grid=document.getElementById('grid'),q=document.getElementById('q'),
fC=document.getElementById('fCountry'),fCat=document.getElementById('fCategory'),
fS=document.getElementById('fStatus'),fE=document.getElementById('fEra'),
fSort=document.getElementById('fSort'),count=document.getElementById('count'),
modal=document.getElementById('modal'),sheetBody=document.getElementById('sheetBody');

const uniq=(a)=>[...new Set(a)].sort();
uniq(ARCHIVE.flatMap(e=>e.countries)).forEach(c=>{let o=document.createElement('option');o.value=c;o.textContent=c;fC.appendChild(o)});
uniq(ARCHIVE.map(e=>e.category)).forEach(c=>{let o=document.createElement('option');o.value=c;o.textContent=c;fCat.appendChild(o)});
uniq(ARCHIVE.map(e=>e.status)).forEach(c=>{let o=document.createElement('option');o.value=c;o.textContent=c;fS.appendChild(o)});

function eraOf(y){if(y<1950)return '1940s';if(y<1960)return '1950s';if(y<1970)return '1960s';if(y<1980)return '1970s';if(y<1990)return '1980s';if(y<2000)return '1990s';return '2000s+'}

function render(){
 let s=q.value.toLowerCase().trim();
 let list=ARCHIVE.filter(e=>{
  let hay=(e.title+' '+e.summary+' '+e.details+' '+e.countries.join(' ')+' '+e.agencies.join(' ')+' '+e.category).toLowerCase();
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
 count.textContent=list.length+' / '+ARCHIVE.length+' entries';
 grid.innerHTML=list.map(e=>`<article class="card"><h3>${e.title}</h3><div class="years">${e.years} · ${e.countries.join(', ')}</div><div class="status">${e.status}</div><div class="tags"><span class="tag">${e.category}</span>${e.agencies.map(a=>`<span class="tag">${a}</span>`).join('')}</div><p>${e.summary}</p><button data-id="${e.id}">Open dossier</button></article>`).join('')||'<p>No results.</p>';
}
grid.addEventListener('click',ev=>{
 let b=ev.target.closest('button[data-id]');if(!b)return;
 let e=ARCHIVE.find(x=>x.id===b.dataset.id);
 sheetBody.innerHTML=`<h2>${e.title}</h2><p><b>${e.years}</b> · ${e.countries.join(', ')}<br><i>${e.agencies.join(', ')} · ${e.category}</i><br><b>${e.status}</b></p><p>${e.details}</p><p><b>Start here:</b> ${e.sources}</p>`;
 modal.classList.remove('hidden');
});
document.getElementById('close').onclick=()=>modal.classList.add('hidden');
modal.addEventListener('click',ev=>{if(ev.target===modal)modal.classList.add('hidden')});
[q,fC,fCat,fS,fE,fSort].forEach(el=>el.addEventListener('input',render));
document.getElementById('reset').onclick=()=>{q.value='';fC.value='';fCat.value='';fS.value='';fE.value='';fSort.value='year';render()};
render();
