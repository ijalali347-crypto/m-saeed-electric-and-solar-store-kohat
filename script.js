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
function botReply(q){const t=q.toLowerCase();for(const a of answers)if(a.keys.some(k=>t.includes(k)))return a.reply;return 'میں سولر پینلز، انورٹرز، بیٹریاں، اے سی، ریفریجریٹرز، ایئر کولرز، پنکھے، واٹر پمپس، گیزر، لائٹنگ اور دوسرے برقی سامان کے بارے میں مدد کر سکتا ہوں۔ آپ کو کون سی چیز چاہیے؟'}
function send(q){q=q.trim();if(!q)return;msgs.insertAdjacentHTML('beforeend','<div class="user-msg"></div>');msgs.lastElementChild.textContent=q;setTimeout(()=>{const d=document.createElement('div');d.className='bot-msg';d.textContent=botReply(q);msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight},250);msgs.scrollTop=msgs.scrollHeight}
form?.addEventListener('submit',e=>{e.preventDefault();send(input.value);input.value=''});
document.querySelectorAll('.quick button').forEach(b=>b.addEventListener('click',()=>{if(b.textContent.includes('واٹس ایپ'))window.open('https://wa.me/923329612170','_blank');else send(b.textContent)}));
const langToggle=document.getElementById('langToggle');
const urToEn=new Map([
['ہوم','Home'],['سولر مصنوعات','Solar Products'],['گھریلو آلات','Appliances'],['سولر سسٹمز','Solar Systems'],['رابطہ','Contact'],
['کوہاٹ میں گھروں، دکانوں اور کاروبار کے لیے سولر اور بجلی کا معیاری سامان۔','Quality solar and electrical equipment for homes, shops and businesses in Kohat.'],
['مصنوعات دیکھیں','Explore Products'],['سولر پیکیجز','Solar Packages'],['☀ سولر سلوشنز','☀ Solar Solutions'],['⚡ بجلی کا سامان','⚡ Electrical Equipment'],['🔋 بیک اپ پاور','🔋 Backup Power'],
['سورج سے توانائی','ENERGY FROM THE SUN'],['صاف • قابلِ اعتماد • مؤثر','Clean • Reliable • Efficient'],['ہمارا اسٹور','OUR STORE'],['سولر اور بجلی کی مصنوعات','Solar & Electrical Products'],
['ہر قسم کے سامان کے لیے الگ سیکشن موجود ہے، جہاں برانڈ، ماڈل، قیمت اور تصاویر شامل کی جا سکتی ہیں۔','Each category has its own section for brands, models, prices and photos.'],
['سولر پینلز','Solar Panels'],['گھریلو اور کمرشل سولر سسٹمز کے لیے مونو اور بائی فیشل پی وی پینلز۔','Mono and bifacial PV panels for residential and commercial solar installations.'],
['سولر انورٹرز','Solar Inverters'],['ہائبرڈ، آن گرڈ اور آف گرڈ انورٹرز جو سولر ڈی سی بجلی کو قابلِ استعمال اے سی بجلی میں تبدیل کرتے ہیں۔','Hybrid, on-grid and off-grid inverters for reliable solar power.'],
['سولر بیٹریاں','Solar Batteries'],['رات کے استعمال اور بجلی کے بیک اپ کے لیے توانائی ذخیرہ کرنے والی بیٹریاں۔','Energy storage for nighttime use and power backup.'],
['چارج کنٹرولرز','Charge Controllers'],['محفوظ اور مؤثر بیٹری چارجنگ کے لیے MPPT اور PWM کنٹرولرز۔','MPPT and PWM controllers for safe, efficient battery charging.'],
['سولر کیبلز اور کنیکٹرز','Solar Cables & Connectors'],['سولر تنصیب کے لیے پی وی کیبل، MC4 کنیکٹرز، لگز اور وائرنگ کا سامان۔','PV cable, MC4 connectors, lugs and wiring accessories.'],
['حفاظتی سامان','Protection Equipment'],['ڈی سی/اے سی بریکرز، فیوز، آئسولیٹرز، سرج پروٹیکشن اور ڈسٹری بیوشن باکسز۔','DC/AC breakers, fuses, isolators, surge protection and distribution boxes.'],
['ماؤنٹنگ اسٹرکچر','Mounting Structure'],['چھت پر سولر پینلز لگانے کے لیے فریم، ریلز، کلیمپس اور ماؤنٹنگ ہارڈویئر۔','Frames, rails, clamps and mounting hardware for rooftop solar panels.'],
['ارتھنگ اور حفاظت','Earthing & Safety'],['سسٹم کی حفاظت کے لیے ارتھنگ راڈز، گراؤنڈنگ کیبل اور حفاظتی سامان۔','Earthing rods, grounding cable and safety accessories.'],
['بجلی کا سامان','Electrical Items'],['ایل ای ڈی لائٹس، سوئچ، ساکٹ، تاریں، پنکھے اور روزمرہ استعمال کا بجلی کا سامان۔','LED lights, switches, sockets, wires, fans and everyday electrical supplies.'],
['مصنوعات دیکھیں ←','View Products →'],['گھریلو برقی آلات','HOME APPLIANCES'],['برقی گھریلو آلات','Electric Appliances'],['ایم سعید اینڈ منیر الیکٹرک اینڈ سولر اسٹور کوہاٹ پر کولنگ، کچن اور گھریلو برقی مصنوعات دستیاب ہیں۔','Cooling, kitchen and home electrical products from M Saeed & Munir Electric & Solar Store Kohat.'],
['ریفریجریٹرز','Refrigerators'],['سنگل ڈور، ڈبل ڈور اور انورٹر ریفریجریٹرز۔','Single door, double door and inverter refrigerators.'],['ایئر کنڈیشنرز','Air Conditioners'],['بجلی کی بچت کرنے والے انورٹر اور اسپلٹ اے سی سسٹمز۔','Energy-efficient inverter and split AC systems.'],['ایئر کولرز','Air Coolers'],['گرم موسم کے لیے طاقتور روم ایئر کولرز۔','Powerful room air coolers for hot summer weather.'],['پنکھے','Fans'],['سیلنگ، پیڈسٹل، ایگزاسٹ اور ریچارج ایبل پنکھے۔','Ceiling, pedestal, exhaust and rechargeable fans.'],['واٹر پمپس','Water Pumps'],['گھریلو، پریشر اور سولر کے ساتھ چلنے والے واٹر پمپس۔','Domestic, pressure and solar-compatible water pumps.'],['ایل ای ڈی لائٹنگ','LED Lighting'],['ایل ای ڈی بلب، پینلز، فلڈ لائٹس اور آرائشی لائٹنگ۔','LED bulbs, panels, flood lights and decorative lighting.'],['گیزر','Geysers'],['الیکٹرک واٹر ہیٹر اور انسٹنٹ گیزر۔','Electric water heaters and instant geysers.'],['کچن کے برقی آلات','Kitchen Appliances'],['مائیکروویو، کیٹل، بلینڈر اور روزمرہ کے کچن آلات۔','Microwaves, kettles, blenders and everyday kitchen appliances.'],['واشنگ مشینیں','Washing Machines'],['آٹومیٹک اور سیمی آٹومیٹک واشنگ مشینیں۔','Automatic and semi-automatic washing machines.'],
['اپنی ضرورت کے مطابق سولر سسٹم منتخب کریں','Choose Your Power Setup'],['یہ ابتدائی پیکیجز ہیں جنہیں اصل سامان اور قیمتوں کے مطابق تبدیل کیا جا سکتا ہے۔','Starter packages ready to customize with your equipment and prices.'],['گھر کے لیے ابتدائی پیکیج','HOME STARTER'],['3 کلوواٹ سسٹم','3 kW System'],['گھر کے ضروری برقی لوڈ کے لیے۔','For essential household loads.'],['مقبول گھریلو پیکیج','POPULAR HOME'],['5 کلوواٹ سسٹم','5 kW System'],['جدید گھروں کے لیے متوازن سولر سیٹ اپ۔','A balanced setup for modern homes.'],['زیادہ پاور','HIGH POWER'],['10 کلوواٹ سسٹم','10 kW System'],['بڑے گھروں اور کاروبار کے لیے۔','For larger homes and businesses.'],['قیمت معلوم کریں','Ask for Price'],
['کوہاٹ، خیبر پختونخوا، پاکستان','Kohat, Khyber Pakhtunkhwa, Pakistan'],['اسٹور اسسٹنٹ • آن لائن','Store Assistant • Online'],['مصنوعات کے بارے میں پوچھیں...','Ask about products...']
]);
const originalUr=new WeakMap();
function translatableNodes(){return [...document.querySelectorAll('nav a,.hero p,.actions a,.trust span,.energy-card strong,.energy-card small,.section-head span,.section-head h2,.section-head p,.product h3,.product p,.product button,.appliance-card h3,.appliance-card p,.appliance-card button,.package-grid b,.package-grid h3,.package-grid p,.package-grid li,.package-grid a,footer p,.ai-head small,.ai-form input')]}
function setLanguage(lang){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ur'?'rtl':'ltr';
 translatableNodes().forEach(el=>{if(!originalUr.has(el))originalUr.set(el,el.tagName==='INPUT'?el.placeholder:el.textContent.trim());const ur=originalUr.get(el);const en=urToEn.get(ur);if(el.tagName==='INPUT')el.placeholder=lang==='en'?(en||ur):ur;else el.textContent=lang==='en'?(en||ur):ur});
 langToggle.textContent=lang==='ur'?'English':'اردو';localStorage.setItem('storeLanguage',lang);
}
langToggle?.addEventListener('click',()=>setLanguage(document.documentElement.lang==='ur'?'en':'ur'));
setLanguage(localStorage.getItem('storeLanguage')||'ur');
