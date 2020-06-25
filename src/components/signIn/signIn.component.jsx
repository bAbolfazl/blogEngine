import React from "react";

import "./signin.styles.css";

import FormInput from "../formInput/formInput.component";
import CustomBtn from "../customBtn/customBtn.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    console.log('handle submit')

    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" });
    }
    catch (err) {
      console.log(err)
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
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <CustomBtn type="submit"> Sign in </CustomBtn>
            <CustomBtn type='button'
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
