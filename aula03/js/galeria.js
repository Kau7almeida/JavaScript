var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize = document.getElementsByClassName("fullsize")[0];

// o comando abaixo faz uma contagem de 1 a 5 e incrementa de um a um. dentro d o corpo do for é chamada de div miniatura e inserimos nela um comando html para exibição de imagens e este comando é repetido tantas vezes que é pedido no comando for. quando ha a acontagem o nome da foto é incrementado com o número de variável i. fazendo uma contagem de 1 a 5 e exibir as imagens de foto1 até foto5 dentro da div miniatura.

for (var i = 1; i <= 5 ; i++){
    miniatura.innerHTML += "<img src=img/foto" + i + ".png onclick=abrir("+i+")>";
}

// document.getElementsByTagName("img")[0].onclick = function() {
//    fullsize.innerHTML="<img src=img/foto1.png>";
// }

// a função abrir é chamada todas as vezes que um foto da miniatura é clicada. quando a miniatura é clicada ela despara um evento chamado onclick e chama a função abrir passando por parâmetro um número que é  posição da foto. assim a função abrir recebe o número passado e armazena na variável p. está variável é usada para formar o nome da foto que sera carregada na div fullsize como vemos abaixo.

function abrir(p) {
    fullsize.innerHTML="<img src=img/foto"+(p)+".png>";
}