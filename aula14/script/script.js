//LAÇO WHILE
// let loop = 0;
// let cores = ['Azul', 'Verde', 'Vermelho']
// while(loop < cores.length){
//     console.log(cores[loop]);
//     loop++;
// }

//LAÇO - DO WHILE

let teste = 0;
do{
    teste = Number(prompt("Digite 0 para sair"));

    switch (teste){
        case 0:
            alert('Saindo do sistema...')
            break;
        case 1:
            alert('Cadastrando...')
            break;
        case 2:
            alert('Consultando...')
            break;
        default:
            alert('Opção invalida')
            break;
    }
    
}while(teste != 0)