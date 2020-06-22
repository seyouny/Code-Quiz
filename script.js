var timeLeft = document.querySelector(".timer");
function timer() {
    var timerInterval = setInterval(function(){
        seconds--;
        timeLeft.textContent = "Time Left: " + seconds;

    },1000)

}
timer();