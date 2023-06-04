import React from "react";

function QuestionItem({ question, onDeleteQuestion, onChangeCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleCorrectAnswerChange = (event) => {
    const updatedCorrectIndex = parseInt(event.target.value);
    onChangeCorrectAnswer(id, updatedCorrectIndex);
  };

  const handleDelete = () => {
    onDeleteQuestion(id);
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleCorrectAnswerChange}></select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
