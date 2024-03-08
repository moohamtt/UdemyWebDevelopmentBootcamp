let drumList = document.querySelectorAll(".set .drum");

for (i=0; i<drumList.length; i++){
    drumList[i].addEventListener("click", HandleClick);
}

function HandleClick() {
    let btn = this.innerHTML;
    let audio = new Audio("./sounds/crash.mp3");
    switch (btn){
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

