import React, { Component } from "react";

import "./loginStyles.scss";

import FormInput from "../formInput/formInputComponent";
import CustomButton from "../customButton/customButtonComponent";
import { loginWithGoogle } from "../../firebase/firebaseUtils";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSUbmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email</span>

				<form onSubmit={this.handleSUbmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>

					<FormInput
						name="password"
						type={"password"}
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={loginWithGoogle} isGoogleLoggedIn>
							{" "}
							Sign in with Google{" "}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
