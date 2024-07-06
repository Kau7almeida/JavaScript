let px = 0;
let canto = 0;

function movimentaRed() {
    if (px >= 800) {
        px = 800
    } else {
        px += 5
    }

    document.getElementById("um").style.marginLeft = px + "px";
    document.getElementById("um").style.borderRadius = canto + "px";
    canto += 1;

    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    document.getElementById("um").style.backgroundColor = (`#${r}${g}${b}`);
}

function relogio() {
    //Referência da biblioteca Date
    let tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    let segundos = tempo.getSeconds();
    document.getElementById("dois").innerHTML = `${hora} : ${minuto} : ${segundos}`;
}
//window.setInterval(relogio, 500);

// let tm = 1;
// function aumentar() {
//     document.getElementById("tres").style.transform = `scale(${tm})`;
//         tm += 0.1;
// }

// function diminuir() {
//         document.getElementById("tres").style.transform = `scale(${tm})`;
//         tm -= 0.1;
// }

// setInterval(() => {
//     if (tm <= 1.9) {
//         aumentar();
//     } else {
//         diminuir();
//     }
// }, 1000)


// let tm = 1;
// let estado = "aumentar";
// const el = setInterval(() => {

//     if (tm >= 3) {
//         estado = "diminuir"
//     }
//     if (tm <= 0) {
//         estado = "aumentar"
//     }

//     if (estado == "aumentar") {
//         tm += 0.1;

//     } else {
//         tm -= 0.1;
//     }

//     document.getElementById("tres").style.transform = `scale(${tm})`;
// }, 1000)






let pos = 0;
let direcao = "direita"
setInterval(() => {

    if (pos >= 1720) {
        direcao = "esquerda"
        document.getElementById("quatro").style.backgroundColor="red";
    }

    if (pos <= 1) {
        direcao = "direita"
        document.getElementById("quatro").style.backgroundColor="yellow";
    }

    if (direcao == "direita") {
        pos += 50;
    } else {
        pos -= 50;
    }

    document.getElementById("quatro").style.left = pos + "px";


}, 205)