import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

//IMPORTING ADDITIONAL FILES (COLORS, FONTS, etc.)
import colors from '../styles/Colors.js';
import '../styles/fonts/fonts.css';

//IMPORTING COMPONENTS  
import LoginForm from '../components/LogIn/LoginForm.js';

export default function LogIn() {

  useEffect(() => {
    
    sessionStorage.setItem('toggler-state', 'third');
    $('#toggler').removeClass('first');
    $('#toggler').removeClass('second');
    $('#toggler').addClass('third');

  })

  return (
      <>
        <LoginForm />
      </>
  )
}
