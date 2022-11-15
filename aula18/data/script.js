let meses =[
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]
let diaSemana =[
    'Domingo','Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira','Sexta-feira','Sábado'
]

let data = new Date();
console.log(`Hoje é ${diaSemana[data.getDay()]} de ${meses[data.getMonth()]} de ${data.getFullYear()}`);

let dataFormatada = data.toLocaleString(`pr-BR`, {year: 'numeric', month: '2-digit', day:'2-digit'})

console.log(dataFormatada)