let startTime = null;

let attempts = 0;

let times = [];

let timer;


const gameBox = document.getElementById("gameBox");

const message = document.getElementById("message");

const startBtn = document.getElementById("startBtn");


startBtn.addEventListener("click", startGame);


function startGame() {

    clearTimeout(timer);

    startTime = null;

    message.innerText = "WAIT...";

    startBtn.style.display = "none";

    gameBox.style.background = "#26385f";


    let randomTime = Math.floor(Math.random() * 3000) + 2000;


    timer = setTimeout(function () {

        message.innerText = "CLICK NOW!";

        gameBox.style.background = "#45c77a";

        startTime = Date.now();

    }, randomTime);

}


gameBox.addEventListener("click", function () {

    if (startTime === null) {
        return;
    }


    let endTime = Date.now();

    let reactionTime = endTime - startTime;


    times.push(reactionTime);

    attempts++;


    let bestTime = Math.min(...times);


    let totalTime = times.reduce(function (sum, time) {

        return sum + time;

    }, 0);


    let averageTime = Math.round(totalTime / times.length);


    message.innerText =
        "Your Reaction Time: " + reactionTime + " ms";


    document.getElementById("best").innerText =
        bestTime + " ms";


    document.getElementById("average").innerText =
        averageTime + " ms";


    document.getElementById("attempts").innerText =
        attempts;


    startBtn.innerText = "TRY AGAIN";

    startBtn.style.display = "block";


    gameBox.style.background = "#26385f";


    startTime = null;

});
