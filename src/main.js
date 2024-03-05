import confetti from "canvas-confetti";
import "./style/init.css"
import "./foot"
import "https://kit.fontawesome.com/4c536a6bd5.js"



const btn=document.querySelector(".button");
btn.addEventListener("click",()=>{
    window.location.href="../public/menu.html"
});
// import './page/anis.svg'
confetti();
