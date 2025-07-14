import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import "./index.css";

export default function QuizApp() {
  return (
    <div id="quiz-app">
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}
