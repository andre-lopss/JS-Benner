window.onload = function(){

    const cxProduto = document.querySelector("#produto");
    const btnCadastrar = document.querySelector("#cadastrar")
    const lista = document.querySelector("#listaDeProdutos")

    btnCadastrar.addEventListener('click', function(){
        let li = document.createElement('li');
        lista.appendChild(li).setAttribute('class', 'lista de frutas') //coloca a classe dinamicamente no HTML
        lista.appendChild(li).textContent = cxProduto.value;//cria as li's dinamicamente no HTML
    })
    
} 