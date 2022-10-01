import  Images from './images/brain.jpg'
import styled,{createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    background-image: url(${Images});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
  
    justify-content: center;
    text-align:center
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }


`
// #887d78
export const Wrapper = styled.div`
h1{
  font-family: Fascinate Inline;
  font-size:80px;
  font-weight: 800px;
  background-image:linear-gradient(180deg,#fff,#e986ab);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color:transparent;
  -moz-background-clip: text;
  -moz-text-fill-color:transparent;
  filter: drop-shadow(2px 2px #0085a3);
  margin-top : 20px;
  margin-bottom : 20px;
}
h3{
  color:#fff;
  font-size: 30px;
}
p{
  color:#fff;
}
.start,.next{
  background:linear-gradient(180deg,#fff,#a99dc4);
  min-width : 150px;
  padding: 10px;
  color: #8860e3;
  border:solid 2px #8860e3;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  margin-bottom : 20px;
  cursor : pointer;
  user-select : none;
}
`