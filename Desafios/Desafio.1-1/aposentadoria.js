// Cálculo de aposentadoria

const name = 'Marco';
const sexo = 'M';
const idade = 28;
const contribuicao = 10;

const calculoContribuicao = idade + contribuicao;

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95;
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85;

if (homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${name}, você pode se aposentar!`)
} else {
    console.log(`${name}, você ainda não pode se aposentar!`)
}