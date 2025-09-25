import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    { q: "Capital of Nepal?", a: "Kathmandu" },
    { q: "2 + 2?", a: "4" },
    { q: "React hook for state?", a: "useState" },
  ];
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);

  const handleSubmit = () => {
    if (answer === questions[index].a) {
      setScore(score + 1);
    }

    setAnswer("");

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinish(true);
    }
  };

  return (
    <>
      {!finish ? (
        <div>
          <h2>{questions[index].q}</h2>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={handleSubmit}>Next</button>
        </div>
      ) : (
        <h2>
          Final Score: {score}/{questions.length}
        </h2>
      )}
    </>
  );
};

export default Quiz;
