window.onload = function(){
    let veiculos = ['ônibus' , 'motocicleta', 'patinete', 'carro'];

    const btnBuscar = document.querySelector("#gerarLista");
    const lista = document.querySelector("#veiculos");

    btnBuscar.addEventListener('click', ()=>{
        
        for( veic of veiculos){
            let li = document.createElement('li');

            lista.appendChild(li).textContent = veic;
        }
    })
    
}