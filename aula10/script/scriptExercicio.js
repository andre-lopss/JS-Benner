// let nomes = ["Ana", "Joao", "Caique", "Maria", "Tiago"]

// const coisaNomes = (name, novoNome, index) =>{
//     console.log("Quantidade de elementos do Array", nomes.length);
//     console.log(`Você escolhgeu o index: ${ index} que é o elemento ${name[index]}`);
//     name.push(novoNome)
//     console.log("A quantidade de elementos atual do array é de: ", name.length);
// }

// coisaNomes(nomes, "André", 5);


const novNomes = (palavra)=>{
    console.log(`Esta palavra tem ${palavra.length} caracteres`);
    console.log(`A palavra ${palavra.toLowerCase()} ficou ${palavra.toUpperCase()}`);
    console.log(`A letra ${palavra[2]} é o 3° caracter da palavra ${palavra.toUpperCase()}`);
    console.log(`${palavra.toUpperCase()} ficou ${palavra.replace(palavra[2], "x")}`);
}

novNomes("André");