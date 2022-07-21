import React from "react";

import "./customButtonStyles.scss";

const CustomButton = ({ children, inverted, isGoogleLoggedIn, ...otherProps }) => (
	<button className={` ${inverted ? 'inverted' : ""} ${isGoogleLoggedIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
