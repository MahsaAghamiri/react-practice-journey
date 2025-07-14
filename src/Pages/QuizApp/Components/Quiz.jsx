import { useState } from "react";
import Questions from "../questions.js";
import quizCompleteImg from "../Assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === Questions.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }

  function renderAnswers() {
    const shuffledAnswer = [...Questions[activeQuestionIndex].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5);

    return shuffledAnswer.map((answer) => (
      <li key={answer} className="answer">
        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
      </li>
    ));
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz is complete" />
        <h2>Quiz Completed! </h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">{renderAnswers()}</ul>
      </div>
    </div>
  );
}
