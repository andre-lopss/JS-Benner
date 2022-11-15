window.onload = function(){
    const cxlProduto = document.querySelector("#lProduto");
    const btnAdicionar = document.querySelector("#adicionar")
    const lista = document.querySelector("#produto")
    
    function adicionarLista(lProduto){    
        btnAdicionar.addEventListener('click', function(){
            let li = document.createElement('li');
            lista.appendChild(li).textContent = cxlProduto.value
        })
        
    }

}

export {adicionarLista};