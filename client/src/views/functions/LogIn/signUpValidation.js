const validateEmail = (email) => {
    email = email.toString();
    let message = true;

    // CHECKING FOR OCCURANCE OF @, IF NONE, MESSAGE ADDED THAT LETS THE USER KNOW
    if (!email.includes('@')){
        message = [];
        message.push('no-@')   
    }

    if (message.length == 0) {
        if (email.split('@').length != 2) {
            message = [];
            message.push('more-@')
        } else {
            if (email.split('@')[1].includes('.')) {
                alert('correct email') 
                return true
            } else {
                message = [];
                message.push('no-domain')

            }
        }
    } else {
        return 
    }

}

const validation = (formValue) => {

    let name = formValue.name;
    let lastName = formValue.lastName;
    let email = formValue.email;
    let password = formValue.password;
    let password2 = formValue.password2;
    let checked = formValue.checkbox;

}

module.exports = validation