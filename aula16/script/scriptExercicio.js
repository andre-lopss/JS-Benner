window.onload = function (){

    const valor1 = document.querySelector("#numero1");
    const valor2 = document.querySelector('#numero2');
    const total = document.querySelector("#calcular");

    valor2.addEventListener('blur', function(){

        if(isNaN (valor1.value) && isNaN (valor2.value)){
            resp.innerHTML = "Digite um valor numérico"
        }else{
            total.value = Number(valor1.value) + Number(valor2.value);
        }

    })
      
}