const TAROT=[
["愚者","00","新的开始、好奇心、勇气","今天适合给自己一点探索空间。不要要求一开始就知道完整答案；先迈出一个小步，同时保留基本的边界。"],
["魔术师","01","行动、创造、资源","你手上的资源可能已经足够开始。把一个模糊想法变成具体动作，行动会带来新的线索。"],
["女祭司","02","直觉、内在、观察","今天不必急着解释一切。安静下来，留意直觉、梦境和那些容易被忽略的细节。"],
["皇后","03","滋养、丰盛、创造","把注意力放回身体、空间和关系中的滋养感。创造力往往从被好好照顾开始。"],
["皇帝","04","结构、责任、秩序","今天适合建立一个清晰的小规则。边界不是限制，而是帮助你把能量放在重要事情上。"],
["教皇","05","传统、学习、指导","一个可靠的方法或前人的经验可能值得参考。学习不意味着失去自己的判断。"],
["恋人","06","选择、关系、价值","重点不是别人替你选什么，而是确认哪个选择与你真正重视的东西一致。"],
["战车","07","意志、方向、推进","把注意力收回自己的方向。今天少一点摇摆，多一个明确的小目标。"],
["力量","08","温柔、勇气、自控","真正的力量不一定需要用力证明。用稳定和温柔面对一个让你不安的部分。"],
["隐者","09","独处、反思、寻找","减少一点外界输入。给自己留一段安静时间，答案也许会在沉淀后变得清楚。"],
["命运之轮","10","变化、周期、机会","事情正在变化。与其执着控制每一个变量，不如观察周期，并抓住眼前真正可行动的部分。"],
["正义","11","平衡、诚实、判断","今天适合用更公平的标准看待自己。把事实、感受和判断分开，会更容易做出清晰选择。"],
["倒吊人","12","暂停、换位、放下","暂时不行动也是一种行动。换一个角度看问题，可能比继续用力更有价值。"],
["死神","13","结束、转变、更新","这里象征的是阶段性的结束与更新。放下一个已经不再适合你的模式，为新空间腾位置。"],
["节制","14","平衡、调和、节奏","今天不需要走极端。把不同需求慢慢调和，寻找一种能够长期持续的节奏。"],
["恶魔","15","执着、欲望、束缚","观察什么正在占用你的注意力。看见自己的惯性，就是重新选择的开始。"],
["塔","16","突变、真相、重建","如果计划突然变化，先处理现实，再重建。旧结构松动时，也可能让真实需求浮现出来。"],
["星星","17","希望、疗愈、愿景","保留一点希望，并把它变成一个具体的小目标。温柔地向未来靠近。"],
["月亮","18","不确定、想象、潜意识","今天可能更容易被情绪或想象影响。先核实事实，再决定哪些直觉值得跟随。"],
["太阳","19","活力、清晰、喜悦","允许自己享受简单而真实的快乐。清晰、坦率和行动力会让事情变得更轻盈。"],
["审判","20","觉醒、回顾、召唤","回顾过去的经验，但不要困在过去。问自己：下一阶段，我真正想成为怎样的人？"],
["世界","21","完成、整合、阶段","认可已经完成的部分。一个阶段的收尾不是终点，而是下一圈旅程的起点。"]];
const MINOR_RANKS=[
  ["王牌","新的能量与机会","一股新的能量正在出现。先接住可能性，再决定如何让它生长。"],
  ["二","选择与平衡","两个方向同时出现。先确认优先级，再做清晰选择。"],
  ["三","展开与协作","事情开始成形。让计划、反馈与协作帮助它继续展开。"],
  ["四","稳定与边界","今天适合巩固基础，也要留意稳定是否正在变成停滞。"],
  ["五","摩擦与调整","差异或阻力正在浮现。把冲突当成重新校准的信号。"],
  ["六","过渡与支持","局面正在移动。接受帮助，并把注意力放在下一步。"],
  ["七","评估与坚持","停下来评估投入与回报，再决定坚持还是调整。"],
  ["八","行动与练习","重复的小行动正在积累力量。专注过程，不必急于证明。"],
  ["九","成果与韧性","你已经走了很远。保护成果，也允许自己适度休息。"],
  ["十","完成与承担","一个周期接近完成。整理责任，为新的空间腾出位置。"],
  ["侍从","好奇与消息","保持初学者的好奇心。新的消息或灵感值得认真对待。"],
  ["骑士","推进与追寻","能量正在加速。确认方向后行动，同时避免只凭冲动。"],
  ["王后","滋养与成熟","用稳定、包容的方式照顾自己，也照顾正在发展的事情。"],
  ["国王","掌控与责任","把经验转化为清晰的决定，并为决定带来的影响负责。"]
];
const MINOR_SUITS=[
  ["权杖","Wands","行动、热情、创造","把灵感转化为行动"],
  ["圣杯","Cups","情感、关系、直觉","听见情绪与关系中的真实需要"],
  ["宝剑","Swords","思考、沟通、判断","用清晰的事实整理想法"],
  ["星币","Pents","现实、资源、身体","回到具体资源与可执行步骤"]
];
MINOR_SUITS.forEach(([suit,key,suitWords,suitAdvice])=>MINOR_RANKS.forEach(([rank,rankWords,rankAdvice],index)=>{
  TAROT.push([`${suit}${rank}`,`${key}${String(index+1).padStart(2,'0')}`,`${suitWords} · ${rankWords}`,`${suitAdvice}。${rankAdvice}`,index===0?'A':index<10?String(index+1):['P','N','Q','K'][index-10]]);
}));
const RUNES=[["ᚠ","Fehu","资源 / 创造","今天关注你手上的资源、价值和行动力。与其担心不足，不如看看已有的东西如何被更好地使用。"],["ᚢ","Uruz","力量 / 活力","把力量用在真正重要的地方。今天适合关注自己的行动感与生命力。"],["ᚦ","Thurisaz","边界 / 防御","先观察，再行动。留意自己的边界，也留意哪些事情值得暂缓。"],["ᚨ","Ansuz","沟通 / 灵感","注意今天出现的信息、语言和启发。一个看似普通的对话可能带来新的视角。"],["ᚱ","Raidho","旅程 / 方向","检查你的节奏与方向。重要的不只是抵达，也包括你正在怎样走。"],["ᚲ","Kenaz","洞察 / 火光","让一个模糊的问题变得更清晰。寻找能够照亮问题的那个小细节。"],["ᚷ","Gebo","给予 / 交换","留意关系中的互惠与分享。今天可以问问自己：我正在给予什么，也正在接受什么？"],["ᚹ","Wunjo","喜悦 / 和谐","记录一个值得感激的小瞬间。轻松与喜悦本身也可以成为能量来源。"],["ᚺ","Hagalaz","变化 / 破局","面对变化时，先接受现实，再调整策略。不要急着把意外定义成坏事。"],["ᚾ","Nauthiz","需要 / 克制","分辨真正的需要和一时的冲动。适度的克制可能让你重新找回选择权。"],["ᛁ","Isa","暂停 / 聚焦","慢下来，把注意力收回自己。今天适合减少噪音，专注一件事情。"],["ᛃ","Jera","收获 / 周期","有些结果需要时间。继续照顾正在积累的事情，不必因为暂时看不到成果而否定过程。"],["ᛇ","Eihwaz","韧性 / 转化","遇到阻力时，寻找更有弹性的方式。坚持不一定等于硬撑。"],["ᛈ","Perthro","未知 / 探索","允许自己暂时不知道答案。未知也可以成为探索的空间。"],["ᛉ","Algiz","保护 / 觉察","关注边界与安全感。今天尤其适合做一点让自己安心的事情。"],["ᛋ","Sowilo","光明 / 目标","把能量集中到最重要的方向。清晰的目标会帮助你减少分散。"],["ᛏ","Tiwaz","原则 / 决心","按自己的原则做一个清晰选择。真正的决心往往来自知道什么对自己重要。"],["ᛒ","Berkano","成长 / 新生","给正在成长的事情更多耐心。新的东西需要空间、时间和照顾。"],["ᛖ","Ehwaz","协作 / 移动","好的配合可能让事情走得更顺。注意谁可以和你一起把事情推进。"],["ᛗ","Mannaz","自我 / 社群","从关系中重新理解自己。你既是独立的个体，也处在一个更大的网络里。"],["ᛚ","Laguz","流动 / 直觉","观察情绪与直觉，但不必急着下结论。允许感受流动一会儿。"],["ᛜ","Ingwaz","孕育 / 内在","让一个想法在合适的时间成熟。不是所有事情都需要马上公开或执行。"],["ᛞ","Dagaz","转机 / 清晰","换一个角度，可能看见新的可能。转机有时来自认知方式的改变。"],["ᛟ","Othala","根基 / 归属","关注家、传统与属于自己的东西。稳定的根基能帮助你更安心地探索外部世界。"]];

