// Calculo de IMC 
// Calculo do nível de obesidade 

const nome = 'Renata'
const peso = 90
const altura = 1.68
const sexo = 'Feminino'

const imc = peso / (altura * altura)
console.log(imc)

if (imc >= 30){
    console.log('Renata você esta acima do peso')
}if (imc < 29.9) {
    console.log('Você não esta acima do peso')
}
