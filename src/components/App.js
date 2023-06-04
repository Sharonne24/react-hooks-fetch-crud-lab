import React, { useState, useEffect } from "react";
//import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const handleQuestionSubmit = (newQuestion) => {
    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
      .then(response => response.json())
      .then(data => setQuestions(prevQuestions => [...prevQuestions, data]));
  };

  const handleDeleteQuestion = (id) => {
    // Update state by filtering out the question with the specified id
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );

    // Send DELETE request to server to delete the question
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
      });
  };

  const handleChangeCorrectAnswer = (questionId, updatedCorrectIndex) => {
    // Update state by finding the question with the specified id and updating its correctIndex
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, correctIndex: updatedCorrectIndex }
          : question
      )
    );

    // Send PATCH request to server to update the question's correctIndex
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: updatedCorrectIndex,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
      });
  };

  return (

      <div>
        <QuestionForm onQuestionSubmit={handleQuestionSubmit} />
        <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onChangeCorrectAnswer={handleChangeCorrectAnswer} />
      </div>
    );
  //   <main>
  //     <AdminNavBar onChangePage={setPage} />
  //     {page === "Form" ? <QuestionForm /> : <QuestionList />}
  //   </main>
  // );
}

export default App;
