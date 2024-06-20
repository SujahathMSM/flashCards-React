import React, { useState } from "react";
import "./styles.css";
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
const App = () => {
  return (
    <div className="app">
      <Logo />
      <FlashCards />
      <Footer/>
    </div>
  );
};

function Logo() {
  return <h1> 🗃️ Flash Cards</h1>;
}

function FlashCards() {
  const [selectedID, setSelectedID] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((ques) => (
        <div key={ques.id} className={ques.id === selectedID ? "selected":""} onClick={() => setSelectedID(ques.id === selectedID ? null: ques.id)}>
          <p>
            {ques.id === selectedID ? ques.answer: ques.question}
          </p>
        </div>
      ))}
    </div>
  );
}

function Footer(){
  return <div className="footer">
    Developed by Sujahath &copy; 2024
  </div>
}

export default App;
