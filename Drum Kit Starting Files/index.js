let drumList = document.querySelectorAll(".set .drum");

for (i=0; i<drumList.length; i++){
    drumList[i].addEventListener("click", function() {
        let keyInput = this.innerHTML;
        HandleSound(keyInput);
        HandelAnimation(keyInput);
    });
}

document.addEventListener("keypress", function(e) {
    HandleSound(e.key);
    HandelAnimation(e.key);
})

function HandleSound(keyInput) {
    let audio = new Audio("./sounds/crash.mp3");

    switch (keyInput){
        case "w":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log(btn)
    }
    
}

function HandelAnimation(keyInput){
    let activeButton = document.querySelector("." + keyInput);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100)
}


