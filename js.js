function loopimagen(){
    let ahora = new Date();
    let seconds = ahora.getSeconds();
    if (seconds<5){
        document.getElementById("alterar-imagen").src = "../img/5ta/grupal-5ta.png";
    }
    else if (seconds>=5 && seconds<10){
        document.getElementById("alterar-imagen").src = "img/2011/grupal-2011.JPG";
    }
    else if (seconds>=10 && seconds<15){
        document.getElementById("alterar-imagen").src = "img/2012/grupal-2012.JPG";
    }
    else if (seconds>=15 && seconds<20){
        document.getElementById("alterar-imagen").src = "img/2013/grupal-2013.JPG";
    }
    else if (seconds>=25 && seconds<30){
        document.getElementById("alterar-imagen").src = "img/2014/grupal-2014.jpg";
    }
    else if (seconds>=35 && seconds<40){
        document.getElementById("alterar-imagen").src = "img/Sub-14/grupal-sub-14.jpg";
    }
    else if (seconds>=45 && seconds<50){
        document.getElementById("alterar-imagen").src = "img/Sub-16/grupal-sub-16.jpg";
    }
    else if (seconds>=55 && seconds<60){
        document.getElementById("alterar-imagen").src = "img/Escudo-palometas.png";
    }
}
function loopimagen2(){
    let ahora = new Date();
    let seconds = ahora.getSeconds();
    if (seconds<5){
        document.getElementById("alterar-imagen2").src = "../img/5ta/grupal-5ta.png";
    }
    else if (seconds>=5 && seconds<10){
        document.getElementById("alterar-imagen2").src = "img/2011/grupal-2011.JPG";
    }
    else if (seconds>=10 && seconds<15){
        document.getElementById("alterar-imagen2").src = "img/2012/grupal-2012.JPG";
    }
    else if (seconds>=15 && seconds<20){
        document.getElementById("alterar-imagen2").src = "img/2013/grupal-2013.JPG";
    }
    else if (seconds>=25 && seconds<30){
        document.getElementById("alterar-imagen2").src = "img/2014/grupal-2014.jpg";
    }
    else if (seconds>=35 && seconds<40){
        document.getElementById("alterar-imagen2").src = "img/Sub-14/grupal-sub-14.jpg";
    }
    else if (seconds>=45 && seconds<50){
        document.getElementById("alterar-imagen2").src = "img/Sub-16/grupal-sub-16.jpg";
    }
    else if (seconds>=55 && seconds<60){
        document.getElementById("alterar-imagen2").src = "img/Escudo-palometas.png";
    }
}
window.addEventListener("load", function () {
    setInterval(loopimagen, 500);
    setInterval(loopimagen2, 500);
});

loopimagen();
loopimagen2();