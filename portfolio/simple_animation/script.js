let avocado = document.querySelector(".avocado");
console.log(avocado)



let shakebutton = document.querySelector("#shakebutton");
console.log(shakebutton)

shakebutton.addEventListener("click", shakeclicked);

function shakeclicked(){
    avocado.classList.toggle("shakecss");

}



let jumpbutton = document.querySelector("#jumpbutton");
console.log(jumpbutton)


jumpbutton.addEventListener("click", jumpclicked);

function jumpclicked(){
    avocado.classList.toggle ("jumpcss");

}




let pulsebutton = document.querySelector("#pulsebutton");
console.log(pulsebutton)


pulsebutton.addEventListener("click", pulseclicked);

function pulseclicked(){
    avocado.classList.toggle ("pulsecss");

}





let stretchbutton = document.querySelector("#stretchbutton");
console.log(stretchbutton)


stretchbutton.addEventListener("click", stretchclicked);

function stretchclicked(){
    avocado.classList.toggle ("stretchcss");

}






let glowbutton = document.querySelector("#glowbutton");
console.log(glowbutton)


glowbutton.addEventListener("click", glowclicked);

function glowclicked(){
    avocado.classList.toggle ("glowcss");

}






let slideinbutton = document.querySelector("#slideinbutton");
console.log(slidebutton)

slideinbuttonbutton.addEventListener("click", slideinclicked);

function slideinclicked(){
    avocado.classList.toggle("slideincss");
}





let spinbutton = document.querySelector("#spinbutton");
console.log(spinbutton)


spinbutton.addEventListener("click", spinclicked);

function spinclicked(){
   avocado.classList.toggle ("spincss");

}




let zoomoutdownbutton = document.querySelector("#zoomoutdownbutton");
console.log(zoomoutdownbutton)


zoomoutdownbutton.addEventListener("click", zoomoutdownclicked);

function zoomoutdownclicked(){
   avocado.classList.toggle ("zoomoutdowncss");

}
