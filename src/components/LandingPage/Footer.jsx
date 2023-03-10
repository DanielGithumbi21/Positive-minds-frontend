import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <StyledLanding>
      <div className='socials'>
        <SocialIcon network="twitter" bgColor="#E59438" />
        <SocialIcon network="facebook" bgColor="#E59438" />
        <SocialIcon network="instagram" bgColor="#E59438" />
        <SocialIcon network="linkedin" bgColor="#E59438" />
      </div>
      <div className='main'>
        <div className='sec-a'>
          <h2>POSITIVE MINDS COUNSELLING</h2>
          <p id='number'>+254 700 000 000</p>
        </div>
        <div className='sec'>
          <h2>WHO WE ARE</h2>

          <ul>
            <li>Women's Therapy </li>
            <li>Men's Therapy </li>
            <li>Teens Therapy</li>
            <li>Couples Therapy</li>
          </ul>

        </div>
        <div className='sec'>
          <h2>WHAT WE DO</h2>

          <ul>
            <li>Anxiety Therapy </li>
            <li>Depression Therapy </li>
            <li>Grief Cpuncelling</li>
            <li>Marriage Coucelling</li>
            <li>Addiction Councelling</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className='bottom'>

        <h3> Positive Minds Counselling | All rights reserved </h3>
      </div>
    </StyledLanding>
  )
}

const StyledLanding = styled.div`
background: #143E35;
margin-bottom:"0px"

margin: auto;
.socials{
  /* margin: 3.75rem 0; */
  text-align: center;
  //width: 80%;
  //margin: auto;

  & a{
    margin: 5rem 1.25rem ;
  }

}
.main{
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;

    
}
.sec{
  //margin: 20px;
  font-size: 1.25;
  color: white;
}

.sec-a{
  font-size: 1.25;
  color: white;
}

p{
  font-size: 2rem;
  font-weight: 700;
}

.bottom{
  text-align: center;
  padding-bottom: 0.313rem;
  color: white;
  font-size: small;
  padding-top: 2.5rem;
  
}

hr {
        width: 100%;
        height: 0.5px;
        margin-left: auto;
        margin-right: auto;
        background-color: #b7d0e2;
      
      }

      @media (max-width:920px){
        .sec{
          display:none;
        }

        .sec-a{
          width: 100%;
          padding: 0;
          font-size: 0.8rem;
          //padding-left: 1.2rem;
          margin-top: -35px;
          margin-bottom: 3.2rem;
          //background: red;
          text-align: center;


        }

        #number{
          font-size: 1rem;
        }
      }

`
