import React, { Component } from "react";

import "./registerStyles.scss";

import FormInput from "../formInput/formInputComponent";
import CustomButton from "../customButton/customButtonComponent";

import { auth, createUserProfileDocument } from "../../firebase/firebaseUtils";

class RegisterComponent extends Component {
	constructor() {
		super();

		// Setting Initial State in the Register Component
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	// Function to Handle the Form Submit
	handleSubmit = async (event) => {
		event.preventDefault();
	};

	render() {
		// Destrcturing Values from the register-Component state
		const { displayName, email, password, confirmPassword } = this.state;

		// Condition to Check if Passwords match
		if (password != confirmPassword) {
			alert("Passwords Do Not Match!");
			return;
		}
		return (
			<div className="sign-up">
				<h2 className="title">You have not registered an account?</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password "
						required
					/>
					<CustomButton type="submit">Click To Register</CustomButton>
				</form>
			</div>
		);
	}
}

export default RegisterComponent;
