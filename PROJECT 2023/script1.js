let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaring variable for score
let interval = null;
let playerScore = 0;
//music to be played
 Audio =new Audio("BGM.mp3");
 Audio.play()
 let ins=setInterval(() => {
     Audio.play()

 });
// var myAudio = document.createElement('audio');
// myAudio.setAttribute('BGM.mp3');
// myAudio.play()
// myAudio.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);

//function for score
 let scoreCounter = () => {
     playerScore++;
     score.innerHTML = `Score <b>${playerScore}</b>`;
}


var images = [
    "md.jpg",
    "ct.jpg",
    "mk.jpg"
  ]
  
  var imageHead = document.getElementById("image-head");
  var i = 0;
  
  setInterval(function() {
        imageHead.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
  }, 30000);









//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
       
        road.style.animation = "roadAnimate 3s linear infinite";
        cloud.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});




//getComputedStyle

//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    //    console.log("dinoBottom" + dinoBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game Over");



        


        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.style.animation = "";
        cloud.style.animation = "";
        clearInterval(interval);
        playerScore = 0;
        Audio.pause();
        clearInterval(ins);
    }
},10);

