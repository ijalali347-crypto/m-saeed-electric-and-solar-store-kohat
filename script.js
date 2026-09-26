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