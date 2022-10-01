import { sortingAnswer } from "./util"

export type Question = {
    category : string
    correct_answer:string
    difficulty : string
    incorrect_answers:string[]
    question: string
    type: 'multiple'
}

export type Quiz = {
    question:Question
    answer: string[]
}
export const fetchQuiz = async() => {
    const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
    const data = await response.json()
    
    return data.results.map((question:Question)=>{
        return {
            question:{...question},
           
            answer: sortingAnswer([...question.incorrect_answers,question.correct_answer])
        }
    })
    
}
