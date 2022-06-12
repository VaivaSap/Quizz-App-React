import React from "react";
import "./Form.css";
import AnswerButton from "./AnswerButton";

function Form(props) {
	return (
		<div className="form-view">
			<>
				<h1>{props.question.questionText}</h1>

				<div className="buttons">
					{props.question.possibleAnswers.map((answer) => (
						<AnswerButton
							id={props.question.id}
							key={answer.id}
							text={answer.answerText}
							isCorrect={answer.isCorrect}
							countScore={props.countScore}
							chooseAnswer={props.chooseAnswer}
							guessMade={props.guessMade}
						></AnswerButton>
					))}
				</div>
			</>
		</div>
	);
}

export default Form;
