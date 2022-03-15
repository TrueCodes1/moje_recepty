import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

//IMPORTING ADDITIONAL FILES (COLORS, FONTS, etc.)
import colors from '../../styles/Colors.js';
import '../../styles/fonts/fonts.css';

//ANIMATIONS
const InputFlyingOut = keyframes`
    0% {
        transform: none
    }
    100% {
        transform: rotateX(90deg);
        opacity: 0
    }
`

const InputFlyingIn = keyframes`
    0% {
        transform: rotateX(90deg);
        opacity: 0
    }
    100% {
        transform: none;
        opacity: 1
    }
`
//STYLED COMPONENTS
const WholePart = styled.div`
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;

    &.shown {
        display: flex;
    }
`

const Form = styled.form`
    font-family: Poppins;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    max-width: 400px;

    &.shown {
        display: flex;
    }
`

const Input = styled.input`
    font-family: Poppins;
    font-size: 20px;
    padding: 10px;
    padding-left: 15px;
    width: 100%;
    outline: none;
    border: none;
    background: ${colors.primary};
    color: white;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: 10px 10px 20px ${colors.primaryDarkShadow},
                -5px -5px 20px ${colors.primaryLightShadow},
                -2px -2px 5px ${colors.primaryDarkSmoothShadow},
                2px 2px 5px ${colors.primaryLightSmoothShadow},
                inset 5px 5px 10px ${colors.primaryDarkShadow},
                inset -5px -5px 10px ${colors.primaryLightShadow};

    &.submit {
        cursor: pointer;
        box-shadow: 10px 10px 20px ${colors.primaryDarkShadow},
                    -10px -10px 20px ${colors.primaryLightShadow},
                    -2px -2px 10px ${colors.primaryLightSmoothShadow},
                    2px 2px 5px ${colors.primaryDarkSmoothShadow},
                    inset 5px 5px 10px ${colors.primaryLightShadow},
                    inset -5px -5px 10px ${colors.primaryDarkShadow};
    }
    &.email {
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: 0;
        }
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: .3s;
        }
    }
    &.password {
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .4s;
        }
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: 0;
        }
    }
    &.submit {
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .3s;
        }
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: .1s;
        }
    }
`

const SmallText = styled.div`
    opacity: .5;
    font-weight: 200;
    font-size: 15px;
    margin: 10px 0;
    
    &.small-text {
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .1s;
        }
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: 0;
        }
    }
`

const LinkToSignUp = styled.div`
    font-family: Poppins;
    font-size: 20px;
    font-weight: 300;
    padding: 15px;
    opacity: .75;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: .5s ease;
    background: ${colors.primary};

    &:hover{
        transition: .25s ease;
        opacity: 1;
        box-shadow: 10px 10px 20px ${colors.primaryDarkShadow},
                    -10px -10px 20px ${colors.primaryLightShadow},
                    -2px -2px 10px ${colors.primaryLightSmoothShadow},
                    2px 2px 5px ${colors.primaryDarkSmoothShadow},
                    inset 5px 5px 10px ${colors.primaryLightShadow},
                    inset -5px -5px 10px ${colors.primaryDarkShadow};
    }
    
    &.sign-up {
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .5s;
        }
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: 0;
        }
    }
`

export default function LoginPart() {

    const [logInLeaving, setLeaving] = useState('');
    const [shown, setShown] = useState('shown');

    useEffect(() => {

        //FIELDS FROM LOGIN PART
        const Email = $('#email');
        const Password = $('#password');
        const Submit = $('#submit');
        const SmallText = $('#small-text');
        const SignUpButton = $('#sign-up');

        //FIELDS FROM SIGN-UP PART
        const SPart = $('#sign-up-part');
        const SName = $('#name-input');
        const SSurname = $('#surname-input');
        const SEmail = $('#email-input');
        const SPassword = $('#password-input');
        const SPassword2 = $('#password-repeat-input');
        const SCheckbox = $('#checkbox');
        const SSubmit = $('#submit-sign-up');
        const SLogIn = $('#to-log-in');

        SignUpButton.on('click', () => {
            setLeaving('leaving');
            for (let element of [Email, Password, Submit, SmallText, SignUpButton]){
                $(element).on('animationend', () => {
                    element.css('opacity', '0')
                })
            }
            setTimeout(() => {
                $('#login-part').removeClass('shown');
                $('#login-form').removeClass('shown');
                setShown('');
                setLeaving('');
                $(SPart).addClass('shown');
                $('#sign-up-form').addClass('shown');
                $(SSubmit).css('opacity', '1');
                $(SLogIn).css('opacity', '.5');
                $(SLogIn).on('mouseover', () => {
                    SLogIn.css('opacity', '1');
                });
                $(SLogIn).on('mouseleave', () => {
                    SLogIn.css('opacity', '.5');
                })
                $(SLogIn).removeClass('leaving');
                $(SLogIn).addClass('coming');
                $(SLogIn).on('animationend', () => {
                    $(SLogIn).css('opacity', '.5');
                    $(SLogIn).removeClass('coming');
                });
                for (let element of [SName, SSurname, SEmail, SPassword, SPassword2, SCheckbox, SSubmit]) {
                    $(element).addClass('coming');
                    $(element).removeClass('leaving');
                    $(element).on('animationend', () => {
                        $(element).css('opacity', '1');
                        $(element).removeClass('coming');
                    })
                }
            }, 800)
        })
    })

  return (
    <>
        <WholePart id='login-part' className={`${shown}`}>
            <Form id='login-form' className={`${shown}`}>
                <Input placeholder='E-mail' type='email' className={`email ${logInLeaving}`} id='email'/>
                <Input placeholder='Heslo' type='password' className={`password ${logInLeaving}`} id='password'/>
                <Input type='submit' className={`submit ${logInLeaving}`} value='Hotovo' id='submit'/>
                <SmallText className={`small-text ${logInLeaving}`} id='small-text'>
                    alebo
                </SmallText>
                <LinkToSignUp className={`sign-up ${logInLeaving}`} id='sign-up'>
                vytvor si svoje konto! &#127856;
                </LinkToSignUp>
            </Form>
        </WholePart>
    </>
  )
}
