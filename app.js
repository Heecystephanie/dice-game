//Player 1

let randomNumber = Math.ceil(Math.random() *6);
console.log(randomNumber);

let randomDiceImage = 'dice' + randomNumber + '.png';

let randomImageSource = 'image/' + randomDiceImage;

let image = document.querySelectorAll('img')[0];

image.setAttribute('src', randomImageSource);

//player2
let randomNumber2 = Math.ceil(Math.random() *6);
console.log(randomNumber2);

let randomDiceImage2 = 'dice' + randomNumber2 + '.png';

let randomImageSource2 = 'image/' + randomDiceImage2;

let image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomImageSource2);

//Conditional statements 

if(randomNumber > randomNumber2){
    document.querySelector('h1').innerText = 'Player One Wins🎈'
}

else if (randomNumber === randomNumber2) {
    document.querySelector('h1').innerText = 'This is a draw 🔴'
}

else {
    document.querySelector('h1').innerText = 'Player Two Wins🎈'
}