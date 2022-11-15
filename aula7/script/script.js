function verificaMaiorNum(num1, num2){
    if(num1 > num2){
        console.log("O número "+num1+" é maior que o número "+num2);
    }else{
        console.log("O número "+num2+" é maior que o número "+num1);
    }
}

// verificaMaiorNum(10,50);
function teste(){
    let nome = "André";
    return nome;
}

// console.log(teste());
// let msg = (nome)=> {return nome;};
// console.log(msg('andskd'))

// (function(produto, preco){
//     alert("O produto é "+produto+" e o preço dele é "+preco+" R$.")
// })("Bolacha", 15.6)

let v1 = prompt ("Digite o valor 1:");
let v2 = prompt ("Digite o valor 2:");

const soma = (valor1, valor2)=>{
    let resultado = parseInt(valor1) + parseInt(valor2);
    console.log(resultado);
}

soma(v1, v2)
