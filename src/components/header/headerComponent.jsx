import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";

import { auth } from "../../firebase/firebaseUtils";

import "./headerStyle.scss";

const Header = ({ currentUser }) => (
	<div className="header">
		<Link to={"/"} className="logo-container">
			<Logo className="logo" />
		</Link>

		<div className="options">
			<Link to={"/shop"} className="option">
				SHOP
			</Link>
			<Link to={"/contact"} className="option">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					LOG OUT
				</div>
			) : (
				<Link className="option" to={"/registerLogin"}>
					LOG IN
				</Link>
			)}
		</div>
	</div>
);

export default Header;
