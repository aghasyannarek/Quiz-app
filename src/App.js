import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect === true){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
     setShowScore(true);
    }
    
  }
  return (
    <div className="App">
        <div className="container">
          <h1>Quiz App</h1>
          { showScore ? (
            <div className="score-section">You scored {score} out of {questions.length}</div>
          ):(
            <>
              <div className="section">
              <div className="question-section">
                <p><span>Question {currentQuestion + 1}</span>/{questions.length}</p>
                <div className="question-text">
                  <p>{questions[currentQuestion].questionText}</p>
                </div>
              </div>
              <div className="answer-section">
                {
                  questions[currentQuestion].answerOptions.map((answerOption) => {
                    return <button onClick={()=> {handleAnswerButtonClick(answerOption.isCorrect)}} className='btn'>{answerOption.answerText}</button>
                  })
                }
              </div>
            </div>
            </>
          )}
        </div>
    </div>
  );
}

export default App;
