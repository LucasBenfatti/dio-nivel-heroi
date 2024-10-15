let nomeHeroi = "Batman"
let xpHeroi = 5500

if (xpHeroi <= 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Ferro")
} else if (xpHeroi > 1000 && xpHeroi < 2001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Bronze")
} else if (xpHeroi > 2000 && xpHeroi < 5001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Prata")
} else if (xpHeroi > 5000 && xpHeroi < 7001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Ouro")
} else if (xpHeroi > 7000 && xpHeroi< 8001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Platina")
} else if (xpHeroi > 8000 && xpHeroi < 9001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Ascendente")
} else if (xpHeroi > 9000 && xpHeroi < 10001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Imortal")
} else if (xpHeroi >= 10001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Radiante")
}



/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/