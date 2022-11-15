// For In

// let Pessoas = {
//     nome : "Steven Roger",
//     idade: 20,
//     sexo: 'M'
// }

// for(let key in Pessoas){
//     console.log(`${key} : ${Pessoas[key]}`);
// }

// let frutas =["Melancia", "Banana", "Jaca", "Caja", "Maça"]

// for(let key of frutas){
//     console.log(key)
// }

// let Herois = [{
//     identidadeSecreta : "Steven Roger",
//     heroi: "Capitão América"
// },
// {
//     identidadeSecreta : "Tony Stark",
//     heroi: "Iron Man"
// }
// ]

// Herois.push({identidadeSecreta: "Diana", heroi:"Mulher MAravilha"})
// for(let key of Herois){
//     for(let k in key){
//         console.log(`${k}: ${key[k]}`)
//     }
// }

//exercicio da aula anterior

function invertePalavra(p){
    for(let key = (p.length - 1); key >= 0; key--){
        console.log(p[key])
    }
}

invertePalavra("André")