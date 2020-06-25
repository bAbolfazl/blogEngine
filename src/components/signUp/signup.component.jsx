import React from "react";

import "./signUp.styles.css";

import FormInput from "../formInput/formInput.component";
import CustomBtn from "../customBtn/customBtn.component";
import { auth, createUserDoc } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: '',
            displayName: ''
        };
    }

    handleSubmit = async event => {
        console.log('handle submit')
        event.preventDefault();

        const { email, password, confirmPassword, displayName } = this.state;
        console.log('sign up state', this.state)

        if (password !== confirmPassword) {
            alert('Passwords doesn\'t math')
            return;
        }

        console.log('finished')
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserDoc(user, { displayName })
            this.setState({ email: "", password: "", confirmPassword: '', displayName: '' });
        } catch (er) {
            console.log('error signing up', er)
            alert(er.message)
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="signin">
                {/* <p onClick={signInWithGoogle}>hiii</p> */}
                <h2>I do not have any accounts</h2>
                <span>Sign Up (Register) with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        label="displayName"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label="confirmPassword"
                        required
                    />
                    <div className="buttons">
                        <CustomBtn type="submit" fullWidth> Sign Up </CustomBtn>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
