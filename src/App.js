import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepageComponents";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/headerComponent";
import RegisterLogin from "./pages/registerLogin/registerLoginComponent";
import { auth } from "./firebase/firebaseUtils";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.onSubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route exact path="/" element={<Homepage />}></Route>
					<Route exact path="/shop" element={<ShopPage />}></Route>
					<Route exact path="/registerLogin" element={<RegisterLogin />}></Route>
				</Routes>
			</React.Fragment>
		);
	}
}

export default App;
