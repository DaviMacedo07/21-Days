// tenho que perguntar ao usuário se ele esta com fome , tem dinheiro e se o restaurante esta aberto!

let fomeUsu = prompt("Você esta com fome? (sim/não")
let dinheiroUsu = prompt("Você esta com dinheiro? (sim/não");
let restauranteUsu = prompt("O Restaurante esta aberto? (sim/não)");

if(fomeUsu === "não" || dinheiroUsu === "não") {
    console.log("Hoje a janta será em casa ")
} else if (dinheiroUsu === "sim" && restauranteUsu === "sim") {
    console.log("Hoje a janta sera no restaurante! Arrume-se")
} else  {
    console.log("Peça um Delivery")
}