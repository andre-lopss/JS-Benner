window.onload = function(){

    const cxlProduto = document.querySelector("#produto");
    const cxlPreco = document.querySelector("#preco")
    const btnAdicionar = document.querySelector("#adicionar")
    const listaProdutos = document.querySelector("#listaProduto")
    var listaCesta = document.querySelectorAll(".filhos")
    var cxCliente = document.querySelector("#cestaDoCliente")
    const valorTotal = document.querySelector("#mostraTotalCompra")

    function AdicionarLista(){
        btnAdicionar.addEventListener('click', function(){

            if(cxlProduto.value == '' || Number(cxlPreco.value) == '' ){
                alert("Valores não preenchidos corretamente")
            }else{
                if(isNaN(Number(cxlPreco.value))){
                    alert("Digite um valor numérico")
                }else{
    
                    //Criação das li's na lista de produtos
                    
                    var li = document.createElement('li');
                    listaProdutos.appendChild(li).textContent = cxlProduto.value + ' | Preço: R$ ' + cxlPreco.value
                    

                    li.addEventListener('click', function(){
                    //Criação das li's após o click em algum item da lista de produtos na cesta
    
                    let liCesta = document.createElement('li');
                    liCesta.setAttribute('class', 'filhos')
                    liCesta.setAttribute('data-soma', cxlPreco.value)
    
                    cxCliente.appendChild(liCesta).textContent = li.textContent
                    
                    listaCesta = document.querySelectorAll(".filhos")
    
                    valorTotal.value = somar(listaCesta).toFixed(2).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    
                    li.remove();
                    //remoção da li selecionada na cesta 
                    liCesta.addEventListener('click', function(){
                        liCesta.remove()
    
                        listaCesta = document.querySelectorAll(".filhos")
    
                        valorTotal.value = somar(listaCesta).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
            
                    })
    
                })
                } 
            }

             
        })
    }
    
    AdicionarLista(adicionar);

    function somar(lista){
        let total = 0

        for(let valorProduto of lista){
            total += Number(valorProduto.dataset.soma)
        }
        return total;
    }
}