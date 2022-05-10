import React from "react";

import "./customButtonStyles.scss";

const CustomButton = ({ children, isGoogleLoggedIn, ...otherProps }) => (
	<button className={`${isGoogleLoggedIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
