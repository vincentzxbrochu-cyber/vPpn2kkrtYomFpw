// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loading").style.opacity = "0";

setTimeout(() => {

document.getElementById("loading").style.display = "none";

},1000);

},1800);

});

// ===============================
// Love Animation
// ===============================

const loveContainer = document.getElementById("love-container");

function createLove(){

const love = document.createElement("div");

love.className = "love";

love.innerHTML = "❤";

love.style.left = Math.random()*100+"%";

love.style.fontSize = (15+Math.random()*25)+"px";

love.style.animationDuration = (4+Math.random()*4)+"s";

loveContainer.appendChild(love);

setTimeout(()=>{

love.remove();

},8000);

}

setInterval(createLove,250);

// ===============================
// Star Animation
// ===============================

const starContainer = document.getElementById("star-container");

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*2+"s";

star.style.animationDuration=(1+Math.random()*3)+"s";

starContainer.appendChild(star);

}

// ===============================
// Music
// ===============================

const music=document.getElementById("music");

music.volume=0.5;

// Autoplay jika browser mengizinkan
music.play().catch(()=>{

console.log("Autoplay diblokir browser.");

});

// ===============================
// Continue Button Effect
// ===============================

const btn=document.querySelector(".continue");

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

// ===============================
// Card Animation
// ===============================

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/35;

let y=(window.innerHeight/2-e.pageY)/35;

card.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0deg) rotateX(0deg)";

});