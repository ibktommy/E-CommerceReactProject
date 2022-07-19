import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";

const CartIcon = () => {
	return (
		<div className="cart-icon">
			<ShoppingIcon className="Shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
