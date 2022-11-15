//  let m = 52;

//  if(typeof m === 'number'){
//     console.log(`O dado informado é um Number: ${m}`);
//  }else{
//     console.log(`O dado informado não é um Number: ${m} : ${typeof(m)}`);
//  }

window.onload = function (){
    // const botao = document.getElementById('btn');
    // const txtBox = document.querySelector("#txtBox");
    // const caixa = document.querySelector("#caixa");

    // botao.addEventListener('click', function(){
    //     caixa.innerHTML += ' ' +  txtBox.value + ' '
    // })

    function tabuada(numero){
        let tabuada = 0;

        if(typeof numero !== 'number'){
            alert('Digite um valor numérico')
        }else{
            if(numero < 1 || numero > 10){
                alert('Digite um valor entre 1 e 10.')
            }else{
                console.log(`TABUADA DO NÚMERO ${numero}`)
                while(tabuada <= 10){
                    console.log(`${numero} x ${tabuada} = ${numero * tabuada}`);
                    tabuada ++;
                }
            }
        }

        
    }

    tabuada(2)

}