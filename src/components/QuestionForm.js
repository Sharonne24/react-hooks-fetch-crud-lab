import React, {useState} from "react";


function QuestionForm({ onQuestionSubmit }) {
  const [prompt, setPrompt] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = {
      prompt,
      answers,
      correctIndex
    };
    onQuestionSubmit(newQuestion);
    // Reset the form after submission if desired
    setPrompt('');
    setAnswers(['', '', '', '']);
    setCorrectIndex(0);
  };

  // Rest of the component code

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            value={answers[0]}
            onChange={(event) => {
              const newAnswers = [...answers];
              newAnswers[0] = event.target.value;
              setAnswers(newAnswers);
            }}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            value={answers[1]}
            onChange={(event) => {
              const newAnswers = [...answers];
              newAnswers[1] = event.target.value;
              setAnswers(newAnswers);
            }}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            value={answers[2]}
            onChange={(event) => {
              const newAnswers = [...answers];
              newAnswers[2] = event.target.value;
              setAnswers(newAnswers);
            }}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            value={answers[3]}
            onChange={(event) => {
              const newAnswers = [...answers];
              newAnswers[3] = event.target.value;
              setAnswers(newAnswers);
            }}
          />
        </label>
        <label>
          Correct Answer:
          <select
            value={correctIndex}
            onChange={(event) => setCorrectIndex(Number(event.target.value))}
          >
            {answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
