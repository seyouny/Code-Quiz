var timeLeft = document.querySelector(".timer");
var startGame = document.querySelector(".button");
var correct = document.querySelector(".correct");
var wrong = document.querySelector("#Wrong");
var Question = document.querySelector("#Question");
var Options = document.querySelector("#Options");
var clear = document.querySelector("#Clear");
var container = document.querySelector(".container");
var form = document.querySelector("#form");
var submit = document.querySelector("#sub");
var Names = document.querySelector("#Names");
var names = document.querySelector("#name");
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

var nameList = [];
var score = 0;
seconds = 30;
newseconds = 30;

lose = 0;
function checkQuestion() {

    if (this.value === Questions[questionCount].A){
        if (Questions.length > questionCount){
            wrong.textContent = '';
            questionCount++;
            console.log(questionCount)
            startGame.style.visibility = "hidden";
            score++;
            buildQuiz();
        }
    }
    else {
        lose = 1;
        loseTime(lose);
        setTimeout(function(){wrong.textContent = "Incorrect!"},1000);

        }     
}
function timer() {
    var timerInterval = setInterval(function(){
    seconds--;
    newseconds--;
    timeLeft.textContent = "Time Left: " + seconds;
    if (seconds === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
        highscore();
    }

    },1000);
}
    
    function loseTime(lose){
        if (lose === 1){
            alert(lose)
            console.log(newseconds)
            seconds = seconds-10;
            lose = 0;

            return seconds;
        }
        else{
            return seconds;
        }
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
        // window.location.href = "hs.html";
        highscore();
    }
}


function highscore(){
    Question.textContent = "High Scores"
    container.innerHTML = '';
   form.style.visibility = "visible";
    var strings = names.value + " With the highest score of: " + score;
   submit.addEventListener("click",function(){
    Names.textContent = strings;
       Names.innerHTML(strings);
    Names.append(strings);
    newseconds=0;
   })
//    $("#sub").submit(function(){
//        console.log($("#name").val());
        // $("#Names").text($("#name").val());
//    }
//    <h3 style= "text-align: center;" id= "Names"></h3>

//    <form id= "form"> 
//         <input type="text" name="name" id="name"> 
//         <br><input type="submit" value="Submit" id= "sub"> 
//         </form>
   
    // container.innerHTML = '';
    // Question.textContent = "High Scores"
    // inputTag.style.visibility = "visible";
    // var name = inputTag.value;
    // var submit = document.createElement("button");
    // submit.setAttribute("type","submit");
    // submit.textContent = "Submit";
    // nameInput.appendChild(submit);
    // submit.addEventListener("click",function(){
    //     alert("hey!")

    // })


}

startGame.addEventListener("click",function() {
    timer();
    startGame.style.visibility = "hidden";
    clear.style.visibility = "hidden";
    buildQuiz();
    
    //questionCount++;
})


