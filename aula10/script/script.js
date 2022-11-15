//match() - procura uma palavra em uma strin
//g/i/m

// let nome ="André Lopes Neres"

// console.log(nome.match("o"));

// search()- procura pela ocorrencia e retorna a posição da cadeia de string

// let nome ="André Lopes Neres"

// console.log(nome.search(/e/i));
// console.log(nome[0]);

//replace()- substitui uma string por outra

// let str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil explicabo asperiores voluptatem corporis illum ducimus culpa aut ad magnam sed quo quaerat, voluptates eaque doloremque dolorum cupiditate! Harum, iure accusantium?`;

// let outraStr = str.replace(/sit/gi,`agua`);

// console.log(outraStr);

//localeCompare() - efetua a comparação entre duas strings

// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(/Gato/gi));


//toString converte um valor para string

// let num = Number(`1`);

// console.log(num.toString());

//toLowerCase - Transforma uma string inteira em letras minúsculas

// let str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil explicabo asperiores voluptatem corporis illum ducimus culpa aut ad magnam sed quo quaerat, voluptates eaque doloremque dolorum cupiditate! Harum, iure accusantium?`;

//  

// console.log(str.toLowerCase());

//toUpperCase - Transforma uma string inteira em letras maiúsculas

// let str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil explicabo asperiores voluptatem corporis illum ducimus culpa aut ad magnam sed quo quaerat, voluptates eaque doloremque dolorum cupiditate! Harum, iure accusantium?`;

// console.log(str.toUpperCase());

//trim() - Faz a remoção de espaços antes e depois da string especifica

// let str = `                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil explicabo asperiores voluptatem corporis illum ducimus culpa aut ad magnam sed quo quaerat, voluptates eaque doloremque dolorum cupiditate! Harum, iure accusantium?    `;

// console.log(str.trim());

//NaN 
//Quando uma string for passsada para number(), parseInt/Float e não consiga efetuar a conversão será reornado NaN (Not as Number). isNaN()

// let num = Number("9");
// console.log(isNaN(`8i`));

// if(!isNaN(num)){
//     console.log(`Isto é um número`);
// }else{
//     console.log(`Isto é uma string`);
// }

//toFixed() - analisa um valor flutuante e retorna uma string conforme o parametros de casa

// let valor = 2.9852321;

// console.log(valor.toFixed(3));

// //toLocaleString()- retorna uma string com representação da moeda definida como no parâmetro currency. toLocaleString(`pt-BR`, {style:`currency`, currency:`BRL`})

// console.log(valor.toLocaleString(`pt-BR`, {style:`currency`, currency:`BRL`}));