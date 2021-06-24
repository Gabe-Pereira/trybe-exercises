let gabeGame = [5, 10, 15, 21, 22, 25, 35];

// sortear os números da MEGA

let num1 = Math.floor(Math.random() * 60) +1;
let num2 = Math.floor(Math.random() * 60) +1;
let num3 = Math.floor(Math.random() * 60) +1;
let num4 = Math.floor(Math.random() * 60) +1;
let num5 = Math.floor(Math.random() * 60) +1;
let num6 = Math.floor(Math.random() * 60) +1;

let megaSenaNumbers = [num1, num2, num3, num4, num5, num6];

// console.log("jogo do gabe " + gabeGame);
// console.log("jogo sorteado da mega " + megaSenaNumbers);

let numberOfHits = 0;

// conf do jogo

for (let trybe = 0; trybe < megaSenaNumbers.length; trybe += 1) {
let drawNumber = megaSenaNumbers[trybe];


    for (let gameIndex = 0; gameIndex < gabeGame.length; gameIndex += 1) {
    let gameNumber = gabeGame[gameIndex];

if (drawNumber === gameNumber) {
    numberOfHits += 1;
}

  //  console.log(drawNumber + ": " + gameNumber);
}
} 

console.log("jogo do Gabe: " + gabeGame);
console.log("Numeros Sorteados: " + megaSenaNumbers);
console.log("Quantidade de acertos: " + numberOfHits);