// IMPORTING SCHEMAS
const User = require('../models/userModel')

const createUser = () => {
    const user = new User({
        firstName: 'Johny',
        lastName: 'Doe',
        email: 'johny@asfkbasfbkjna.com',
        password: 'askbjzasfukn',
        dateEstablished: new Date().toLocaleString(),
        recipes: [],
        friends: [],
        liked: []
    })

    user.save((err, saved) => {
        if (err) {
            console.log('error');
            console.error(err)
        } else {
            console.log('saved')       
        }
    })
}

module.exports = {createUser}