import React from "react";

import "./registerLoginStyle.scss";

import Login from "../../components/login/loginComponent";
import Register from '../../components/register/registerComponent'

const RegisterLogin = () => (
	<div className="register-login">
		<Login />
		<Register />
	</div>
);

export default RegisterLogin;
