/*let algotimo = Number(prompt("Escolha um um número que você deseja:"))
if(algotimo < 0) {
    throw Error
}

for(let contador = 0; contador <= algotimo; contador++) {
    console.log(contador)
} */

/*for(contador = 50; contador >= 0 ; contador= contador -5) {
    console.log(contador)
}*/
 
let numero = parseInt(prompt("Digite um numero inteiro e positivo"))
for (let i = numero; i <= numero+2; i++) {
    console.log("tabuada do numero: " + i )
    for(let j = 0; j<=10; j++){
        console.log(i + "X" + j + " = " + (i*j))
    }
} 















