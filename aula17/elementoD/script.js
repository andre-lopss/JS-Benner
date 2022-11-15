window.onload = function(){

    let produtos = [
        {descricao: 'Biscoito Mirabel', preco: 2.20},
        {descricao: 'Marmelada', preco: 3.20},
        {descricao: 'Sabonete', preco: 2.7},

    ]

    const listaProdutos = document.querySelector("#listaProdutos");

    const Total = document.querySelector("#total");

    ( ()=> {
        let totalzinho = 0;
        for( let pro of produtos){

            const filhoLi = document.createElement('li');
            
            for( listaP in pro){
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', `${pro[listaP]}`);
                    totalzinho += pro[listaP]
                }else{
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`
                }
            }
        }
        Total.value = totalzinho.toFixed(2);
    })(produtos)

}