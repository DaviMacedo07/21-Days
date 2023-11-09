let nomeUsu = (prompt("Qual seu nome ?"));
let idadeUsu = parseInt(prompt("Qual a sua idade?"));
let alturaUsu = parseFloat(prompt("Qual a sua altura?"));
let pesoUsu = parseFloat(prompt("Qual seu peso"));

const bornUsu = (2023 -  idadeUsu)
const imc = pesoUsu / (alturaUsu * alturaUsu)
const imcCLa = (imc.toFixed(1))
console.log("Olá " + nomeUsu + ", você tem " + idadeUsu + " anos , nasceu em "  + bornUsu + ", tem " + alturaUsu + " de altura, pesa " + pesoUsu +" kg e seu IMC é " + imcCLa + "Kg/m2 D")