// function Pessoa(nome){
//     this.nome = nome;
// }

// Pessoa.prototype.msg = function(){
//     alert("Olá" + this.nome);
// }

// let novaPessoa = new Pessoa("José");
// let outraPessoa = new Pessoa("Maria");

// novaPessoa.msg();
// console.log(novaPessoa.nome);

// console.log(novaPessoa);
// console.log(outraPessoa);

// let Pessoa2 = {
//     'nome':'',
//     'idade':''
// }

// // console.log(Pessoa2);

// Pessoa2. __proto__.msg = function(){
//     alert("Olá, " + Pessoa2.nome);
// }

// let p = Pessoa2;
// p.nome = "André"
// p.idade = 22;
// p.msg();
// console.log(p);

let Pessoa3 = [
    {
        'nome': 'André',
        'idade': 22,
        'sexo': 'M'
    },
    {
        'nome': 'Maria',
        'idade': 18,
        'sexo': 'F'
    },
    {
        'nome': 'Marta',
        'idade': 45,
        'sexo': 'F'
    }
]

let NPessoa = Pessoa3;
console.log(`Existem ${NPessoa.length} pessoas cadastradas`)
console.log(NPessoa[0].nome);

