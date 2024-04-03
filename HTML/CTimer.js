var timerContainer = document.querySelector(".timer-container");
var timerInput = document.querySelector(".timer-input");
var startBtn = document.querySelector(".start-timer");

startBtn.addEventListener("click", () => {
    var timerInMin = timerInput.value - 1;
    var timerInSec = timerInput.value * 60;
    var totalSec = timerInSec;
    var timelapsed = 0;
    var myInterval = setInterval(() => {
        timelapsed++;
        timerInSec--;
        if (timelapsed % 60 == 0 && timerInMin > 0) {
            timerInMin--;
        }
        timerContainer.textContent = timerInMin + " : " + (timerInSec % 60)
        if (timelapsed == totalSec) {
            clearInterval(myInterval);
            // alert("Countdown Timer Stopped!")
        }
    }, 1000)
})