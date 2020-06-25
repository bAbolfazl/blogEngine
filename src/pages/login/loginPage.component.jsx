import React, { Component } from 'react'

import SignIn from '../../components/signIn/signIn.component'
import SignUp from '../../components/signUp/signup.component'

export default class LoginPage extends Component {
    render() {
        return (
            <div className='container d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                <SignIn />
                <SignUp />
            </div>
        )
    }
}
