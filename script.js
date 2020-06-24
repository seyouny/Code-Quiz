var timeLeft = document.querySelector(".timer");
var startGame = document.querySelector(".button");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var Question = document.querySelector("#Question");
var Options = document.querySelector("#Options");
var clear = document.querySelector("#Clear");
var container = document.querySelector(".container");

Questions = [
    {
    Q: "Which Minecraft pickaxe has the most uses?", 
    O:["Wood Pickaxe", "Iron Pickaxe","Stone Pickaxe" , "Gold Pickaxe"],
    A:"Iron Pickaxe"
    },

    {
    Q:"Who is Tom Nook?",
    O:["An elephant known for grand larceny","A raccoon with unknown intentions", "A skinny man", "An uncle who hates animals"],
    A: "A raccoon with unknown intentions"
    },
    
    {
    Q:"Who said the following 'The Hobbits are going to Isengard?'",
    O:["Wood Pickaxe", "Gollum", "Legolas","Frodo Baggins"],
    A:"Legolas"
    }]


seconds = 100;
newseconds = 100;
var timerLose = 1;

function checkQuestion() {

    if (this.value === Questions[questionCount].A){
        if (Questions.length > questionCount){
            
            questionCount++;
            console.log(questionCount)
            startGame.style.visibility = "hidden";
            buildQuiz();
        }
    }
    else {
        lose = 1;
        alert("wrong answer!");
        }     
}

function timer() {
    var timerInterval = setInterval(function(){
        seconds--;
        newseconds--;
        timeLeft.textContent = "Time Left: " + newseconds;
    if (seconds === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
    }
    
    loseTime();
    
    function loseTime(lose){
        if (lose === 1){
            console.log(newseconds)
            newseconds = seconds-20;
            lose = 0;
            return newseconds;
        }
        else{
            return newseconds;
        }
        
    }
    },1000);
}
var questionCount = 0;
function buildQuiz(){
    if (questionCount < Questions.length){
    container.innerHTML = "";
    Question.textContent = Questions[questionCount].Q;
   // Options.textContent = Questions[questionCount].O;
    Questions[questionCount].O.forEach(element => {
        var button = document.createElement("button");

        button.setAttribute("value",element);
        button.innerHTML = element;
        button.onclick = checkQuestion;
        container.appendChild(button);
    });
    }
    else{
        window.location.href = "hs.html";
    }
}

startGame.addEventListener("click",function() {
    timer();
    startGame.style.visibility = "hidden";
    clear.style.visibility = "hidden";
    buildQuiz();
    //questionCount++;
})


