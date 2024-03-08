function GetRandomNumber(num){
    return Math.floor(Math.random() * 6) + 1;
}

function GetRespectiveImg(num){
    if(num>0&&num<=6){
        return "./images/dice"+num+".png";
    }
    else{
        return "./images/dice1.png"
    }
}

function CompareDice(num1, num2, htmlElement){
    if (num1>num2) {
        htmlElement.textContent = "Player1 Win!";
    }
    else if (num1<num2) {
        htmlElement.textContent = "Player2 Win!";
    }
    else {
        htmlElement.textContent = "Draw!";
    }
}

let playerOneScore = GetRandomNumber(6);
let playerTwoScore = GetRandomNumber(6);
let h1 = document.querySelector("h1");
let playerOneDice = document.querySelector(".img1");
let playerTwoDice = document.querySelector(".img2");
console.log("player1 : " + playerOneScore);
console.log("player2 : " + playerTwoScore);

CompareDice(playerOneScore, playerTwoScore, h1);

playerOneDice.setAttribute("src", GetRespectiveImg(playerOneScore));
playerTwoDice.setAttribute("src", GetRespectiveImg(playerTwoScore));

