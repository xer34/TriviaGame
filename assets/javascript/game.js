

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

//contructor for questions

function questions(text, choice, answer) {
	// this text for question text
	this.text = text;
	// this choice
	this.choice = choice;
	// this answer
	this.answer = answer; 
}

// adds correct answer function to question function above, and checks to see if answer is === to choice
questions.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}

// constructor for trivia 

function trivia(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionNumber = 0;
}

// adds current question number function to constructor above

trivia.prototype.getQuestionNumber = function () {
	return this.questions[this.questionNumber]
}

// game stops running if the question number is equal to the length of the number of questions
trivia.prototype.gameRunning = function () {
	return this.questions.length === this.questionNumber;
}

//adds guess event to the constructor
trivia.prototype.guess = function (answer) {
	// when a guess happens, increases the current question number by one
	this.questionNumber++;
	// if the correct answer of this question number, increase score by one
	if (this.getQuestionNumber().correctAnswer(answer) {
	    this.score++;
	}
}
	    
	    //array of questions, calling the constructor function "questions" creating the new object "question" with "new"
var questions = [
	new question("What were Chihuahua dogs originally bred for?", ["Meat", "Hunting", "Fishing", "Law Enforcement"], "A"),
	new question("In Tennessee it is illegal to drive if you are what?", ["Asleep", "Bored", "Excited", "Jealous"], "A"),
	new question("If you are wearing a Swimsuit in Florida in public, what is illegal for you to do?", ["Dance", "Run", "Sing", "Party"), "C",
	new question("In Salem Oregon its illegal for women to do what?", ["Read", "Tickle", "Wrestle", "Swim"], "C"),
	new question("In Lexington Kentucky what can't you carry in your pocket?", ["Lint", "Bears", "Pickles", "Ice Cream"], "D",
	new question("Millicent Roberts is the middle and last name of what iconic children’s toy?", ["Barbie", "Mr. Potato Head", "GI Joe", "Furby"], "A"),
	new question("What do you hammer a nail with?", ["A Hammer", "A Nail", "A wrench", "Your face"], "B")
	new question("Who is the true ruler of all mankind?", ["Vigo the Carpathian", "The Emperor himself", "Lex Luthor", "J.Jonah Jameson"], "B",),
	new question("It is the 41st Millenium. How are things looking?", ["Pretty good!", "Pretty bad!", "Grim and Dark", "Sunshine and rainbows!"], "C"),
	new question("If a tree falls in the woods and no one is around to hear it, does it make a sound?", ["Yes, duh", "No, sound doesn't travel that way", "Only if it smells", "There's a lot of questions on here"], "D")
];

// function to fill in the text with the question array

fillQuestions() {
	if (triva.gameRunning()) {
		//showScores();
	} else {
		var element = $("#question");
		element.innerHTML = trivia.getQuestionNumber().text;
	}
		
		
	
var trivia = new trivia(questions);
	
fillQuestions();
		
	  




