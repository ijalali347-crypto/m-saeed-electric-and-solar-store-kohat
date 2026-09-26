const menu=document.querySelector('.menu'),nav=document.querySelector('.topbar nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const fab=document.getElementById('aiFab'),chat=document.getElementById('aiChat'),closeAI=document.getElementById('aiClose'),form=document.getElementById('aiForm'),input=document.getElementById('aiInput'),msgs=document.getElementById('aiMessages');
function toggleAI(open){chat.classList.toggle('open',open);chat.setAttribute('aria-hidden',String(!open));if(open)setTimeout(()=>input.focus(),150)}
fab?.addEventListener('click',()=>toggleAI(!chat.classList.contains('open')));closeAI?.addEventListener('click',()=>toggleAI(false));
const answers=[
 {keys:['solar','system','panel'],reply:'For a solar system, tell me your load: number of fans, lights, ACs, refrigerator, water pump and how many backup hours you need. I can guide you toward 3kW, 5kW or 10kW.'},
 {keys:['ac','air conditioner'],reply:'We can help with air conditioners. Tell me the room size and whether you want inverter AC. For current model, stock and price, you can contact M Saeed or Munir on WhatsApp.'},
 {keys:['fridge','refrigerator'],reply:'For refrigerators, tell me the size or capacity you need, single/double door, and your preferred budget. We can then help narrow the right option.'},
 {keys:['cooler','air cooler'],reply:'For an air cooler, tell me the room size and whether you need a room cooler or larger desert-style cooler.'},
 {keys:['battery'],reply:'We cover solar batteries including lithium, tubular and lead-acid types. Tell me your inverter size and required backup time.'},
 {keys:['fan'],reply:'We can help with ceiling, pedestal, exhaust and rechargeable fans. Which type are you looking for?'},
 {keys:['pump','water'],reply:'For a water pump, tell me the required horsepower, water depth/head and whether it will run on solar or grid electricity.'},
 {keys:['price','cost'],reply:'Prices depend on brand, model and current stock. Tell me the exact product you need, or tap WhatsApp to ask the shop directly.'},
 {keys:['whatsapp','contact','call'],reply:'You can contact M Saeed at +92 332 9612170 or Munir at +92 333 9613862. Both WhatsApp contacts are shown at the top of the website.'}
];
function botReply(q){const t=q.toLowerCase();for(const a of answers)if(a.keys.some(k=>t.includes(k)))return a.reply;return 'I can help with solar panels, inverters, batteries, ACs, refrigerators, air coolers, fans, pumps, geysers, lighting and other electrical items. Which product do you need?'}
function send(q){q=q.trim();if(!q)return;msgs.insertAdjacentHTML('beforeend','<div class="user-msg"></div>');msgs.lastElementChild.textContent=q;setTimeout(()=>{const d=document.createElement('div');d.className='bot-msg';d.textContent=botReply(q);msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight},250);msgs.scrollTop=msgs.scrollHeight}
form?.addEventListener('submit',e=>{e.preventDefault();send(input.value);input.value=''});
document.querySelectorAll('.quick button').forEach(b=>b.addEventListener('click',()=>{if(b.textContent.includes('WhatsApp'))window.open('https://wa.me/923329612170','_blank');else send(b.textContent)}));