import styled from 'styled-components'
import Fundo from '../../images/fundo.jpg'



export const Container = styled.div`
background: url('${Fundo}');
width: 100vw;
height: 100vh;
display: grid;
place-items:center;
`
export const Container1 = styled.div`
background-color: #280659;
width: 400px;
height: 400px;
border-radius: 10px;
display: grid;
place-items:center;
 form {
    display: flex;
    flex-direction: column;
 }

 h6 {
   margin-top: 5px;
   font-size: 10px;
   color: red;
 }
`

export const Input = styled.input`
width: 250px;
height: 30px;
padding: 5px;
cursor: pointer;
`
export const Button = styled.button`
background-color: #a7a7a7;
width: 150px;
height: 30px;
cursor: pointer;
margin-top: 10px;
margin-left: 100px
`
export const Text = styled.p`
color: white;
font-size: 20px;
`

export const Text1 = styled.p`
color: white;
font-size: 13px;
`
export const Label = styled.p`
color: white;
font-size: 11px;
margin: 5px 0px;
`


export const Link = styled.a`
color: white;
font-size: 10px;
margin-top: -50px;
text-decoration: underline;
cursor: pointer;
`