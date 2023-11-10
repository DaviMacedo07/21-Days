let valor 
let quantidade 
let opcao = prompt("Bem vindo ao Posto de Gasolina de Fortaleza, você deseja : " + "\n1 - Abastecer com gasolina(1L = 4.3R$)  \n2 - Abastecer com álcool(1L = 3.2R$) \n3 - Calibrar os pneus ")

switch(opcao) {
    case "1" :
        valor = parseInt(prompt("Quantos reias de gasolina você deseja abastecer ?"))
        quantidade = parseInt(valor / 4.3) ;
        console.log("Foram abastecidos " + quantidade + "L de gasolina!")
        break
    case "2" :
        valor = parseInt(prompt("Quantos reais de álcool você deseja abastecer ?"))
        quantidade = parseInt(valor / 3.2) ;
        console.log("Foram abastecidos " + quantidade + "L de álcool!")
        break
    default:
        console.log("Pneus calibrados com sucesso !")
}
