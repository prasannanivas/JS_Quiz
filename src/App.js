import React, { useEffect, useState, useLayoutEffect } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { react_data } from "./react-data.js";
import "./App.css";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({});
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    if(questionIndex <= react_data.length){
      setQuestion(react_data[questionIndex]);
    }
  
    setHasSelected(false);
  }, [questionIndex]);

  const handleAnswer = (option) => {
    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
    setHasSelected(true);
    // setTimeout(() => setQuestionIndex((prev) => prev + 1), 5000);
  };

  
  return (
    <div className="App">

      <h1> Score: {score} / {react_data.length}</h1>
      {question && (
        <>
          <h2>{question.question}</h2>
          {question.code && (
            <SyntaxHighlighter language="jsx" style={docco}>
              {question.code}
            </SyntaxHighlighter>
          )}
          <div className="options">
            {question?.options?.map((option, index) => (
              <button 
              className={`btn  ${hasSelected ? question.answer === option ? "btn-right": "btn-wrong": ""}`}
                key={index}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {hasSelected && <h3> Explanation: {question.explanation} </h3>}

          {hasSelected && <button className="btn btn-next" onClick={() => setQuestionIndex(prev => prev+1)}>Next</button> }

        </>
      )}
    </div>
  );
}

export default App;
