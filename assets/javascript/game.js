

// timer
function startTimer(duration, timeLeft) {
    var timer = duration;
    var seconds = seconds;
    var interval = setInterval(function () {
        seconds = timer;
        timeLeft.text(" " + seconds);
				--timer;
            if (timer < 0) {
            clearInterval(interval)
            alert("Time is Up!");
        }
    }, 1000);
}

// jquery function to plug 15 seconds into the timer and write it to the DOM

$(function() {
    var fifteenSeconds = 15;
    var timeLeft = $('#timer');
    startTimer(fifteenSeconds, timeLeft);
});

//variables

// keep score of incorrectly guessed questions

//keep score of correctly guessed questions

// correct answer variable

// answer array

// loop to create four selectable answers that pull from answer array

// when timer runs out check to see if correct answer is picked, display apprpriate page, restart timer and go to next page

// if selected answer === correct answer, display win page

// if selected answer != correct answer, display loss page

// if either question is selected, create a new page, pull from a new array, repeat 10 times

// at the end display totals for incorrect and correct losses, percentage of correctly guessed








