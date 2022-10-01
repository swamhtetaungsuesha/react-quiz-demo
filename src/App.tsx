import React, { useState } from "react";
import { QuestionCard } from "./components/QuestionCard/QuestionCard";
import {fetchQuiz, Question,Quiz} from './Api'
import {GlobalStyled, Wrapper} from './App.styles'


function App() {
  const [question,setQuestion]=useState({} as Question)
  const [quiz,setQuiz] = useState([] as Quiz[])
  const [loading,setLoading] = useState(false)
  const [answer,setAnswer] = useState([] as string[])
  const [tostart,setToStart] = useState(true)
  const [number,setNumber] = useState(1)
  const [userAnswer,setUserAnswer] = useState('')
  const [correctAnswer,setCorrectAnswer] = useState('')
  const [score,setScore] = useState(0)

  const handleToStart=async()=>{
    setToStart(false)
    setLoading(true)
   const data = await fetchQuiz()
   setLoading(false)
   setQuiz(data)
   setQuestion(data[0].question)
   setAnswer(data[0].answer)
   setNumber(1)
   setScore(0)
  }

  const handleToNextQuestion=()=>{
    setNumber(number+1)
    setQuestion(quiz[number].question)
   setAnswer(quiz[number].answer)
    
  }

  const handleForUserAnswer = (e:React.MouseEvent<HTMLButtonElement>)=>{

    setUserAnswer(e.currentTarget.value)

    setCorrectAnswer(question.correct_answer)
    e.currentTarget.value===question.correct_answer&&setScore(score+1)
    
  }


  return (
    <>
      <GlobalStyled/>
      <Wrapper>
        <h1>React Quiz</h1>
        {(quiz.length===number&&answer.includes(userAnswer))||tostart?<button onClick={handleToStart} className="start">Start</button>:null}
        {!tostart&&<h3>Score : {score}</h3>}
        {!loading?null:<p>Loading Questions...</p>}
        {loading||!tostart&&<QuestionCard question={question.question} answers={answer} number={number} callback={handleForUserAnswer} userAnswer={userAnswer} correctAnswer={correctAnswer}/>}
        {quiz.length===number||!answer.includes(userAnswer)?null:<button onClick={handleToNextQuestion} className="next">Next Question</button>}
      </Wrapper>
    </>
  );
}

export default App;
