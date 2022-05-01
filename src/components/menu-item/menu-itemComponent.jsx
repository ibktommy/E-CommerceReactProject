import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-itemStyles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
	const navigate = useNavigate();
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => {
				console.log("Hello");
				navigate("./hats");
			}}
		>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
