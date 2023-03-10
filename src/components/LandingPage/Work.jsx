import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <StyledDiv>
      <div className='content'>
        <p>Are you a Proffesional Therapist? Work with us!</p>
        <Link to="login">
          <button>Get Started Here</button>
        </Link>

      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
padding-top: 5px;
align-items: center;
text-align: center;
width: 70%;
margin: auto;
margin-bottom: 50px;
p{
  color:#43806C ;
  //padding-bottom: 5px;

font-weight: 400;
font-size: 40px;
line-height: 100px;
text-align: center;
color: #43806C;

}
button{
  box-sizing: border-box;
  font-size: 24px;
  /* margin-top: 20px; */
  color: white;

//position: absolute;
width: 486px;
height: 90px;
//left: 513px;
//top: 2702px;

background: #143E35;
border: 2px solid #143E35;
}

@media (max-width:920px) {
  button{
    width: 20rem;
  }

  
}

`
