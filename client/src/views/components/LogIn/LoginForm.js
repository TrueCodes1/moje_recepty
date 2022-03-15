import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

//IMPORTING ADDITIONAL FILES (COLORS, FONTS, etc.)
import colors from '../../styles/Colors.js';
import '../../styles/fonts/fonts.css';
import flour from '../../images/flour.png';
import burger from '../../images/burger.png';

//IMPORTING COMPONENTS  
import LoginPart from './LoginPart.js';
import SignUpForm from './SignUpForm.js';

//ANIMATIONS

//COMPONENTS
const MainDiv = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 9999;


`
const BigHeader = styled.div`
  position: absolute;
  min-width: 30vw;
  max-width: 30vw;
  left: 0;
  font-size: 150px;
  font-family: Recoleta;
  color: #fff;
  opacity: .1;
  padding-left: 20px;
  line-height: 1.25em;
`
const SmallDivBetween = styled.div`
  min-width: 50px;
  max-width: 50px;
  font-family: Poppins;
  color: #fff;
  opacity: .5;
  font-size: 20px;
`
const FlourImg = styled.img`
  position: absolute;
  min-height: 100vh;
  max-height: 100vh;
  right: -150px;
  bottom: 0;
  opacity: .5;
`
const BurgerImg = styled.img`
  position: absolute;
  min-height: 70;
  max-height: 70vh;
  left: -250px;
  bottom: 0;
  opacity: .5;
`

export default function LoginForm() {

  return (
      <>
        <MainDiv>
          <BigHeader>
            love & cook
          </BigHeader>
          <LoginPart>

          </LoginPart>
          <SignUpForm />
        </MainDiv>
      </>
  )
}
