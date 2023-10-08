let menu = document.querySelector('#hamburger');
var dis=1;

function toggleShow(){
    console.log("runed");
    if(dis==1){
        menu.style.display = 'flex';
        dis=0;
    }
    else{
        menu.style.display = 'none';
        dis=1;
    }
}

document.getElementById('menu').addEventListener("click",toggleShow);