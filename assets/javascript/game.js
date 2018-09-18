// // timer ~---------------------~~~
function startTimer(duration, timeLeft) {
    var timer = duration;
    var seconds = seconds;
    var interval = setInterval(function () {
        seconds = timer;
        timeLeft.text(" " + seconds);
				--timer;
            if (timer < 0) {
            clearInterval(interval);
			alert("Time is Up!");
		}
    }, 1000);
}

// jquery function to plug 15 seconds into the timer and write it to the DOM

$("#playButton").click(function() {
    var thirtySeconds = 30;
    var timeLeft = $('#timer');
    startTimer(thirtySeconds, timeLeft);
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//array of questions, calling the constructor function "questions" creating the new object "question" with "new"
var questions = [{
	"question":"What should you be doing right now?",
	"optionA":"Cooking",
	"optionB":"Cleaning",
	"optionC":"Coding",
	"optionD":"Knife Fighting",
	"answer":"C",
}, {
	"question":"Brannigans Law is like Brannigans Love. ___ and ___",
	"optionA":"Hard, Fast",
	"optionB":"Sweaty, Ready",
	"optionC":"Once, Done",
	"optionD":"This, That",
	"answer":"A",
}, {
	"question":"In the movie, Avengers: Infinity War, what does Spider-Man say to Tony Stark at the end?",
	"optionA":"I don't feel so good Mr. Stark",
	"optionB":"I don't feel so Stark Mr. Good",
	"optionC":"I don't Stark so good Mr. Feel",
	"optionD":"I good so Feel Mr. Don't",
	"answer":"A",
}, {
	"question":"Who is the one true ruler of all mankind?",
	"optionA":"The Emperor of Mankind",
	"optionB":"The President of the Universe",
	"optionC":"Bhamophet",
	"optionD":"Ding Dong Monkey Butt",
	"answer":"A",
}, {
	"question":"What is the other primary language spoken in the show 'Firefly'?",
	"optionA":"Mandarin",
	"optionB":"Japanese",
	"optionC":"German",
	"optionD":"Binary",
	"answer":"A",
}, {
	"question":"How much RAM did Bill Gates say 'more than you'd ever need!?",
	"optionA":"8GB",
	"optionB":"16GB",
	"optionC":"512k",
	"optionD":"640k",
	"answer":"D",
}, {
	"question":"Is the correct answer D?",
	"optionA":"Yes.",
	"optionB":"Yes?",
	"optionC":"Maybe?",
	"optionD":"No",
	"answer":"D",
}, {
	"question":"When coding, which practice is best for overall self care?",
	"optionA":"Showering",
	"optionB":"Multiple applications of caffiene daily",
	"optionC":"Heavy Drinking",
	"optionD":"Banjo Therapy",
	"answer":"B",
}, {
	"question":"Star Wars was recently just bought out by which major corporation?",
	"optionA":"ComcastNBC Universal",
	"optionB":"ABC",
	"optionC":"Disney",
	"optionD":"Spectrum",
	"answer":"C",
}, {
	"question":"In Futurama, what year does Fry get frozen?",
	"optionA":"1999",
	"optionB":"2004",
	"optionC":"3004",
	"optionD":"M41.334",
	"answer":"A",
}, {
	"question":"If a tree falls in the woods, does it make a sound?",
	"optionA":"Yes, duh",
	"optionB":"Only if it smells right",
	"optionC":"In winter, occasionally",
	"optionD":"No, sound doesn't travel that way",
	"answer":"B",
}, ]
// ~~~~~~~~~~~~~~~~~~~~~

//variables 
var currentQuestion = 0, // loads at questions index, starts at 0
	score = 0, // 10 questions, will be divisible by 10
	container = document.getElementById("triviaContainer"),
	questionElement = document.getElementById("question"),
	optA = document.getElementById("optA"),
	optB = document.getElementById("optB"),
	optC = document.getElementById("optC"),
	optD = document.getElementById("optD"),
	totalQuestions = questions.length,
	nextButton = document.getElementById("nextButton"),
	resultContainer = document.getElementById("result")
	

//game logic

function nextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption) {
		alert("Please select an answer");
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer) { // check answer
		score += 10; //adds 10 to score
	}
	selectedOption.checked = false; // unchecks radio button
	currentQuestion++; // moves to next question in array

	if(currentQuestion == totalQuestions -1) {
		nextButton.textContent = "Finshed!";
	}

	if(currentQuestion == totalQuestions) {
		container.style.display = "none";
		resultContainer.style.display = "none";
		resultContainer.textContent = "Your Score:" + score;
		return;
	}
	loadQuestion(currentQuestion);
}
$("#playButton").click(loadQuestion(currentQuestion))

function loadQuestion(questionIndex) {
	var i = questions[questionIndex];
	questionElement.textContent = [questionIndex + 1] + ". " + i.question;
	optA.textContent = i.optionA;
	optB.textContent = i.optionB;
	optC.textContent = i.optionC;
	optD.textContent = i.optionD;
}
//music, seriously dont comment this back in until you're done
// function play(){
// 	var audio = document.getElementById("audio");
// 	var correctAudio = document.getElementById("correctAudio")
// 	var wrongAudio = document.getElementById("wrongAudio")
// 	audio.play();
// 	return;
// }