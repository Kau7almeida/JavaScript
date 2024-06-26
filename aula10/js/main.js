const img = "https://image.tmdb.org/t/p/w500";

const esrutura = document.querySelector("#estrutura");

/*
para carregar os dados da API do tmdb iremos usar o comando fetch(buscar) para buscar os dados dos filmes populares, este comando tem dois elementos atrelado, são eles:

then -> então: quando a execução comando fetch funciona
catch -> captura de erro: quando a execução do comando fetch falha

o fetch é uma promise
*/

fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1&api_key=e512564992dc5dae8bd2ec2f1c1a9c90")
    .then((response) => response.json())
    .then((dados) => {

        dados.results.map((filme) => {
            let cartaz = document.createElement("div");
            cartaz.setAttribute("class", "cartaz");
            let poster = document.createElement("img");
            poster.src = img + filme.poster_path;

            let votos = document.createElement("div");
            votos.setAttribute("class", "votos");
            votos.innerHTML = Math.round(filme.vote_average) + "%";

            let titulo = document.createElement("h2");
            titulo.innerText = filme.title;

            let lancamento = document.createElement("p");
            lancamento.setAttribute("class", "lancamento");

            /*vamos utilizar o comando chamado substring, que nos ajuda a quebrar uma string com base na posição do caracter e a quantidade de caracteres, por exempo: 2024-06-13. para pegar os 4 primeiros digitos usamos: substring(0,4)*/

            let ano = filme.release_date.substring(0, 4);
            let mes = filme.release_date.substring(5, 7);
            let dia = filme.release_date.substring(8, 10);

            switch (mes) {
                case "01":
                    mes = "jan";
                    break;

                case "02":
                    mes = "fev";
                    break;

                case "03":
                    mes = "mar";
                    break;

                case "04":
                    mes = "abri";
                    break;

                case "05":
                    mes = "mai";
                    break;

                case "06":
                    mes = "jun";
                    break;

                case "07":
                    mes = "jul";
                    break;

                case "08":
                    mes = "ago";
                    break;

                case "09":
                    mes = "set";
                    break;

                case "10":
                    mes = "out";
                    break;

                case "11":
                    mes = "nov";
                    break;

                case "12":
                    mes = "dez";
                    break;
            }

            lancamento.innerText = `${dia} de ${mes} de ${ano}`;

            cartaz.appendChild(poster);
            esrutura.appendChild(cartaz);
            cartaz.appendChild(votos);
            cartaz.appendChild(titulo);
            cartaz.appendChild(lancamento);
        })

        // console.log(dados.results);

        // const fotos = document.querySelector("#fotos");

        // for ( let i = 0; i <= 19; i++) {
        //     fotos.innerHTML+=`<img src=${img}${dados.results[i].backdrop_path}>`;
        // }
    })
    .catch((erro) => console.error(erro))

// const cidades = ["Leme", "Guarulhos", "São Paulo", "Mauá", "Suzano"];

// let p = 1;

// cidades.forEach(exibir)

// function exibir(itens){
//     console.log(`${p}ª${itens}`);
//     p++
// }

// cidades.forEach((itens)=>{
//     console.log(`${p}ª${itens}`);
//     p++
// })

// cidades.map((itens)=>{
//     console.log(itens);
//     p++
// })