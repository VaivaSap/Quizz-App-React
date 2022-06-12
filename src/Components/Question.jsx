import React from "react";
import Question from "./Question.css";

function Question(props) {
	return (
		<div className="question-view">
			<h1>{props.question}</h1>
		</div>
	);
}

export default Question;


