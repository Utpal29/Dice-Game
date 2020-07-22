var player1 = "Player1";
var player2 = "Players2";

function namePlayer() {
    player1 = prompt("Enter Player 1 Name");
    player2 = prompt("Enter Player 2 Name");
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}

function rollDice() {
    var player1roll = player1;
    var player2roll = player2;

    var randomNumber1 = Math.floor(1 + Math.random() * 6);
    var randomNumber2 = Math.floor(1 + Math.random() * 6);

    var randomDiceImage = "images/dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = player1roll.concat(" Wins! 🚩");
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 ".concat(player2roll.concat(" Wins!"));
    }
    else {
        document.querySelector("h1").innerHTML = "Draw! 🤝";
    }
}
