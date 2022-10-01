import React from "react"
import {ButtonWrapper, Wrapper} from './QuestionCard.styles'

type QuestionCardProps = {
    question: string
    answers : string[]
    number : number
    callback : (e:React.MouseEvent<HTMLButtonElement>)=>void
    userAnswer : string
    correctAnswer : string
}


export const QuestionCard = ({question,answers,number,callback,userAnswer,correctAnswer}:QuestionCardProps) => {

    return (
        <Wrapper>
           <h4>Question: {number}/10</h4>
           <p dangerouslySetInnerHTML={{__html:question}}/>
           {
            answers.map(answer=>{
                return(
                    <ButtonWrapper key={answer} correct={correctAnswer===answer} userClicked={userAnswer===answer} >
                        <button value={answer} onClick={e=>callback(e)} disabled={answers.includes(userAnswer)?true:false} className="answer_button">
                            <span dangerouslySetInnerHTML={{__html:answer}}/>
                        </button>
                    </ButtonWrapper>
                )
                
             })
           }
        </Wrapper>
    )
}
