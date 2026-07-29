// Smooth scroll animation
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

document.querySelectorAll(".section").forEach(sec=>{
observer.observe(sec);
});

// Floating hearts
function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(15+Math.random()*30)+"px";
heart.style.color="rgba(255,80,150,.5)";
heart.style.zIndex="999";
heart.style.pointerEvents="none";
heart.style.transition="transform 8s linear, opacity 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.transform="translateY(-120vh) rotate(360deg)";
heart.style.opacity="0";
},100);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,400);

// Button animation
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("mouseenter",()=>{
btn.style.transform="scale(1.08)";
});

btn.addEventListener("mouseleave",()=>{
btn.style.transform="scale(1)";
});
});

// Reveal animation
const style=document.createElement("style");
style.innerHTML=`
.section{
opacity:0;
transform:translateY(80px);
transition:1s;
}

.section.show{
opacity:1;
transform:translateY(0);
}
`;

document.head.appendChild(style);
