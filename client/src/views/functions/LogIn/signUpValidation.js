const validateName = (name) =>{
    name = name.toString();
    let message = true;

    if (name.length > 0) {
        return message
    } else {
        message = 'zero-length';
        return message
    }

}

const validateEmail = (email) => {
    email = email.toString();
    let message = true;

    // CHECKING FOR OCCURANCE OF @, IF NONE, MESSAGE ADDED THAT LETS THE USER KNOW
    if (!email.includes('@')){
        message = 'no-@'; 
    }

    if (email.replace('@', '').includes('@')){
        message = 'more-@';
    }

    if (message.length === 0) {
        if (email.split('@').length !== 2) {
            message = 'more-@';
            return message
        } else {
            if (email.split('@')[1].includes('.')) {
                alert('correct email') 
                return message
            } else {
                message = 'no-domain';
                return message
            }
        }
    } else {
        return message
    }

}

const validatePasswords = (pwd, pwd2) => {
    pwd = pwd.toString();
    pwd2 = pwd2.toString();
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZéěřŕťžúíóášďľĺýčňĚÉŘŔŤŽÚÍÓÁŠĎĹĽÝČŇôúä';
    let numbers = '0123456789';
    let message = true
    
    if (pwd.length >= 8) {
        if (pwd === pwd2) {
            let letter = false;
            let number = false;
            let special = false;
            for (let char of pwd) {
                if (letters.includes(char)) {
                    letter = true
                } else if (numbers.includes(char)) {
                    number = true
                } else {
                    special = true
                }
            }
            if (letter===true && number===true && special===true) {
                return message
            } else {
                for (let part of [letter, number, special]) {
                    message = ['missing-type-of-character'];
                    if (part === false) {
                        message.push(part)
                    }
                }
                return message
            }
        } else {
            message = 'not-matching-passwords';
            return message
        }
    } else {
        message = 'too-short';
        return message
    }

}

const validation = (formValue) => {
   
    let message = true;

    let name = formValue.firstName;
    let lastName = formValue.lastName;
    let email = formValue.email;
    let password = formValue.password;
    let password2 = formValue.password2;
    let checked = formValue.checkbox;

    let validatedAll = {
        firstName: validateName(name),
        lastName: validateName(lastName),
        email: validateEmail(email),
        password: validatePasswords(password, password2),
        checkbox: checked
    }

    let allCorrect = true;

    for (let key of Object.keys(validatedAll)) {
        if (validatedAll[key] !== true) {
            allCorrect = false
        } 
    }

    if (allCorrect === true) {
        return true
    } else {
        for (let key of Object.keys(validatedAll)) {
            if (validatedAll[key] === true) {
                delete validatedAll[key]
            }
        }
        return validatedAll
    }

}

module.exports = validation