const LIUREN = [
  {name:"大安", meaning:"稳定、平顺、守成", answer:"YES", reason:"大安偏向稳定与顺势。作为二选一提示，倾向「是」，更适合稳稳推进，不宜冒进。"},
  {name:"留连", meaning:"牵绊、延迟、反复", answer:"WAIT", reason:"留连象征事情尚未定型。它更像是在提醒你等待、核实或再观察一次。"},
  {name:"速喜", meaning:"快速、喜讯、进展", answer:"YES", reason:"速喜偏向积极的快速变化。作为二选一提示，倾向「是」，尤其适合主动沟通与及时行动。"},
  {name:"赤口", meaning:"口舌、冲突、谨慎", answer:"NO", reason:"赤口提醒冲突、误会或表达上的摩擦。作为二选一提示，倾向「否」，至少不建议贸然推进。"},
  {name:"小吉", meaning:"小有收获、顺遂、助力", answer:"YES", reason:"小吉是温和的吉象。作为二选一提示，倾向「是」，更像「可以试试」，不是绝对保证。"},
  {name:"空亡", meaning:"落空、虚无、暂不明朗", answer:"NO", reason:"空亡强调结果的不确定或落空感。作为二选一提示，倾向「否」，也可以理解为「现在还不是时候」。"}
];


