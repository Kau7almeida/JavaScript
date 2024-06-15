// referenciar a div camada

const camada = document.querySelector("#camada");

setTimeout(()=>{
    camada.style.top="-200px"
    camada.style.height="0vh";
    camada.style.width="0vw";
}, 5000)