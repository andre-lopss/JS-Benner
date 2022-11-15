// let str = `Qualquer conteúdo`;

// let str2 = `Uma outra String ${str}`;

// console.log(str2);

//Array é uma coleção de dados.
//O array é constituido por elementos.

// const frutas = ["Uva", "Melancia", "Laranja", "Banana"];

// let euGosto = `Eu gosto de ${frutas[2]}`;
// console.log(euGosto);

// const Pessoa = [
//     "José",
//     23,
//     "Solteiro",
//     "Bola",
//     1.70,
//     cores = ["azul", "preto", "vermelho", "salmão", "ocre"]
// ];

// let key = 3;

// key++;

// console.log(Pessoa.length);

// console.log(Pessoa[5][key]);

// (function(p){
//     const jose = `Meu nome é ${Pessoa[0]}, tenho ${Pessoa[1]} anos, sou ${Pessoa[2]} e gosto de jogar ${Pessoa[3]}. Minha altura é ${Pessoa[4]}.`;
//     document.writeln(jose)
// })(Pessoa);

function valorImc(peso, nome, altura){
    a = Number(altura);
    p = Number(peso);
    n = nome;

    var imc = p / (a*a);

    console.log("Nome: ", nome);
    console.log("Altura: ", altura);
    console.log("Peso: ", peso);
    console.log("IMC: ", imc);
    
}

nomePessoa = prompt("Insira seu nome:");
alturaPessoa = prompt(`Bem vindo ${nomePessoa}, insira sua altura:`);
pesoPessoa = prompt("Insira seu peso:");

valorImc(pesoPessoa, nomePessoa, alturaPessoa);




