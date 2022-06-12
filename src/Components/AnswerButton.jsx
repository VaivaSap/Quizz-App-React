import React, { useState, useEffect } from "react";
import "./AnswerButton.css";

const AnswerButton = (props) => {
	const [classList, setClassList] = useState("answer-button");
	function makeGuess() {
		if (props.isCorrect) {
			setClassList("answer-button new-answer-button");
			props.countScore();
		}
		if (!props.isCorrect) {
			setClassList("answer-button new-wrong-answer-button");
		}
		console.log(props.isCorrect);

		props.chooseAnswer();
	}

	useEffect(() => {
		setClassList("answer-button");
	}, [props.id]);

	return (
		<button
			className={classList}
			onClick={makeGuess}
			disabled={props.guessMade}
		>
			{props.text}
		</button>
	);
};

export default AnswerButton;
