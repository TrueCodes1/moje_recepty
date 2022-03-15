import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

//IMPORTING ADDITIONAL FILES (COLORS, FONTS, etc.)
import colors from '../styles/Colors.js';
import '../styles/fonts/fonts.css';

//IMPORTING IMAGES
import full_logo from '../images/full_logo.svg'

const Main = styled.div`
    position: abolute;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    left: 0;
    top: 0;
    background: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Logo = styled.img`
    min-height: 200px;
    max-height: 200px;
    opacity: .75;
    margin-left: 40px;
`

const TextPart = styled.div`
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  left: 0;
  top: 0;
  font-family: Rolasand;
  font-size: 80px;
  color: #fff;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`

const Header = styled.div`
  font-family: Rolasand;
  font-size: 70px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default function Home() {

  useEffect(() => {
    
    sessionStorage.setItem('toggler-state', 'first');
    $('#toggler').removeClass('second');
    $('#toggler').removeClass('third');
    $('#toggler').addClass('first');

  })

  return (
      <>
          <TextPart>
            <Header>
              Moje Recepty
              <Logo src={full_logo}></Logo>
            </Header>
          </TextPart>
      </>
  )
}
