// =====================================
// Chinese Wheel
// By Jay, For Ninew Only 💖
// =====================================

const spinBtn=document.getElementById("spinBtn");
const pinyin=document.getElementById("pinyin");
const thai=document.getElementById("thai");
const chinese=document.getElementById("chinese");
const showAnswer=document.getElementById("showAnswer");
const historyList=document.getElementById("historyList");
const enterBtn=document.getElementById("enterBtn");
const welcome=document.getElementById("welcome");
const spinSound=document.getElementById("spinSound");
const winSound=document.getElementById("winSound");

let lastIndex=-1;
let currentWord=null;
let history=[];

enterBtn.onclick=()=>{

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

},700);

};

spinBtn.onclick=spinWheel;

showAnswer.onclick=()=>{

if(!currentWord)return;

chinese.classList.toggle("hidden");

};

function spinWheel(){

chinese.classList.add("hidden");

let random;

do{

random=Math.floor(Math.random()*words.length);

}while(random===lastIndex);

lastIndex=random;

currentWord=words[random];

spinAnimation(()=>
    
{

pinyin.innerHTML=currentWord.pinyin;

thai.innerHTML=currentWord.thai;

chinese.innerHTML=currentWord.chinese;

addHistory(currentWord);

celebrate();   

});

}

function addHistory(word){

history.unshift(word);

if(history.length>10){

history.pop();

}

historyList.innerHTML="";

history.forEach(item=>{

const li=document.createElement("li");

li.innerHTML=`
<b>${item.pinyin}</b>
<br>
${item.thai}
`;

historyList.appendChild(li);

});

}

function spinAnimation(callback){

const canvas=document.getElementById("wheelCanvas");

const deg=1800+Math.random()*1080;

canvas.style.transform=`rotate(${deg}deg)`;

setTimeout(()=>{

callback();

},4000);

}

// ==============================
// Sakura Effect
// ==============================

const petals=document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.opacity=Math.random();

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,350);

// ==============================
// Draw Wheel
// ==============================

const canvas=document.getElementById("wheelCanvas");

const ctx=canvas.getContext("2d");

const colors=[
"#FFC1DA",
"#FFD6E8",
"#FFC8DD",
"#FFE5F1",
"#FFB7D5",
"#FFD9EC"
];

function drawWheel(){

const radius=250;

const total=words.length;

const angle=(Math.PI*2)/total;

ctx.clearRect(0,0,500,500);

for(let i=0;i<total;i++){

const start=i*angle;

const end=start+angle;

ctx.beginPath();

ctx.moveTo(250,250);

ctx.arc(250,250,radius,start,end);

ctx.fillStyle=colors[i%colors.length];

ctx.fill();

ctx.strokeStyle="#ffffff";

ctx.lineWidth=2;

ctx.stroke();

ctx.save();

ctx.translate(250,250);

ctx.rotate(start+angle/2);

ctx.textAlign="right";

ctx.fillStyle="#555";

ctx.font="13px Prompt";

ctx.fillText(words[i].pinyin,220,5);

ctx.restore();

}

drawCenter();

}

function drawCenter(){

ctx.beginPath();

ctx.arc(250,250,35,0,Math.PI*2);

ctx.fillStyle="#ff5ca4";

ctx.fill();

ctx.strokeStyle="white";

ctx.lineWidth=5;

ctx.stroke();

ctx.fillStyle="white";

ctx.font="bold 22px Prompt";

ctx.textAlign="center";

ctx.textBaseline="middle";

ctx.fillText("GO",250,250);

}

drawWheel();
// ==============================
// Keyboard Shortcut
// ==============================

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        spinWheel();

    }

    if(e.code==="Enter"){

        showAnswer.click();

    }

});

// ==============================
// Welcome Animation
// ==============================

window.onload=()=>{

    welcome.style.opacity="1";

};

// ==============================
// Footer Year
// ==============================

const footer=document.querySelector("footer");

footer.innerHTML=`By Jay, For Ninew Only 💖`;

// ==============================
// Random Button Glow
// ==============================

setInterval(()=>{

    spinBtn.animate([

        {transform:"scale(1)"},
        {transform:"scale(1.05)"},
        {transform:"scale(1)"}

    ],{

        duration:1200

    });

},3000);

// ==============================
// Confetti
// ==============================

function celebrate(){

    for(let i=0;i<25;i++){

        const c=document.createElement("div");

        c.innerHTML="🌸";

        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.fontSize=(16+Math.random()*20)+"px";
        c.style.pointerEvents="none";
        c.style.zIndex="999";

        c.animate([

            {
                transform:"translateY(0px) rotate(0deg)"
            },

            {
                transform:`translateY(${window.innerHeight+50}px) rotate(${720*Math.random()}deg)`
            }

        ],{

            duration:2500+Math.random()*1500

        });

        document.body.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },4000);

    }

}