import Header from "./Components/Header";
import "./index.css";
import UserInput from "./Components/UserInput";
import { useState } from "react";
import Results from "./Components/Results";

export default function InvestmentCalculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div id="investment-calculator">
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputValid && (
        <p className="center">Please Enter a duration hreater than zero</p>
      )}
      {inputValid && <Results input={userInput} />}
    </div>
  );
}
