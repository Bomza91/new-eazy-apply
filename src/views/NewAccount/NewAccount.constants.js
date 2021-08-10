// if (!email || email.length < 1) return ('noEmail')
// if (!password || password.length < 1) return ('noPassword')
// if (!confirmPassword || confirmPassword.length < 1) return ('noConfirmPassword')



// if (!validator.isEmail(email)) return setAlert('formatEmail')
// if (password.length < 8) return setAlert('shortPassword')
// if (confirmPassword.length < 8) return setAlert('shortConfirmPassword')

// if (password !== confirmPassword) return setAlert('mismatchPasswords')
// setAlert('creating')

// const ALERTS = {
//     noEmail: {
//         title: 'Missing email',
//     },
//     noPassword: {
//         title: 'Missing password',

//     },
//     noConfirmPassword:  {
//         title: 'Missing confirm password',

//     },
//     formatEmail: {

//         title: 'invalid email', 
//     },
//     shortPassword: {
//         title: 'password too short ',

//     },
//     shortConfirmPassword: {
//         title: 'Confirm password too short ',

//     },

//     mismatchPasswords: {

//        title: 'Confirm password does not match',

//     },

//     creating: {
//         title: 'Creating account',

//     }
    
// }


export const ALERTS={
    noEmail:{
        title:'Missing email',
        description:'Email address  is required in order to register an account'

    },
    noPassword:{
        title:'Missing password',
        description:'Password is required in order to register an account'

    },
    noConfirmPassword:{
        title:'Missing confirm password',
        description:'Confirm password is required in order to  prevent typos'
    },
    formatEmail:{
        title:'Invalid email',

    },
    ShortPassword:{
        title:'Password too short',
        description:'For security purposes password cannot be shoter tha 8 characters'

    },
    misMatchConfirmPassword:{
        title:'Confirm password does not match',
        description:'make sure the password value and the confirm password value are the same'
    },
    emailAlreadyInUse:{
        title:'Email already in use',
        description:'cannot create an account for an email that is alredy registered, if this is you re sign in instead'

    },

    creating:{
        title:'Creating Account',
        nature:'resolving'

    }

}