let db={history:[]}, tarotData=null, runeData=null, revealTarot=false, revealRune=false;
const $=id=>document.getElementById(id);
const el=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;};
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`};
const pick=a=>a[Math.floor(Math.random()*a.length)];
function formatDate(key){const d=new Date(key+'T12:00:00');return d.toLocaleDateString('zh-CN',{month:'short',day:'numeric'});}
function generate(){const t=pick(TAROT),r=pick(RUNES);tarotData={name:t[0],image:t[1],number:t[4]||t[1],short:t[2],meaning:t[3],orientation:Math.random()<.5?'正位':'逆位'};runeData={symbol:r[0],name:r[1],short:r[2],meaning:r[3]};}
async function persist(){await chrome.storage.local.set({mysticDaily:db});}
async function saveDraw(){const old=db.history.find(x=>x.date===today());const rec={date:today(),tarot:tarotData,rune:runeData,note:old?.note||''};db.history=db.history.filter(x=>x.date!==today());db.history.unshift(rec);await persist();}
function themeText(){return `${tarotData.short} × ${runeData.short}`;}
function synthesis(){return `今天不需要把所有事情一次想清楚。${tarotData.orientation==='正位'?'顺着已经出现的线索往前走':'先放慢一点，观察真正卡住你的地方'}；同时把注意力带回「${runeData.short.split(' / ')[0]}」。把这组象征当成提醒：今天最值得认真看见的，可能不是答案本身，而是你正在如何选择。`;}
function reflection(){const qs={"新的开始、好奇心、勇气":"如果不用等到完全准备好，我今天愿意先开始什么？","选择、关系、价值":"如果只忠于自己的价值，我会怎么选？","变化、周期、机会":"面对正在发生的变化，我真正能掌控的是什么？","希望、疗愈、愿景":"我愿意为未来的自己保留哪一点希望？","不确定、想象、潜意识":"哪些是事实，哪些只是我的想象？","完成、整合、阶段":"有什么值得我承认：这一阶段，我已经做到了？"};return qs[tarotData.short]||`今天，我真正想看见、理解或选择的是什么？`;}
function fillReading(){
  $('tarotNumber').textContent=tarotData.number||tarotData.image;$('tarotName').textContent=tarotData.name;$('tarotOrientation').textContent=tarotData.orientation;$('tarotArt').src=`assets/tarot-green/${tarotData.image}.jpg`;$('tarotArt').alt=`${tarotData.name}牌面`;$('tarotArt').classList.toggle('reversed',tarotData.orientation==='逆位');
  $('runeSymbol').textContent=runeData.symbol;$('runeName').textContent=runeData.name;$('runeShort').textContent=runeData.short;
  $('themeKeywords').textContent=themeText();$('rSynthesis').textContent=synthesis();$('rReflection').textContent=reflection();
  $('rTitle').textContent=`塔罗 · ${tarotData.name} · ${tarotData.orientation}`;$('rTarot').textContent=tarotData.meaning;$('rRuneTitle').textContent=`卢恩 · ${runeData.symbol} ${runeData.name}`;$('rRune').textContent=runeData.meaning;
}
function reset(){revealTarot=false;revealRune=false;$('tarotCard').classList.remove('revealed');$('runeCard').classList.remove('revealed');$('runeCard').disabled=true;$('reading').classList.add('hidden');$('step').textContent='先揭开塔罗牌';$('revealHint').textContent='今天的组合一旦生成，之后不会重新抽取。';}
async function reveal(kind){if(kind==='rune'&&!revealTarot){$('step').textContent='先揭开塔罗牌，再揭开卢恩';return;}if((kind==='tarot'&&revealTarot)||(kind==='rune'&&revealRune))return;if(!tarotData)generate();if(kind==='tarot'){revealTarot=true;$('tarotCard').classList.add('revealed');$('tarotCard').disabled=true;$('runeCard').disabled=false;$('tarotNumber').textContent=tarotData.number||tarotData.image;$('tarotName').textContent=tarotData.name;$('tarotOrientation').textContent=tarotData.orientation;$('tarotArt').src=`assets/tarot-green/${tarotData.image}.jpg`;$('tarotArt').alt=`${tarotData.name}牌面`;$('tarotArt').classList.toggle('reversed',tarotData.orientation==='逆位');$('step').textContent='现在揭开卢恩符文';$('runeCard').focus();}else{revealRune=true;$('runeCard').classList.add('revealed');$('runeCard').disabled=true;$('runeSymbol').textContent=runeData.symbol;$('runeName').textContent=runeData.name;$('runeShort').textContent=runeData.short;$('step').textContent='今日组合已揭开';}if(revealTarot&&revealRune){await saveDraw();fillReading();$('reading').classList.remove('hidden');$('revealHint').textContent='已保存。明天会开启新的组合。';renderHistory();}}
function updateNoteCount(){$('noteCount').textContent=`${$('note').value.length}/300`;}
function renderExisting(rec){tarotData=rec.tarot;runeData=rec.rune;revealTarot=revealRune=true;$('tarotCard').classList.add('revealed');$('runeCard').classList.add('revealed');$('tarotCard').disabled=true;$('runeCard').disabled=true;fillReading();$('reading').classList.remove('hidden');$('step').textContent='今日组合已揭开';$('revealHint').textContent='已保存。今天的组合不会变化。';$('note').value=rec.note||'';updateNoteCount();}
function renderHistory(){const root=$('historyList');root.replaceChildren();const list=db.history.slice(0,3);if(!list.length){root.append(el('div','history-empty','完成今天的 ritual 后，记录会出现在这里。'));return;}list.forEach(x=>{const button=el('button','history-record');button.type='button';button.dataset.date=x.date;button.append(el('span','history-record-date',formatDate(x.date)));const main=el('span','history-record-main');main.append(el('b','',`${x.tarot.name} × ${x.rune.name}`),el('span','',x.note?.trim()||x.tarot.short));button.append(main,el('span','chev','›'));button.onclick=()=>{openCalendar();showDayDetail(x.date)};root.append(button);});}

function getYesNoState(){if(!db.yesnoState||db.yesnoState.date!==today())db.yesnoState={date:today(),count:0};return db.yesnoState;}
function updateYesNoUI(){const state=getYesNoState(),left=Math.max(0,3-state.count);$('castCount').textContent=left?`今日剩余 ${left} 次`:'今日次数已用完';$('castBtn').disabled=left===0;$('question').disabled=left===0;}
async function castXiaoLiuren(){const state=getYesNoState();if(state.count>=3)return updateYesNoUI();const q=$('question').value.trim();if(!q)return $('question').focus();const now=new Date(),m=now.getMonth()+1,d=now.getDate(),h=now.getHours(),min=now.getMinutes(),sec=now.getSeconds();const item=LIUREN[(m+d+h+min+sec-1)%6];state.count++;await persist();$('castTime').textContent=`第 ${state.count} 次 · ${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;$('godName').textContent=item.name;$('godMeaning').textContent=item.meaning;$('answer').textContent=item.answer==='YES'?'YES · 倾向是':item.answer==='NO'?'NO · 倾向否':'WAIT · 暂缓';$('answerReason').textContent=item.reason;$('savedQuestion').textContent=q;$('castResult').classList.remove('hidden');$('question').value='';updateYesNoUI();}

