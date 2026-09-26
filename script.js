const menu=document.querySelector('.menu'),nav=document.querySelector('.topbar nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const fab=document.getElementById('aiFab'),chat=document.getElementById('aiChat'),closeAI=document.getElementById('aiClose'),form=document.getElementById('aiForm'),input=document.getElementById('aiInput'),msgs=document.getElementById('aiMessages');
function toggleAI(open){chat.classList.toggle('open',open);chat.setAttribute('aria-hidden',String(!open));if(open)setTimeout(()=>input.focus(),150)}
fab?.addEventListener('click',()=>toggleAI(!chat.classList.contains('open')));closeAI?.addEventListener('click',()=>toggleAI(false));
const answers=[
{keys:['سولر','solar','سسٹم','پینل'],reply:'سولر سسٹم منتخب کرنے کے لیے مجھے بتائیں: کتنے پنکھے، لائٹس، اے سی، ریفریجریٹر اور واٹر پمپ چلانے ہیں، اور کتنے گھنٹے بیک اپ چاہیے؟ پھر میں 3، 5 یا 10 کلوواٹ سسٹم کے بارے میں رہنمائی کر سکتا ہوں۔'},
{keys:['اے سی','ایئر کنڈیشنر','ac'],reply:'اے سی کے لیے کمرے کا سائز اور یہ بتائیں کہ آپ انورٹر اے سی چاہتے ہیں یا عام۔ موجودہ ماڈل، اسٹاک اور قیمت کے لیے M Saeed یا Munir سے واٹس ایپ پر رابطہ کریں۔'},
{keys:['فریج','ریفریجریٹر','fridge'],reply:'ریفریجریٹر کے لیے مطلوبہ سائز، سنگل یا ڈبل ڈور، اور اپنا بجٹ بتائیں تاکہ مناسب آپشن منتخب کرنے میں مدد کی جا سکے۔'},
{keys:['کولر','air cooler'],reply:'ایئر کولر کے لیے کمرے کا سائز بتائیں اور یہ بھی کہ آپ روم کولر چاہتے ہیں یا بڑا ڈیزرٹ کولر۔'},
{keys:['بیٹری','battery'],reply:'سولر کے لیے لیتھیم، ٹیوبولر اور لیڈ ایسڈ بیٹریاں استعمال ہوتی ہیں۔ اپنے انورٹر کا سائز اور مطلوبہ بیک اپ ٹائم بتائیں۔'},
{keys:['پنکھا','فین','fan'],reply:'سیلنگ، پیڈسٹل، ایگزاسٹ اور ریچارج ایبل پنکھوں کے بارے میں مدد مل سکتی ہے۔ آپ کو کون سا پنکھا چاہیے؟'},
{keys:['پمپ','واٹر','pump'],reply:'واٹر پمپ کے لیے مطلوبہ ہارس پاور، پانی کی گہرائی/ہیڈ اور یہ بتائیں کہ پمپ سولر پر چلانا ہے یا گرڈ بجلی پر۔'},
{keys:['قیمت','ریٹ','price','cost'],reply:'قیمت برانڈ، ماڈل اور موجودہ اسٹاک کے مطابق ہوتی ہے۔ مطلوبہ پروڈکٹ بتائیں یا تازہ قیمت کے لیے دکان سے واٹس ایپ پر رابطہ کریں۔'},
{keys:['واٹس ایپ','رابطہ','فون','whatsapp'],reply:'M Saeed سے +92 332 9612170 اور Munir سے +92 333 9613862 پر واٹس ایپ کے ذریعے رابطہ کیا جا سکتا ہے۔'}
];
const answersEn=[
{keys:['solar','system','panel'],reply:'Tell me how many fans, lights, AC units, refrigerators and water pumps you want to run, and how many hours of backup you need. I can then guide you toward a suitable solar setup.'},
{keys:['ac','air conditioner'],reply:'For an air conditioner, tell me the room size and whether you want an inverter or standard AC. Current listed prices range from PKR 130,000 to PKR 207,000.'},
{keys:['fridge','refrigerator'],reply:'Refrigerator prices currently listed range from PKR 100,000 to PKR 140,000. Tell me the size and whether you want a single-door or double-door model.'},
{keys:['cooler','air cooler'],reply:'Air cooler prices currently listed range from PKR 16,000 to PKR 40,000. Tell me the room size so I can guide you.'},
{keys:['battery'],reply:'Solar systems can use lithium, tubular or lead-acid batteries. Tell me your inverter size and required backup time.'},
{keys:['fan'],reply:'Taimoor Fan is currently listed at PKR 11,000. We can also help with ceiling, pedestal, exhaust and rechargeable fans.'},
{keys:['pump','water pump'],reply:'For a water pump, tell me the required horsepower, water head/depth and whether it will run on solar or grid electricity.'},
{keys:['price','cost'],reply:'Prices depend on the product, model and stock. Tell me which product you want, or contact the store on WhatsApp for the latest availability.'},
{keys:['whatsapp','contact','phone'],reply:'You can contact M Saeed on +92 332 9612170 or Munir on +92 333 9613862 via WhatsApp.'}
];
function botReply(q){const t=q.toLowerCase(),en=document.documentElement.lang==='en',list=en?answersEn:answers;for(const a of list)if(a.keys.some(k=>t.includes(k)))return a.reply;return en?'I can help with solar panels, inverters, batteries, ACs, refrigerators, air coolers, fans, water pumps, geysers, lighting and other electrical products. What are you looking for?':'میں سولر پینلز، انورٹرز، بیٹریاں، اے سی، ریفریجریٹرز، ایئر کولرز، پنکھے، واٹر پمپس، گیزر، لائٹنگ اور دوسرے برقی سامان کے بارے میں مدد کر سکتا ہوں۔ آپ کو کون سی چیز چاہیے؟'}
function send(q){q=q.trim();if(!q)return;msgs.insertAdjacentHTML('beforeend','<div class="user-msg"></div>');msgs.lastElementChild.textContent=q;setTimeout(()=>{const d=document.createElement('div');d.className='bot-msg';d.textContent=botReply(q);msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight},250);msgs.scrollTop=msgs.scrollHeight}
form?.addEventListener('submit',e=>{e.preventDefault();send(input.value);input.value=''});
document.querySelectorAll('.quick button').forEach(b=>b.addEventListener('click',()=>{if(b.textContent.includes('واٹس ایپ')||b.textContent.includes('WhatsApp'))window.open('https://wa.me/923329612170','_blank');else send(b.textContent)}));
const langToggle=document.getElementById('langToggle');
const translations={
'ہوم':'Home','سولر مصنوعات':'Solar Products','گھریلو آلات':'Appliances','سولر سسٹمز':'Solar Systems','رابطہ':'Contact',
'کوہاٹ میں گھروں، دکانوں اور کاروبار کے لیے سولر اور بجلی کا معیاری سامان۔':'Quality solar and electrical equipment for homes, shops and businesses in Kohat.',
'مصنوعات دیکھیں':'Explore Products','سولر پیکیجز':'Solar Packages','☀ سولر سلوشنز':'☀ Solar Solutions','⚡ بجلی کا سامان':'⚡ Electrical Equipment','🔋 بیک اپ پاور':'🔋 Backup Power',
'سورج سے توانائی':'ENERGY FROM THE SUN','صاف • قابلِ اعتماد • مؤثر':'Clean • Reliable • Efficient','ہمارا اسٹور':'OUR STORE','سولر اور بجلی کی مصنوعات':'Solar & Electrical Products',
'ہر قسم کے سامان کے لیے الگ سیکشن موجود ہے، جہاں برانڈ، ماڈل، قیمت اور تصاویر شامل کی جا سکتی ہیں۔':'Each category has its own section so we can add brands, models, prices and photos.',
'سولر پینلز':'Solar Panels','گھریلو اور کمرشل سولر سسٹمز کے لیے مونو اور بائی فیشل پی وی پینلز۔':'Mono and bifacial PV panels for residential and commercial solar installations.',
'پی وی ماڈیولز':'PV Modules','بائی فیشل':'Bifacial','سولر انورٹرز':'Solar Inverters','ہائبرڈ':'Hybrid','آن گرڈ':'On-Grid','آف گرڈ':'Off-Grid',
'ہائبرڈ، آن گرڈ اور آف گرڈ انورٹرز جو سولر ڈی سی بجلی کو قابلِ استعمال اے سی بجلی میں تبدیل کرتے ہیں۔':'Hybrid, on-grid and off-grid inverters that convert solar DC power into usable AC.',
'سولر بیٹریاں':'Solar Batteries','رات کے استعمال اور بجلی کے بیک اپ کے لیے توانائی ذخیرہ کرنے والی بیٹریاں۔':'Energy storage for nighttime use and power backup.','لیتھیم':'Lithium','ٹیوبولر':'Tubular','لیڈ ایسڈ':'Lead Acid',
'چارج کنٹرولرز':'Charge Controllers','محفوظ اور مؤثر بیٹری چارجنگ کے لیے MPPT اور PWM کنٹرولرز۔':'MPPT and PWM controllers for safe, efficient battery charging.',
'سولر کیبلز اور کنیکٹرز':'Solar Cables & Connectors','سولر تنصیب کے لیے پی وی کیبل، MC4 کنیکٹرز، لگز اور وائرنگ کا سامان۔':'PV cable, MC4 connectors, lugs and wiring accessories for solar installations.',
'حفاظتی سامان':'Protection Equipment','ڈی سی/اے سی بریکرز، فیوز، آئسولیٹرز، سرج پروٹیکشن اور ڈسٹری بیوشن باکسز۔':'DC/AC breakers, fuses, isolators, surge protection and distribution boxes.','بریکرز':'Breakers','فیوز':'Fuses',
'ماؤنٹنگ اسٹرکچر':'Mounting Structure','چھت پر سولر پینلز لگانے کے لیے فریم، ریلز، کلیمپس اور ماؤنٹنگ ہارڈویئر۔':'Frames, rails, clamps and mounting hardware for rooftop solar panels.','ریلیں':'Rails','کلیمپس':'Clamps','فریمز':'Frames',
'ارتھنگ اور حفاظت':'Earthing & Safety','سسٹم کی حفاظت کے لیے ارتھنگ راڈز، گراؤنڈنگ کیبل اور حفاظتی سامان۔':'Earthing rods, grounding cable and safety accessories for system protection.','ارتھنگ':'Earthing','گراؤنڈنگ':'Grounding',
'بجلی کا سامان':'Electrical Items','ایل ای ڈی لائٹس، سوئچ، ساکٹ، تاریں، پنکھے اور روزمرہ استعمال کا بجلی کا سامان۔':'LED lights, switches, sockets, wires, fans and everyday electrical supplies.','تاریں':'Wires','سوئچز':'Switches',
'مصنوعات دیکھیں ←':'View Products →','گھریلو برقی آلات':'HOME APPLIANCES','برقی گھریلو آلات':'Electric Appliances','ایم سعید اینڈ منیر الیکٹرک اینڈ سولر اسٹور کوہاٹ پر کولنگ، کچن اور گھریلو برقی مصنوعات دستیاب ہیں۔':'Cooling, kitchen and home electrical products from M Saeed & Munir Electric & Solar Store Kohat.',
'ریفریجریٹرز':'Refrigerators','سنگل ڈور، ڈبل ڈور اور انورٹر ریفریجریٹرز۔':'Single door, double door and inverter refrigerators.','ایئر کنڈیشنرز':'Air Conditioners','بجلی کی بچت کرنے والے انورٹر اور اسپلٹ اے سی سسٹمز۔':'Energy-efficient inverter and split AC systems.',
'ایئر کولرز':'Air Coolers','گرم موسم کے لیے طاقتور روم ایئر کولرز۔':'Powerful room air coolers for hot summer weather.','پنکھے':'Fans','سیلنگ، پیڈسٹل، ایگزاسٹ اور ریچارج ایبل پنکھے۔':'Ceiling, pedestal, exhaust and rechargeable fans.',
'واٹر پمپس':'Water Pumps','گھریلو، پریشر اور سولر کے ساتھ چلنے والے واٹر پمپس۔':'Domestic, pressure and solar-compatible water pumps.','ایل ای ڈی لائٹنگ':'LED Lighting','ایل ای ڈی بلب، پینلز، فلڈ لائٹس اور آرائشی لائٹنگ۔':'LED bulbs, panels, flood lights and decorative lighting.',
'گیزر':'Geysers','الیکٹرک واٹر ہیٹر اور انسٹنٹ گیزر۔':'Electric water heaters and instant geysers.','کچن کے برقی آلات':'Kitchen Appliances','مائیکروویو، کیٹل، بلینڈر اور روزمرہ کے کچن آلات۔':'Microwaves, kettles, blenders and everyday kitchen appliances.',
'واشنگ مشینیں':'Washing Machines','آٹومیٹک اور سیمی آٹومیٹک واشنگ مشینیں۔':'Automatic and semi-automatic washing machines.',
'اپنی ضرورت کے مطابق سولر سسٹم منتخب کریں':'Choose Your Power Setup','یہ ابتدائی پیکیجز ہیں جنہیں اصل سامان اور قیمتوں کے مطابق تبدیل کیا جا سکتا ہے۔':'Starter packages ready to customize with your actual equipment and prices.',
'گھر کے لیے ابتدائی پیکیج':'HOME STARTER','3 کلوواٹ سسٹم':'3 kW System','گھر کے ضروری برقی لوڈ کے لیے۔':'For essential household loads.','ہائبرڈ انورٹر':'Hybrid inverter','حفاظتی سامان اور وائرنگ':'Protection & wiring',
'مقبول گھریلو پیکیج':'POPULAR HOME','5 کلوواٹ سسٹم':'5 kW System','جدید گھروں کے لیے متوازن سولر سیٹ اپ۔':'A balanced setup for modern homes.','اعلیٰ کارکردگی والے پینلز':'High-efficiency panels','بیٹری کے لیے تیار ڈیزائن':'Battery-ready design','مکمل حفاظتی نظام':'Complete protection',
'زیادہ پاور':'HIGH POWER','10 کلوواٹ سسٹم':'10 kW System','بڑے گھروں اور کاروبار کے لیے۔':'For larger homes and businesses.','زیادہ گنجائش والا سولر اَرے':'High-capacity solar array','طاقتور انورٹر':'Powerful inverter','پروفیشنل حفاظتی نظام':'Professional protection','مکمل لوازمات':'Complete accessories','قیمت معلوم کریں':'Ask for Price',
'کوہاٹ، خیبر پختونخوا، پاکستان':'Kohat, Khyber Pakhtunkhwa, Pakistan','اسٹور اسسٹنٹ • آن لائن':'Store Assistant • Online','مصنوعات کے بارے میں پوچھیں...':'Ask about products...',
'السلام علیکم! 👋 میں سولر سسٹم اور برقی آلات کے انتخاب میں آپ کی مدد کر سکتا ہوں۔ آپ کیا تلاش کر رہے ہیں؟':'Hello! 👋 I can help you choose solar systems and electrical appliances. What are you looking for?',
'سولر سسٹم':'Solar system','ریفریجریٹر':'Refrigerator','بیٹری':'Battery','واٹس ایپ پر بات کریں':'Talk on WhatsApp','واٹس ایپ':'WhatsApp'
};
const urOriginal=new WeakMap();
const selector='nav a,.hero p,.actions a,.trust span,.energy-card strong,.energy-card small,.section-head span,.section-head h2,.section-head p,.product h3,.product p,.product .tags span,.product button,.appliance-card h3,.appliance-card p,.appliance-card button,.package-grid b,.package-grid h3,.package-grid p,.package-grid li,.package-grid a,footer p,.footer-contact span,.ai-head small,.bot-msg,.quick button,.brand b,.brand small,[data-ur]';
function setLanguage(lang){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ur'?'rtl':'ltr';
 document.querySelectorAll(selector).forEach(el=>{
  if(el.dataset.ur){el.textContent=lang==='ur'?el.dataset.ur:el.dataset.en;return}
  if(!urOriginal.has(el))urOriginal.set(el,el.textContent.trim());
  const ur=urOriginal.get(el);el.textContent=lang==='en'?(translations[ur]||ur):ur;
 });
 if(input) input.placeholder=lang==='en'?'Ask about products...':'مصنوعات کے بارے میں پوچھیں...';
 document.querySelector('.menu')?.setAttribute('aria-label',lang==='en'?'Open menu':'مینو کھولیں');
 fab?.setAttribute('aria-label',lang==='en'?'Open store assistant':'اسٹور اسسٹنٹ کھولیں');
 langToggle.textContent=lang==='ur'?'English':'اردو';
 localStorage.setItem('storeLanguage',lang);
 msgs?.querySelectorAll('.bot-msg').forEach((m,i)=>{if(i===0)m.textContent=lang==='en'?'Hello! 👋 I can help you choose solar systems and electrical appliances. What are you looking for?':'السلام علیکم! 👋 میں سولر سسٹم اور برقی آلات کے انتخاب میں آپ کی مدد کر سکتا ہوں۔ آپ کیا تلاش کر رہے ہیں؟'});
}
langToggle?.addEventListener('click',()=>setLanguage(document.documentElement.lang==='ur'?'en':'ur'));
setLanguage(localStorage.getItem('storeLanguage')||'ur');

const productDetails=[
{match:['سولر انورٹرز','Solar Inverters'],icon:'⚡',ur:'انورٹرز',en:'Inverters',priceUr:'7 kV — 190,000 روپے | 10 kV — 20,000 روپے | آف گرڈ 7 کلوواٹ — 30,000 روپے | ہائبرڈ 6 کلوواٹ — 100,000 سے 600,000 روپے',priceEn:'7 kV — PKR 190,000 | 10 kV — PKR 20,000 | Off-grid 7 kW — PKR 30,000 | Hybrid 6 kW — PKR 100,000–600,000',textUr:'دستیاب انورٹر آپشنز اور قیمتیں۔',textEn:'Available inverter options and prices.'},
{match:['سولر کیبلز اور کنیکٹرز','Solar Cables & Connectors'],icon:'🔌',ur:'10mm کیبل',en:'10mm Cable',priceUr:'260 روپے فی میٹر',priceEn:'PKR 260 per meter',textUr:'10mm کیبل کی قیمت فی میٹر۔',textEn:'Price for 10mm cable per meter.'},
{match:['ریفریجریٹرز','Refrigerators'],icon:'🧊',ur:'ریفریجریٹرز',en:'Refrigerators',priceUr:'100,000 سے 140,000 روپے',priceEn:'PKR 100,000–140,000',textUr:'مختلف ماڈلز اور سائز کے مطابق قیمت۔',textEn:'Price varies by model and size.'},
{match:['ایئر کنڈیشنرز','Air Conditioners'],icon:'❄️',ur:'ایئر کنڈیشنرز',en:'Air Conditioners',priceUr:'130,000 سے 207,000 روپے',priceEn:'PKR 130,000–207,000',textUr:'انورٹر اور اسپلٹ اے سی کے مختلف ماڈلز۔',textEn:'Different inverter and split AC models.'},
{match:['ایئر کولرز','Air Coolers'],icon:'🌬️',ur:'ایئر کولرز',en:'Air Coolers',priceUr:'16,000 سے 40,000 روپے',priceEn:'PKR 16,000–40,000',textUr:'سائز اور ماڈل کے مطابق قیمت۔',textEn:'Price varies by size and model.'},
{match:['پنکھے','Fans'],icon:'🌀',ur:'تیمور فین',en:'Taimoor Fan',priceUr:'11,000 روپے',priceEn:'PKR 11,000',textUr:'تیمور فین کی قیمت۔',textEn:'Taimoor fan price.'},
{match:['کچن کے برقی آلات','Kitchen Appliances'],icon:'♨️',ur:'الیکٹرک چولہا',en:'Electric Stove',priceUr:'5,500 روپے',priceEn:'PKR 5,500',textUr:'الیکٹرک چولہے کی قیمت۔',textEn:'Electric stove price.'},
{match:['واشنگ مشینیں','Washing Machines'],icon:'🫧',ur:'Boss واشنگ مشین',en:'Boss Washing Machine',priceUr:'19,000 سے 40,000 روپے',priceEn:'PKR 19,000–40,000',textUr:'Boss کمپنی کی واشنگ مشینیں، ماڈل کے مطابق قیمت۔',textEn:'Boss washing machines; price varies by model.'},
{match:['بجلی کا سامان','Electrical Items'],icon:'🛵',ur:'الیکٹرک سکوٹی',en:'Electric Scooter',priceUr:'183,000 سے 300,000 روپے',priceEn:'PKR 183,000–300,000',textUr:'الیکٹرک سکوٹی کی مختلف اقسام اور قیمتیں۔',textEn:'Electric scooter options and prices.'}
];
const detailModal=document.getElementById('detailModal'),detailClose=document.getElementById('detailClose'),detailTitle=document.getElementById('detailTitle'),detailPrice=document.getElementById('detailPrice'),detailText=document.getElementById('detailText'),detailIcon=document.getElementById('detailIcon');
function openDetails(card){
 const title=card.querySelector('h3')?.textContent.trim();const d=productDetails.find(x=>x.match.includes(title));if(!d)return;
 const en=document.documentElement.lang==='en';detailIcon.textContent=d.icon;detailTitle.textContent=en?d.en:d.ur;detailPrice.textContent=en?d.priceEn:d.priceUr;detailText.textContent=en?d.textEn:d.textUr;detailModal.classList.add('open');detailModal.setAttribute('aria-hidden','false');
}
document.querySelectorAll('.product button,.appliance-card button').forEach(btn=>{const card=btn.closest('.product,.appliance-card');const title=card?.querySelector('h3')?.textContent.trim();if(productDetails.some(x=>x.match.includes(title))){btn.textContent=document.documentElement.lang==='en'?'View Details →':'تفصیل دیکھیں ←';btn.dataset.detail='1';btn.addEventListener('click',()=>openDetails(card));}});
function closeDetails(){detailModal?.classList.remove('open');detailModal?.setAttribute('aria-hidden','true')}
detailClose?.addEventListener('click',closeDetails);detailModal?.addEventListener('click',e=>{if(e.target===detailModal)closeDetails()});
langToggle?.addEventListener('click',()=>setTimeout(()=>{document.querySelectorAll('[data-detail="1"]').forEach(b=>b.textContent=document.documentElement.lang==='en'?'View Details →':'تفصیل دیکھیں ←')},0));
