import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOption, answer, hide, index }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  const letter = String.fromCharCode(97 + index);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <p>{letter}) {option}</p>
    </div>
  );
};

export default Option;
