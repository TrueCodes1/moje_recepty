import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import $ from 'jquery';

//IMPORTING ADDITIONAL FILES (COLORS, FONTS, etc.)
import colors from './views/styles/Colors.js';
import './views/styles/fonts/fonts.css';

//IMPORTING ROUTES
import Home from './views/general_views/Home.js';
import LogIn from "./views/general_views/LogIn.js";

//IMPORTING COMPONENTS
import Navbar from "./views/components/all/Navbar.js";

const MainDiv = styled.div`
  position: absolute;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.primary}
`

const  App = () => {

  return (
    <>
      <MainDiv>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/logIn" element={ <LogIn/> }/>
          </Routes>
        </Router>
      </MainDiv>
    </>
  )
}

export default App;
