let sequence = [];
let level = 0;
let noOfClick = 0;
let gameStart = false;
let gameOver = false;
let gamePreviewing = false;

let buttonAmount = $(".btn").length;

for (let i = 0; i < buttonAmount; i++) {
    $(".btn")[i].classList.add(""+i);
    console.log($(".btn")[i].classList);
}

$(document).keypress(function(e) {
    if (!gameStart){
        gameStart = true;
        StartLevel();
    }

    if (gameOver){
        Init();
        gameStart = true;
        StartLevel();
    }
});

$(".btn").click(function(e) {

    if (!gameStart || gameOver || gamePreviewing){
        return;
    }

    let input = parseInt(this.classList[2]);
    noOfClick++;
    console.log("input : " + input);
    console.log("number of click : " + noOfClick);

    ButtonAnimationHandler(input);

    if(CheckPlayerInputs(input, noOfClick)){
        SoundHandler(this.id);
    }
    else{
        gameOver = true;
        GameOverAnimationHandler();
        $("h1").text("Game Over, Press Any Key to Restart");
        SoundHandler("wrong");
    }

    if(IsCompleteSequence() && !gameOver){
        StartLevel();
        noOfClick = 0;
    }
})

function Init(){
    sequence = [];
    level = 0;
    noOfClick = 0;
    gameOver = false;
    gamePreviewing = false;
}


function StartLevel(){
    sequence.push(GetRandom(4));
    level = sequence.length;
    console.log("Start Level " + level);
    console.log(sequence);

    PreviewAnimationHandler();

    $("h1").text("Level " + level);
}

function GetRandom(num){
    return rand = Math.floor(Math.random() * num);
}

function PreviewAnimationHandler(){
    gamePreviewing = true;
    setTimeout(function() {
        let lastInSequence = sequence[sequence.length - 1];
        ButtonAnimationHandler(lastInSequence, 
            function() { 
                gamePreviewing = false; 
                console.log("gamePreviewing = false");
            });
        SoundHandler($(".btn")[lastInSequence].id);
    }, 500);
}

function ButtonAnimationHandler(input, callback = function() {}){
    let btn = $(".btn")[input];
    btn.classList.add("pressed");
    setTimeout(function() {
        btn.classList.remove("pressed");
        callback();
    }, 100)
}

function GameOverAnimationHandler(){
    $(".container").classList.add("game-over");
    setTimeout(function() {
        $(".container").classList.remove("game-over");
    }, 500)
}

function SoundHandler(index){
    let pth = "./sounds/" + index + ".mp3";
    if(index === "wrong") {
        pth = "./sounds/wrong.mp3";
    }

    let audio = new Audio(pth);
    audio.play();
}

function CheckPlayerInputs(input, noOfClick){
    let id = noOfClick - 1;
    // console.log("input is : " + input + " sequence : " + sequence[id]);
    // console.log("input is : " + typeof(input) + " sequence : " + typeof(sequence[id]));
    return input === sequence[id];
}

function IsCompleteSequence(){
    return noOfClick === sequence.length;
}

function ResetNoOfClick(){
    noOfClick = 0;
}