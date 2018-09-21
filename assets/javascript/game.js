newGame();

//array of questions, calling the constructor function "questions" creating the new object "question" with "new"
var questions = [{
	"question":"What should you be doing right now?",
	"optionA":"A. Cooking",
	"optionB":"B. Cleaning",
	"optionC":"C. Coding",
	"optionD":"D. Knife Fighting",
	"answer":"C",
}, {
	"question":"Brannigans Law is like Brannigans Love. ___ and ___",
	"optionA":"A. Hard, Fast",
	"optionB":"B. Sweaty, Ready",
	"optionC":"C. Once, Done",
	"optionD":"D. This, That",
	"answer":"A",
}, {
	"question":"In the movie, Avengers: Infinity War, what does Spider-Man say to Tony Stark at the end?",
	"optionA":"A. I don't feel so good Mr. Stark",
	"optionB":"B. I don't feel so Stark Mr. Good",
	"optionC":"C.I don't Stark so good Mr. Feel",
	"optionD":"D.I good so Feel Mr. Don't",
	"answer":"A",
}, {
	"question":"Who is the one true ruler of all mankind?",
	"optionA":"A. The Emperor of Mankind",
	"optionB":"B. The President of the Universe",
	"optionC":"C. Bhamophet",
	"optionD":"D. Ding Dong Monkey Butt",
	"answer":"A",
}, {
	"question":"What is the other primary language spoken in the show 'Firefly'?",
	"optionA":"A. Mandarin",
	"optionB":"B. Japanese",
	"optionC":"C. German",
	"optionD":"D. Binary",
	"answer":"A",
}, {
	"question":"How much RAM did Bill Gates say 'more than you'd ever need!?",
	"optionA":"A. 8GB",
	"optionB":"B. 16GB",
	"optionC":"C. 512k",
	"optionD":"D. 640k",
	"answer":"D",
}, {
	"question":"Is the correct answer D?",
	"optionA":"A. Yes.",
	"optionB":"B. Yes?",
	"optionC":"C. Maybe?",
	"optionD":"D. No",
	"answer":"D",
}, {
	"question":"When coding, which practice is best for overall self care?",
	"optionA":"A. Showering",
	"optionB":"B. Multiple applications of caffiene daily",
	"optionC":"C. Heavy Drinking",
	"optionD":"D. Banjo Therapy",
	"answer":"B",
},  {
	"question":"In Futurama, what year does Fry get frozen?",
	"optionA":"A. 1999",
	"optionB":"B. 2004",
	"optionC":"C. 3004",
	"optionD":"D. M41.334",
	"answer":"A",
}, {
	"question":"If a tree falls in the woods, does it make a sound?",
	"optionA":"A. Yes, duh",
	"optionB":"B. Only if it smells right",
	"optionC":"C. In winter, occasionally",
	"optionD":"D. No, sound doesn't travel that way",
	"answer":"B",
}, ]


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
	resultContainer = document.getElementById("result"),
	correctAudio = document.getElementById("audioCorrect"),
	wrongAudio = document.getElementById("audioWrong")
	
	
// new game function
function newGame() {
	$("#triviaContainer").hide(); // hides entire container
	$("#playButton").show()} // shows play button
	$(".play-img").show(); // show logo
	$(".wrongImg").hide();
	$(".notSelected").hide();
	var currentQuestion = 0 // sets current index 
	score = 0 // set score to 0
	
// // timer
function startTimer(duration, timeLeft) {
	var timer = duration,
	seconds = seconds,
	interval = setInterval(function () {
        seconds = timer;
        timeLeft.text(" " + seconds);
				--timer;
            if (timer < 0) {
            clearInterval(interval);
			alert("Time is Up!");
			$("#triviaContainer").hide();	
			audio.pause();
			var selectedOption = document.querySelector('input[type=radio]:checked')
			
			
			if(!selectedOption) {
				
				$("#result").text("You did not select an answer! Reloading question in 5 seconds!");
				wrongAudio.play();
				$("#result").show();
				$(".notSelected").show();
				setTimeout(function() {nextQuestion()}, 5000);
			} 

			var answer = selectedOption.value;
			
			if(questions[currentQuestion].answer === answer) { // check answer
				
			
				$("#result").text("You are correct! Next question in 5 seconds!");
				correctAudio.play(); //Correct! Splash.
				$("#result").show();

			} else {
				
				$("#result").text("You are wrong-a-long-a-ding-dong! The correct answer was " + answer + ". Next question in 5 seconds!");
				wrongAudio.play();
				$("#result").show();
				$(".wrongImg").show();
			}

			setTimeout(function() {nextQuestion()}, 5000);
	
			}
			
    }, 1000);
}

// jquery function to plug 30 seconds into the timer and write it to the DOM
$("#playButton").click(function() {
	
	$(".play-img").hide();
	$("#triviaContainer").show();
	$(this).hide();
	$("#result").hide();
	$(".notSelected").hide();

    var thirtySeconds = 10;
	var timeLeft = $('#timer');
	
	startTimer(thirtySeconds, timeLeft);
	
	});


//game logic

function nextQuestion() {
	$("#triviaContainer").show();
	$("#result").hide();
	$(".wrongImg").hide();
	$(".notSelected").hide();

	audio.play();	
	startTimer(thirtySeconds, timeLeft);

	var thirtySeconds = 10;
    var timeLeft = $('#timer');
	var selectedOption = document.querySelector('input[type=radio]:checked')
	var answer = selectedOption.value;

	if(questions[currentQuestion].answer == answer) { // check answer
		score += 10; //adds 10 to score
	}
	selectedOption.checked = false; // unchecks radio button
	currentQuestion++; // moves to next question in array

	if(currentQuestion === totalQuestions) {
		$("#result").show();
		resultContainer.textContent = "Your Score:" + score;
		newGame();
		startTimer(clearInterval(interval));
		return;		
	}
	loadQuestion(currentQuestion);
	
}
$("#playButton").on("click",
	(loadQuestion(currentQuestion)));


function loadQuestion(questionIndex) {
	var i = questions[questionIndex];
	questionElement.textContent = [questionIndex + 1] + ". " + i.question;
	optA.textContent = i.optionA;
	optB.textContent = i.optionB;
	optC.textContent = i.optionC;
	optD.textContent = i.optionD;
}
//music, seriously dont comment this back in until you're done
function play(){
	var audio = document.getElementById("audio");
	audio.play();
	return;
}
