const number1 = parseInt(prompt("Pick any number"))
const number2 = parseInt(prompt("Pick another number"))
let option = parseInt(prompt("Which mathmatic operation do you want?" 
+ "\n1 = Sum; \n2= Subtraction; \n3 = Multiplication; \n4 = Divide"))

switch (option) {
    case 1 : 
    console.log(number1 + "+" + number2 + "=" + (number1 + number2))
    break
    case 2 : 
    console.log(number1 + "-" + number2 + "=" + (number1 - number2))
    break
    case 3 : 
    console.log(number1 + "*" + number2 + "=" + (number1 * number2))
    break
    default: 
    console.log(number1 + "/" + number2 + "=" + (number1 / number2))
    break
}