function quadradoAzul(){
    // vamos criar um elemento html to tipo div e adiciona-lo a tela
    const divAzul = document.createElement("div");
    // vamos adicionar um atributo de classe a nossa div
    divAzul.setAttribute("class", "divAzul");
    divAzul.setAttribute("id", "divAzul");
    // adicionar a divAzul ao nosso documento
    document.body.appendChild(divAzul);
}
// realizar a chamada da função quadradoAzul com o evento onload
document.body.onload=quadradoAzul();
// quando passar o ponteiro do mouse sobre a div, mudar de cor
document.getElementById("divAzul").onmouseover=function(){
    document.getElementById("divAzul").style.backgroundColor="#600";
}
// quando tirar o ponteiro do mouse de cima da div, voltar a cor original
document.getElementById("divAzul").onmouseout=function(){
    document.getElementById("divAzul").style.backgroundColor="rgb(0, 0, 112)";
}


const msg = function(){
    soma();
}

const soma = function(){
    let n1 = prompt("digite um valor");
    let n2 = prompt("digite outro valor");
    let rs = parseInt(n1)+parseInt(n2);
    const label = document.createElement("label");
    label.innerHTML=rs;
    document.body.appendChild(label);
}

const msg2 = ()=>{
    const es = prompt("Digite quantos botões você quer!");
    for(let i = 0; i < es; i++){
        const bt = document.createElement("button");
        bt.innerHTML=`Botão ${i}`;
        document.body.appendChild(bt);
    }
}

document.getElementById("divAzul").onclick=msg2;

