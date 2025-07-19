import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswer = useRef();

  function renderAnswers() {
    if (!shuffledAnswer.current) {
      shuffledAnswer.current = [...answers];
      shuffledAnswer.current.sort(() => Math.random() - 0.5);
    }

    return shuffledAnswer.current.map((answer) => {
      const isSelected = selectedAnswer === answer;
      let cssClass = "";

      if (answerState === "answered" && isSelected) {
        cssClass = "selected";
      }

      if (
        (answerState === "correct" || answerState === "wrong") &&
        isSelected
      ) {
        cssClass = answerState;
      }

      return (
        <li key={answer} className="answer">
          <button onClick={() => onSelect(answer)} className={cssClass}>
            {answer}
          </button>
        </li>
      );
    });
  }
  return <ul id="answers">{renderAnswers()}</ul>;
}
