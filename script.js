const missions = [
  {a:12,b:18,lcm:36,title:"Kumpul nombor 12 dan 18",desc:"Bina pokok faktor dan tentukan LCM bagi 12 dan 18.",hint:"12 = 2² × 3 dan 18 = 2 × 3². Ambil kuasa tertinggi setiap faktor: 2² × 3².",formula:"LCM(12, 18) = ?",factor:"12 = 2² × 3"},
  {a:3,b:6,lcm:6,title:"Cari LCM bagi 3 dan 6",desc:"Gunakan faktor perdana untuk mencari gandaan sepunya terkecil.",hint:"3 = 3 dan 6 = 2 × 3. Ambil faktor 2 dan 3: 2 × 3.",formula:"LCM(3, 6) = ?",factor:"6 = 2 × 3"},
  {a:4,b:8,lcm:8,title:"Buka pintu nombor 4 dan 8",desc:"Tentukan LCM bagi 4 dan 8 untuk membuka pintu seterusnya.",hint:"4 = 2² dan 8 = 2³. Kuasa tertinggi ialah 2³.",formula:"LCM(4, 8) = ?",factor:"8 = 2³"},
  {a:6,b:9,lcm:18,title:"Misi terakhir: 6 dan 9",desc:"Selesaikan cabaran terakhir dan lengkapkan LCM Quest!",hint:"6 = 2 × 3 dan 9 = 3². Maka LCM = 2 × 3².",formula:"LCM(6, 9) = ?",factor:"9 = 3²"}
];
let current = 0, score = 0, collected = new Set();
const $ = id => document.getElementById(id);
const padScore = n => String(n).padStart(6,"0");
function renderMission(){
 const m=missions[current];
 $("level").textContent=current+1; $("mission-num").textContent=current+1;
 $("mission-title").textContent=m.title; $("mission-desc").textContent=m.desc;
 $("target").textContent=m.formula; $("answer").value=""; $("feedback").textContent="Petunjuk: gunakan faktor perdana tertinggi bagi setiap nombor.";
 $("next-mission").disabled=true; $("next-mission").textContent=current===missions.length-1?"Lihat keputusan ✓":"Misi seterusnya →";
 document.querySelector(".formula").innerHTML=m.factor.replace("²","<sup>2</sup>").replace("³","<sup>3</sup>");
}
function checkAnswer(){
 const m=missions[current], value=Number($("answer").value);
 if(!value){$("feedback").textContent="Masukkan jawapan dahulu.";return}
 if(value===m.lcm){
   $("feedback").textContent="Betul! Hebat, anda berjaya menyelesaikan misi ini. 🎉";
   $("feedback").style.color="#4de4a1"; $("next-mission").disabled=false;
   if(!collected.has("mission"+current)){score+=100;collected.add("mission"+current);$("score").textContent=padScore(score)}
 }else{$("feedback").textContent="Belum tepat. Cuba lagi atau tekan “Tunjuk petunjuk”."; $("feedback").style.color="#ff9aab"}
}
$("check").addEventListener("click",checkAnswer);
$("answer").addEventListener("keydown",e=>{if(e.key==="Enter")checkAnswer()});
$("hint-btn").addEventListener("click",()=>{$("feedback").textContent=missions[current].hint;$("feedback").style.color="#ffdf38"});
$("next-mission").addEventListener("click",()=>{
 if(current<missions.length-1){current++;renderMission();return}
 $("mission-title").textContent="Tahniah, misi selesai!";$("mission-desc").textContent=`Anda telah mengumpul ${score} mata dan menyelesaikan semua misi LCM Quest.`;$("target").textContent="SEMUA MISI SELESAI";$("feedback").textContent="Muat semula halaman untuk bermain semula.";$("next-mission").disabled=true;
});
const pac=$("pacman"), maze=$("maze");let px=5,py=46;
function move(dir){
 const step=5;
 if(dir==="left")px=Math.max(0,px-step);if(dir==="right")px=Math.min(92,px+step);
 if(dir==="up")py=Math.max(0,py-step);if(dir==="down")py=Math.min(84,py+step);
 pac.style.left=px+"%";pac.style.top=py+"%";
 document.querySelectorAll(".number:not(.collected)").forEach(n=>{
  const x=n.offsetLeft+n.offsetWidth/2,y=n.offsetTop+n.offsetHeight/2;
  const pX=pac.offsetLeft+pac.offsetWidth/2,pY=pac.offsetTop+pac.offsetHeight/2;
  if(Math.hypot(x-pX,y-pY)<40){n.classList.add("collected");n.style.opacity=".2";score+=10;$("score").textContent=padScore(score)}
 });
}
document.addEventListener("keydown",e=>{
 const keys={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"up",w:"up",W:"up",ArrowDown:"down",s:"down",S:"down"};
 if(keys[e.key]){e.preventDefault();move(keys[e.key])}
});
document.querySelectorAll("[data-move]").forEach(btn=>btn.addEventListener("click",()=>move(btn.dataset.move)));
document.querySelectorAll(".number").forEach(n=>n.addEventListener("click",()=>{n.classList.add("collected");n.style.opacity=".2";score+=10;$("score").textContent=padScore(score)}));
renderMission();
