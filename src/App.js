import React, { Suspense, useEffect, useState } from "react";
import { react_data } from "./react-data";
import { node_data } from "./node-data";
import "./App.css";
import Quiz from "./Quiz";

function App() {
  const [topic, setTopic] = useState(false);
  const [question_data, setQuestionData] = useState([]);

  useEffect(() => {

    switch(topic){
      case "React":
        setQuestionData(react_data);
        return;
      case "Node":
        setQuestionData(node_data);
        return;
      default:
        setQuestionData([]);
    }

  }, [topic])

  return (
    <div className="App">
      {topic ? (
        <>
          <Quiz question_data={question_data}/>
        </>
      ) : (
        <Suspense>
          <h1>Choose the topic</h1>
          <button className="btn" onClick={() => setTopic("React")}>
            React
          </button>
          <button className="btn" onClick={() => setTopic("Node")}>
            Node
          </button>
        </Suspense>
      )}
    </div>
  );
}

export default App;
