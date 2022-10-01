import styled from 'styled-components'

export const Wrapper= styled.div`
background-color: rgb(37,35,36,0.8);
min-width: 500px;
padding: 20px;
border-radius : 5px;
box-shadow: 0px 5px 10px black;
border :solid 2px #353334;
margin-bottom: 20px;
p{
    font-size: 18px;
}
h4{
    color: #fff;
    font-size: 20px;
}
`
type ButtonWrapperProps = {
    correct: boolean
    userClicked :boolean
}
export const  ButtonWrapper = styled.div<ButtonWrapperProps>`
    
    
 width : 100%;
 .answer_button {
    transition : all 0.3s ease;
    : hover {
        opacity : 0.8;
     };
     
     width : 100%;
    background: ${({correct,userClicked})=>
    correct
    ? 'linear-gradient(90deg,#62f995,#10d754)'
    :!correct&&userClicked
    ? 'linear-gradient(90deg,#f75b75,#e61033)'
    : 'linear-gradient(180deg,#c6aed0,#8860e3)'

    };
    cursor : pointer;
    user-select : none;
     height : 40px;
     border-radius : 5px ;
     border :solid 3px #353334;
     margin: 5px;
     span {
         color : #fff;
         text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
     };
     box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
     
 }

`