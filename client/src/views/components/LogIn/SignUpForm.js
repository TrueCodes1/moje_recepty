import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

//IMPORTING ADDITIONAL FILES (COLORS, FONTS, etc.)
import colors from '../../styles/Colors.js';
import '../../styles/fonts/fonts.css';

//IMPORTING FUNCTIONS (SCRIPTS)
const validation = require('../../functions/LogIn/signUpValidation');

//ANIMATIONS
const InputFlyingIn = keyframes`
    0% {
        opacity: 0;
        transform: rotateX(-90deg)
    }
    100% {
        opacity: 1;
        transform: rotateX(0)
    }
`

const LowVisibleFlyingIn = keyframes`
    0% {
        opacity: 0;
        transform: rotateX(-90deg)
    }
    100% {
        opacity: .5;
        transform: rotateX(0)
    }
`

const InputFlyingOut = keyframes`
    0% {
        opacity: 1;
        transform: rotateX(0)
    }
    100% {
        opacity: 0;
        transform: rotateX(-90deg)
    }
`

const LowVisibleFlyingOut = keyframes`
    0% {
        opacity: .5;
        transform: rotateX(0)
    }
    100% {
        opacity: 0;
        transform: rotateX(-90deg)
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
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    max-width: 400px;
    margin-top: 40px;
    
    &.shown{
        display: flex
    }
`

const Input = styled.input`
    font-family: Poppins;
    font-size: 20px;
    padding: 10px;
    padding-left: 15px;
    width: 100%;
    outline: none;
    border: 1px solid transparent;
    background: ${colors.primary};
    color: white;
    margin: 15px 0;
    border-radius: 5px;
    user-select: text;
    box-shadow: 10px 10px 20px ${colors.primaryDarkShadow},
                -5px -5px 20px ${colors.primaryLightShadow},
                -2px -2px 5px ${colors.primaryDarkSmoothShadow},
                2px 2px 5px ${colors.primaryLightSmoothShadow},
                inset 5px 5px 10px ${colors.primaryDarkShadow},
                inset -5px -5px 10px ${colors.primaryLightShadow};
    opacity: 0;

    &.wrong {
        border: 1px solid red;
        transition: .25s ease
    }
    &.submit {
        cursor: pointer;
        box-shadow: 10px 10px 20px ${colors.primaryDarkShadow},
                    -10px -10px 20px ${colors.primaryLightShadow},
                    -2px -2px 10px ${colors.primaryLightSmoothShadow},
                    2px 2px 5px ${colors.primaryDarkSmoothShadow},
                    inset 5px 5px 10px ${colors.primaryLightShadow},
                    inset -5px -5px 10px ${colors.primaryDarkShadow};
    }
    &.name {
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: .1s;
        }
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .1s;
        }
    }
    &.surname {
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: 0;
        }
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .3s;
        }
    }
    &.email {
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: .5s;
        }
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .25s;
        }
    }
    &.password {
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: .2s;
        }
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: 0;
        }
    }
    &.password-2 {
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: .4s;
        }
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .1s;
        }
    }
`

const CheckboxParent = styled.div`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    opacity: 0;

    &.checkbox {
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: .6s;
        }
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: .1s;
        }
    }
    &.wrong {
        border: 1px solid red;
        transition: .25s ease
    }
`

const Checkbox = styled.input`
    outline: none;
    border: none;
`

const Label = styled.label`
    font-size: 15px;
    line-height: 1.5em;
    text-align: justify;
    margin-left: 20px;
`

const LinkToSignUp = styled.div`
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    padding: 15px;
    opacity: 1;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: .5s ease;
    background: ${colors.primary};
    border: none;
    outline: none;
    margin-top: 20px;

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

    &.submit {
        &.coming {
            animation: 1 .5s ${InputFlyingIn};
            animation-delay: 0;
        }
        &.leaving {
            animation: 1 .5s ${InputFlyingOut};
            animation-delay: 0s;
        }
    }
`

const LinkToLogIn = styled.div`
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    padding: 15px;
    opacity: .5;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: .5s ease;
    background: ${colors.primary};
    border: none;
    outline: none;
    margin-top: 20px;

    &:hover{
        transition: .25s ease;
        opacity: 1;
    }

    &.to-log-in {
        &.coming {
            animation: 1 .5s ${LowVisibleFlyingIn};
            animation-delay: 0;
        }
        &.leaving {
            animation: 1 .5s ${LowVisibleFlyingOut};
            animation-delay: 0;
        }
    }
`

const BottomDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export default function SignUpForm() {

    //CLASSNAME FOR THE CHILDS OF FORM ANIMATION/NO-ANIMATION
    const [coming, setComing] = useState('coming');
    const [leaving, setLeaving] = useState('');

    useEffect(() => {
            
        //FIELDS FROM LOGIN PART
        const LPart = $('#login-part');
        const LForm = $('#login-form');
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
        const LogInButton = $('#to-log-in');

        /**********************************
            ANIMATIONS PART STARTS HERE
        ***********************************/

        $(LogInButton).on('click', () => {
            setComing('');
            setLeaving('leaving');
            $(SSubmit).css('opacity', '0');
            $(LogInButton).addClass('leaving');
            setTimeout(() => {
                $(LogInButton).css('opacity', '0')
            }, 400)
            for (let element of [SName, SSurname, SEmail, SPassword, SPassword2, SCheckbox, SSubmit, LogInButton]){
                $(element).on('animationend', () => {
                    $(element).css('opacity', '0');
                    $(element).removeClass('leaving');
                })
            }
            setTimeout(() => {
                $(SPart).removeClass('shown');
                $('#sign-up-form').removeClass('shown');
                setLeaving('');
                for (let element of [Email, Password, Submit, SmallText, SignUpButton]) {
                    $(element).css('opacity', '0');
                    $(element).remove('leaving');
                    $(element).addClass('coming');
                    $(element).on('animationend', () => {
                        $(element).css('opacity', '1');
                        $(element).removeClass('coming');
                    })
                }
                $(SmallText).css('opacity', '1');
                $(SignUpButton).css('opacity', '1');
                $(SSubmit).css('opacity', '1');
                $(LogInButton).css('opacity', '1');
                $(LPart).addClass('shown');
                $(LForm).addClass('shown');
            }, 800)
        })
        
        /**********************************
            ANIMATIONS PART ENDS HERE
        ***********************************/

        $(SSubmit).on('click', async () => {

            for (let element of [SName, SSurname, SEmail, SPassword, SPassword2, SCheckbox]) {
                $(element).removeClass('wrong');
            }

            let formValue = {
                firstName: $(SName).val(),
                lastName: $(SSurname).val(),
                email: $(SEmail).val(),
                password: $(SPassword).val(),
                password2: $(SPassword2).val(),
                checkbox: $('#checkbox-checkbox').prop('checked')
            }

            let afterCheck = await validation(formValue);
            
            if (afterCheck === true) {
                fetch('http://localhost:4000/users/create-user', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(
                        formValue
                    )
                })
            } else {
                let pairs = {
                    firstName: 'name-input',
                    lastName: 'surname-input',
                    email: 'email-input',
                    password: 'password-input',
                    checkbox: 'checkbox'
                }

                for (let key of Object.keys(afterCheck)) {
                    $(`#${pairs[key]}`).addClass('wrong')
                }

            }

        })

    })

  return (
    <>
        <WholePart id='sign-up-part'>
            <Form id='sign-up-form'>
                <Input type='text' placeholder='Meno' id='name-input' className={`name ${coming} ${leaving}`}/>
                <Input type='text' placeholder='Priezvisko' id='surname-input' className={`surname ${coming} ${leaving}`}/>
                <Input type='text' placeholder='E-mail' id='email-input' className={`email ${coming} ${leaving}`}/>
                <Input type='password' placeholder='Heslo' id='password-input' className={`password ${coming} ${leaving}`}/>
                <Input type='password' placeholder='Zopakuj heslo' id='password-repeat-input' className={`password-2 ${coming} ${leaving}`}/>
                <CheckboxParent id='checkbox' className={`checkbox ${coming} ${leaving}`}>
                    <Checkbox type='checkbox' id='checkbox-checkbox'/>
                    <Label>
                        súhlasím s podmienkami používania a so spracovaním osobných údajov
                    </Label>
                </CheckboxParent>
                <BottomDiv>
                    <LinkToSignUp id='submit-sign-up' className={`submit ${coming} ${leaving}`}>
                        Registruj ma!
                    </LinkToSignUp>
                    <LinkToLogIn id='to-log-in' className={`to-log-in ${coming} ${leaving}`}>
                        prihlásenie
                    </LinkToLogIn>
                </BottomDiv>
                </Form>
        </WholePart>
    </>
  )
}
