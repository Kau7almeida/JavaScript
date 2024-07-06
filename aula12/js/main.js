document.querySelector("#menu").onclick = () => {
    document.querySelector("#nav").style.top = "0px"
}

document.querySelector("#fechar").onclick = () => {
    document.querySelector("#nav").style.top = "-100px"
}

const sectionListar = document.querySelector("#listar");
const sectionResultado = document.querySelector("#resultado");
const sectionInserir = document.querySelector("#inserir");

function listar() {
    // esconder a section resultado e inserir
    sectionResultado.style.display = "none";
    sectionInserir.style.display = "none";
    // section listar deve ficar visivel
    sectionListar.style.display = "block";


    // fazer referencia a div chamada listar_livros para exibir os livros vindos da api
    const listarLivros = document.querySelector("#listarlivros");
    fetch("http://10.26.44.14:5000/api/v1/livros/listar")
        .then((res) => res.json())
        .then((dados) => {

            dados.payload.map((item) => {
                let caixa = document.createElement("div");
                caixa.setAttribute("class", "caixa");

                let capa = document.createElement("img");
                capa.src = item.foto1;

                let titulo = document.createElement("h4");
                titulo.innerHTML = item.titulo;

                let autor = document.createElement("h5");
                autor.innerHTML = item.autor;

                let preco = document.createElement("p");
                preco.setAttribute("class", "preco");
                preco.innerHTML = `<p>R$ ${item.precoatual}</p>`;

                caixa.appendChild(capa);
                caixa.appendChild(titulo);
                caixa.appendChild(autor);
                caixa.appendChild(preco);

                listarLivros.appendChild(caixa);
            })

        }).catch((erro) => console.error(`Erro ao carregar os dados ${erro}`))

}

function resultado() {
    // esconder a section listar e inserir
    sectionListar.style.display = "none";
    sectionInserir.style.display = "none";
    // section resultado deve ficar visivel
    sectionResultado.style.display = "block";

    const buscar = document.querySelector("#buscar").value
    const resultadoBusca = document.querySelector(".resultadobusca");
    resultadoBusca.innerHTML = `<p class="pesquisa"> Você pesquisou por: ${buscar} </p>`;

    fetch("http://10.26.44.14:5000/api/v1/livros/pesquisar/" + buscar)
        .then((res) => res.json())
        .then((dados) => {

            dados.payload.map((item) => {
                let caixa = document.createElement("div");
                caixa.setAttribute("class", "caixa");

                let capa = document.createElement("img");
                capa.src = item.foto1;

                let titulo = document.createElement("h4");
                titulo.innerHTML = item.titulo;

                let autor = document.createElement("h5");
                autor.innerHTML = item.autor;

                let preco = document.createElement("p");
                preco.setAttribute("class", "preco");
                preco.innerHTML = `<p>R$ ${item.precoatual}</p>`;

                caixa.appendChild(capa);
                caixa.appendChild(titulo);
                caixa.appendChild(autor);
                caixa.appendChild(preco);

                resultadoBusca.appendChild(caixa);
            })

        }).catch((erro) => console.error(`Erro ao carregar os dados ${erro}`))

}

function abrircadastrar() {
    // esconder a section listar e resultado
    sectionListar.style.display = "none";
    sectionResultado.style.display = "none";
    // section inserir deve ficar visivel
    sectionInserir.style.display = "block";
}

function inserir() {

    const txttitulo = document.querySelector("#txttitulo")
    const txtautor = document.querySelector("#txtautor")
    const txtpreco = document.querySelector("#txtpreco")
    const txtfoto1 = document.querySelector("#txtfoto1")
    const txtfoto2 = document.querySelector("#txtfoto2")
    const txtgenero = document.querySelector("#txtgenero")
    const txtsinopse = document.querySelector("#txtsinopse")

    fetch("http://10.26.44.14:5000/api/v1/livros/cadastrar", {

    method:"POST",

    headers:{
        "accept":"application/json",
        "content-type":"application/json"
    },

    body:JSON.stringify({
        titulo:txttitulo.value,
        autor:txtautor.value,
        precoatual:txtpreco.value,
        foto1:txtfoto1.value,
        foto2:txtfoto2.value,
        genero:txtgenero.value,
        sinopse:txtsinopse.value
    })

    })

    .then((res)=>res.json)
    .then((dados)=>{

        if ( dados.msg == "OK" ) {
            return alert("Livro cadastrado");
        } else {
            alert(dados.msg);
        }

    }).catch((erro) => console.error(`Erro ao cadastrar os dados ${erro}`))
}