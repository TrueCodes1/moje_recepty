import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

//IMPORTING ADDITIONAL FILES (COLORS, FONTS, etc.)
import colors from '../../styles/Colors.js';
import '../../styles/fonts/fonts.css';

const NavbarDiv = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 10000;
`

const NavItem = styled.div`
    min-width: 150px;
    max-width: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-weight: 300;
    cursor: pointer;
    color: #fff;
    padding: 30px /*40px*/0 10px /*40px*/0;
    border: none;
    transition: .25s ease;

`

const ToggleRectangle = styled.div`
    position: absolute;
    min-width: 40px;
    max-width: 40px;
    min-height: 3px;
    min-height: 3px;
    bottom: 0;
    left: 0;
    background: #fff;
    border-radius: 20px;

    &.first {
        transform: translateX(calc(75px - 20px));
        transition: .5s ease;
    }

    &.second {
        transform: translateX(calc((75px - 20px) + 150px));
        transition: .5s ease;
    }

    &.third {
        transform: translateX(calc((75px - 20px) + 2 * 150px));
        transition: .5s ease;
    }
    
    &.fourth {
        transform: translateX(calc((75px - 20px) + 3 * 150px));
        transition: .5s ease;
    }
`

export default function Navbar() {

    const [toggleState, setToggleState] = useState( sessionStorage.getItem('toggler-state') || 'first');

    useEffect(() => {

        const navItems = $('.nav-item');
        const toggleRectangleIndicator = $('#toggler');

        //FUNCTION TO MOVE TOGGLE INDICATOR ON NAVBAR UNDER THE CLICKED ROUTE
        const toggleNavItems = (e) => {
            let id = e.target.id;
            switch(id.charAt(id.length-1)) {
                case '1' :
                    setToggleState('first');
                    sessionStorage.setItem('toggler-state', 'first');
                    setTimeout(() => {
                        window.location = '/'
                    }, 250)
                    break
                case '2' :
                    setToggleState('second');
                    sessionStorage.setItem('toggler-state', 'second');
                    setTimeout(() => {
                        window.location = '/today'
                    }, 250)
                    break
                case '3' :
                    setToggleState('third');
                    sessionStorage.setItem('toggler-state', 'third');
                    setTimeout(() => {
                        window.location = '/logIn'
                    }, 250)
                    break
            }
        }

        for (let item of navItems) {
            $(item).on('click', toggleNavItems)
        }
    })

  return (
      <>
        <NavbarDiv>
            <NavItem className='nav-item' id='nav-item-1'>
                recepty
                <ToggleRectangle className={toggleState} id='toggler'/>
            </NavItem>
            <NavItem className='nav-item' id='nav-item-2'>
                tip na dnes
            </NavItem>
            <NavItem className='nav-item' id='nav-item-3'>
                prihlásenie
            </NavItem>
        </NavbarDiv>
      </>
  )
}