let calendarDate=new Date();
function openCalendar(){$('todayPage').classList.add('hidden');$('calendarPage').classList.remove('hidden');renderCalendar();}
function closeCalendar(){$('calendarPage').classList.add('hidden');$('todayPage').classList.remove('hidden');}
function renderCalendar(){const y=calendarDate.getFullYear(),m=calendarDate.getMonth(),first=new Date(y,m,1),days=new Date(y,m+1,0).getDate(),start=first.getDay();$('calendarTitle').textContent=`${y} · ${String(m+1).padStart(2,'0')}`;const monthPrefix=`${y}-${String(m+1).padStart(2,'0')}`;const count=db.history.filter(x=>x.date.startsWith(monthPrefix)).length;$('monthProgress').textContent=`${count} days of reflection`;$('progressBar').style.width=`${Math.min(100,count/days*100)}%`;let html='';for(let i=0;i<42;i++){const n=i-start+1;let d,other=false;if(n<1){d=new Date(y,m-1,new Date(y,m,0).getDate()+n);other=true}else if(n>days){d=new Date(y,m+1,n-days);other=true}else d=new Date(y,m,n);const key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`,rec=db.history.find(x=>x.date===key);html+=`<button class="day${other?' other':''}${rec?' has-record':''}${key===today()?' today':''}" data-date="${key}" ${rec?'':'disabled'}>${d.getDate()}</button>`;}$('calendarGrid').innerHTML=html;document.querySelectorAll('.day.has-record').forEach(el=>el.onclick=()=>showDayDetail(el.dataset.date));}
function showDayDetail(date){const x=db.history.find(x=>x.date===date);if(!x)return;const root=$('dayDetail');root.replaceChildren(el('h3','',date));[[`${x.tarot.name} · ${x.tarot.orientation}`,x.tarot.meaning],[`${x.rune.symbol} ${x.rune.name}`,x.rune.meaning],['你的感受',x.note||'这一天没有留下文字记录。']].forEach(([title,body])=>{const row=el('div','detail-row');row.append(el('b','',title),el('p','',body));root.append(row);});root.classList.remove('hidden');}

async function load(){const stored=await chrome.storage.local.get('mysticDaily');db=stored.mysticDaily||{history:[]};$('date').textContent=new Date().toLocaleDateString('zh-CN',{month:'long',day:'numeric',weekday:'long'});const rec=db.history.find(x=>x.date===today());rec?renderExisting(rec):reset();renderHistory();updateYesNoUI();}
$('tarotCard').onclick=()=>reveal('tarot');$('runeCard').onclick=()=>reveal('rune');
let noteTimer;
async function saveNote(){const x=db.history.find(x=>x.date===today());if(!x)return;x.note=$('note').value.trim();await persist();$('saveState').textContent='已保存';setTimeout(()=>$('saveState').textContent='',1500);renderHistory();}
$('saveNote').onclick=saveNote;$('note').addEventListener('input',()=>{updateNoteCount();$('saveState').textContent='正在保存…';clearTimeout(noteTimer);noteTimer=setTimeout(saveNote,650);});
$('askMysticBtn').onclick=()=>{$('yesno').classList.toggle('hidden');if(!$('yesno').classList.contains('hidden'))$('yesno').scrollIntoView({behavior:'smooth',block:'start'});};$('closeMysticBtn').onclick=()=>$('yesno').classList.add('hidden');$('castBtn').onclick=castXiaoLiuren;
$('historyBtn').onclick=openCalendar;$('calendarBtn').onclick=openCalendar;$('backBtn').onclick=closeCalendar;$('prevMonth').onclick=()=>{calendarDate.setMonth(calendarDate.getMonth()-1);renderCalendar()};$('nextMonth').onclick=()=>{calendarDate.setMonth(calendarDate.getMonth()+1);renderCalendar()};
$('clear').onclick=async()=>{if(confirm('确定清空所有本地历史记录吗？')){db={history:[]};await persist();location.reload();}};
document.addEventListener('keydown',event=>{if(event.key!=='Escape')return;if(!$('yesno').classList.contains('hidden'))$('yesno').classList.add('hidden');else if(!$('calendarPage').classList.contains('hidden'))closeCalendar();});
load();
