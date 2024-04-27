var pos = 1;


function esquerda() {
    if(pos <=1){
        pos = 1;
    }

    else{
        pos--;
    }
    
    pos --;
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".png>";
}

function direita() {
    if(pos >=5){
        pos = 1;
    }

    else{
        pos++;
    }

    pos ++;
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".png>";
}