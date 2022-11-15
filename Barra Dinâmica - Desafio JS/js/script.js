window.onload = function(){
    const comprimento = document.querySelector("#comprimento")
    const altura = document.querySelector("#altura")
    const quadrado = document.querySelector("#dentro")
     
    comprimento.addEventListener('change', function(){
        quadrado.style.left = comprimento.value + 'px'
    })

    altura.addEventListener('change', function(){
        quadrado.style.top = altura.value + 'px'
    })
}
