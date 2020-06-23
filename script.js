var timeLeft = document.querySelector(".timer");
var startGame = document.querySelector(".button");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");


Questions = [{Q: "Which Minecraft pickaxe has the most uses?", 
    A:{a:"Wood Pickaxe", b: "Iron Pickaxe", c:"Stone Pickaxe" , d:"Gold Pickaxe"},
    Q:"Who is Tom Nook?",
    A:{a:"An elephant known for grand larceny",b:"A raccoon with unknown intentions", c:"A skinny man", d:"An uncle who hates animals"},
    Q:"Who said the following 'The Hobbits are going to Isengard?'",
    A:{a:"Wood Pickaxe", b: "Gollum", c:"Legolas", d:"Frodo Baggins"}
    }]
seconds = 100;
function timer() {
    var timerInterval = setInterval(function(){
        seconds--;
        timeLeft.textContent = "Time Left: " + seconds;
    if (seconds === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
    }
    },1000);
}

function buildQuiz(){

}

startGame.addEventListener("click",function() {
    timer();
    startGame.style.visibility = "hidden";
})
