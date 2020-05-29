const toggle = document.querySelector('#pill')
const ball =document.querySelector('#ball');
let dark = false;

toggle.addEventListener('click', ()=>{
    dark = !dark;
    if(dark){
        document.documentElement.setAttribute('data-theme','dark');
        ball.style.left = 80-27 + "px";
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        ball.style.left = "3px";
    }
    }
)

