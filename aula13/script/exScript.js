let Frutas = [
    {nome : "Melancia", valor : 5},
    {nome : "Maça", valor : 2},
    {nome : "Jaca", valor : 10},
    {nome : "Uva", valor : 6}
]

function listaFrutas(f){
    for(let produto of f){
        for(let p in produto){
            console.log(`${p} -> ${produto[p]}`)
        }
    }
}

listaFrutas(Frutas)