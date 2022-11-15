//concat() - junta dois ou mais arrays

// let nomes = ["André", "Marcos", "João", "Gabriel"];
// let nomes2 = ["Geovanna", "Caique", "Higor", "Thais"];

// let todosOsNomes = nomes.concat(nomes2);

// console.log(nomes);

// console.log(nomes2);

// console.log(todosOsNomes);

// let qtdArraynomes = `O array nomes possui ${todosOsNomes.length} elementos`

// console.log(qtdArraynomes);

//indexOf() - Procura um determinado elemento de um array, retorna uma posição

// let nomes = ["André", "Marcos", "João", "Gabriel"];

// let buscaNome = "Caio";

// if(nomes.indexOf(buscaNome) != (-1)){
//     alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes.indexOf(buscaNome)}`);
// }else{
//     alert(`Não encontrei o ${buscaNome} na lista.`)
// }

//Join() - Vai transformar elementos de um array em uma string

// let nomes = ["André", "Marcos", "João", "Gabriel"];

// console.log(nomes);
// console.log(nomes.join());

//push() insere elementos no fim do array 

// let frutas = ["Uva", "Pera", "Jaca", "Melancia"];
// // frutas.push =  "Maça, laranja";
// // frutas.push = "laranja";
// // console.log(frutas.indexOf("Jaca"));
// insertFrutas = "Limão";

// if(frutas.indexOf(insertFrutas) != -1){
//     console.log(`A fruta ${insertFrutas} já está na lista`)
// }else{
    
//     console.log(`A fruta ${insertFrutas} foi inserida na lista`)
//     frutas.push = insertFrutas;
// }
// console.log(frutas);

//pop() - remove o ultimo elemento de um array

// let frutas = ["Uva", "Pera", "Jaca", "Melancia"];

// frutas.pop();

// console.log(frutas);

//reverse()- Vai inverter a ordem dos elementos de um array

// let frutas = ["Uva", "Pera", "Jaca", "Melancia"];

// frutas.reverse();
// console.log(frutas);
// console.log(frutas[0]);

//shift() -Remove o primeiro elemento de um array

// let frutas = ["Uva", "Pera", "Jaca", "Melancia"];

// frutas.shift();

// console.log(frutas);

//sort()- Ordena elementos de um array em ordem crescente

// let numeros = [200, 1, 5 , 8, 65];
// let alfa = ["n", "g", "k", "a"]
// alfa.sort();
// console.log(alfa);

// toString -Converte um array em string e retorna uma string

// let frutas = ["Uva", "Pera", "Jaca", "Melancia"];

// console.log(frutas.toString());

//unShift() - Insere um elemento no inicio do array

//splice() - corta ou remove um elemento de um array em um ponto indicado
//agrupar com indexOf

// let nomes = ["Mariana", "Caique", "Joao", "Kaio"];

// let indice = nomes.indexOf("Caique");

// let novoNomes = nomes.splice(indice, 1);

// console.log(nomes);

// let nomes = ["Mariana", "Caique", "Joao", "Kaio"];

// function (recebeArray, novoNome, qtArray){
//     recebeArray = nomes;
//     novoNome = nomes.
//}