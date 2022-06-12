import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainButton from "./Components/MainButton";
import Form from "./Components/Form";

function App() {
	const buttonText = "Start the Quizz";
	const formText = "Question";
	const [currentScore, setCurrentScore] = useState(0);

	const questions = [
		{
			id: 1,
			questionText: "My name is...",
			possibleAnswers: [
				{ id: 1, answerText: "Vaiva", isCorrect: true },
				{ id: 2, answerText: "Dalia", isCorrect: false },
				{ id: 3, answerText: "Ina", isCorrect: false },
				{ id: 4, answerText: "Milla", isCorrect: false },
			],
		},
		{
			id: 2,
			questionText: "My favourite colos is...",
			possibleAnswers: [
				{ id: 1, answerText: "blue", isCorrect: false },
				{ id: 2, answerText: "pink", isCorrect: false },
				{ id: 3, answerText: "yellow", isCorrect: true },
				{ id: 4, answerText: "orange", isCorrect: false },
			],
		},

		{
			id: 3,
			questionText: "My dream country is...",
			possibleAnswers: [
				{ id: 1, answerText: "Canada", isCorrect: false },
				{ id: 2, answerText: "USA", isCorrect: false },
				{ id: 3, answerText: "Japan", isCorrect: true },
				{ id: 4, answerText: "Australia", isCorrect: false },
			],
		},

		{
			id: 4,
			questionText: "My favourite type of beer is...",
			possibleAnswers: [
				{ id: 1, answerText: "IPA", isCorrect: true },
				{ id: 2, answerText: "Sour", isCorrect: false },
				{ id: 3, answerText: "Lager", isCorrect: false },
				{ id: 4, answerText: "Stout", isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [guessMade, setGuessMade] = useState(false);

	function nextQuestion() {
		if (currentQuestionIndex + 1 >= questions.length) {
			alert("That is all, people");
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			console.log("new", currentQuestionIndex);
			setCurrentQuestion(questions[currentQuestionIndex + 1]);
		}
		setGuessMade(false);
	}

	function countScore() {
		setCurrentScore(currentScore + 1);
	}

	function chooseAnswer() {
		setGuessMade(true);
	}
	return (
		<div className="App">
			<MainButton text={buttonText}></MainButton>

			<div className={"form-view"}>
				<Form
					text={formText}
					question={currentQuestion}
					countScore={countScore}
					chooseAnswer={chooseAnswer}
					guessMade={guessMade}
				></Form>
			</div>

			<p>Your score is {currentScore} out of 4</p>

			{guessMade ? (
				<MainButton text="Next question" onClick={nextQuestion} />
			) : null}
		</div>
	);
}

export default App;
