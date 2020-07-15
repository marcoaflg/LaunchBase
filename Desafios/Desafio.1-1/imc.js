// Cálculo IMC

const name = 'Marco';
const peso = 80;
const altura = 1.80;

const imc = peso / (altura * altura);

if (imc >= 30 ) {
    console.log(`${name} você está acima do peso`);
} else {
    console.log(`${name} você não está acima do peso`);
}