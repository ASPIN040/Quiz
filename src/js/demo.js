// Quizzy
// let fragen = [];
// var punkte = 0;
// var runden = 0;
// var gesperrt = true;
// var richtigeAntwort;

// definiereDieFragen();
// const startQuizBtn = document.getElementById("start_quiz");
//
// function starteNeueRunde() {
//
// 	if (runden < 5) {
// 		gesperrt = false;
// 		runden++;
// 		dieFrage = fragen.shift();
// 		var frageAufbereitet = dieFrage.split("#");
// 		document.getElementById("Frage").innerHTML = frageAufbereitet[0];
// 		document.getElementById("Antworten").innerHTML = frageAufbereitet[1];
// 		richtigeAntwort = frageAufbereitet[2];
// 		// setTimeout(starteNeueRunde, 8000);
// 	} else {
// 		alert("Das Spiel ist zu Ende. Du hast " + punkte + " Punkte geholt");
// 	}
// }

// startQuizBtn.addEventListener("click", starteNeueRunde);

// function definiereDieFragen() {
// 	fragen[0] = "AFA ist die Abkürzung für ?#1 Angewandte für Anlagen 2) Absetzung für Abnutzung 3) Albanische Führsorge Allgemein#2";
// 	fragen[1] = "Wieviele Abschreibungen haben wir besprochen?#1) 1 2) 5 3) 3#3";
// 	fragen[2] = "Welche dieser Begriffe sollten Ziele eines Unternehmens sein!?#1) Intimsteigerung 2)Konkurenzvernachlässigung 3)Innovationsteigerung#3";
// 	fragen[3] = "Wieviele Stufen hat die Bedürfnisspyramide nach Maslow?#1) 3 2) 5 3) 7#2";
// 	fragen[4] = "Was erfand Maslow?#1) Das Rad 2) Das Bedürniss 3) Die Bedürfniss Pyramide#3";
// 	fragen[5] = "Was wird mit der Formel - Gewinn * 100 / Eigenkapital berechnet?#1) Gesamtkapitalleistung 2) Produktivität 3) Eigenkapitalrentabilität#3";
// 	fragen[6] = "Was sind die 3 Produktionsfaktoren?#1) Arbeit/Boden/Kapital 2) Arbeit/Kapital/Kredit 3) Arbeit/Leistung/Kapital#1";
// 	fragen[7] = "Die Wirtschaftlichkeit berechnet sich wie?#1) Kosten/Leistung 2) Kosten/Leistung*100 3)Leistung/Kosten#3";
// 	fragen[8] = "Welchen Vorteil hat die degressive AfA?#1) Aufwand schmälert Gewinn/wenigerGewinn=wenigerSteuer 2)steigert den Gewinn 3) Kommt drauf an#1";
// 	fragen[9] = "Die BRD hat welche Wirtschaftsform?#1)Sozialismus 2) Kapitalismus 3) SozialistischeMarktwirtschaft#3";
// 	for (var i = 1; i < 9; i++) {
// 		fragen.sort(function (a, b) {
// 			return Math.random() - 0.9;
// 		});
// 	}
// }


// function tippeButton(gewaehlterButton) {
// 	console.log(gewaehlterButton.target)
// 	if (gesperrt) {
// 		return
// 	}
// 	gesperrt = true;
// 	gewaehlterButton.target.style.boxShadow = "10px 10px 20px grey inset";
// 	if (gewaehlterButton.target.getAttribute("id") === richtigeAntwort) {
// 		punkte++;
// 	} else {
// 		gewaehlterButton.target.style.background = "#FF0000";
// 	}
// }

// Get quiz data
let quizData = require('../assets/questions.json');
// Get elements in #answers
let answers = document.getElementById("answers");
// Define start button
let startQuizBtn = document.getElementById("start_quiz");

const prepareQuiz = () => {

	let maxQuestions = Object.keys(quizData).length;
	let current = Math.floor(Math.random() * maxQuestions);
	let currentQuestion = quizData[current].question;
	let allAnswers = quizData[current].answers;
	let answerHolder = document.getElementById("Antworten");
	let questionHolder = document.getElementById("Frage");

	questionHolder.innerHTML = '';
	questionHolder.innerHTML = currentQuestion;

	answerHolder.innerHTML = '';
	Object.entries(allAnswers).forEach(entry => {
		const [key, value] = entry;
		answerHolder.innerHTML += '<p>' + value + '</p>';
	});

}

startQuizBtn.addEventListener('click', prepareQuiz)

// Fire, if element clicked
const answerButton = (clickedElem) => {
	let chosenAnswer = clickedElem.target.getAttribute('id');
	// console.log(chosenAnswer)
}
// Listen on click
answers.addEventListener('click', answerButton)


// console.log(questionsFile)
