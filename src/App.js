import React from "react";

import { Routes, Route } from "react-router-dom";

import { onSnapshot } from "firebase/firestore";

import "./App.css";

import Homepage from "./pages/homepage/homepageComponents";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/headerComponent";
import RegisterLogin from "./pages/registerLogin/registerLoginComponent";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
// import { onSnapshot } from 'firebase/firestore'

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// Condition to check if useris logged in
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				onSnapshot(userRef, (doc) => {
					// Storing user data in the App
					this.setState({
						currentUser: {
							id: doc.id,
							...doc.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route exact path="/" element={<Homepage />}></Route>
					<Route exact path="/shop" element={<ShopPage />}></Route>
					<Route
						exact
						path="/registerLogin"
						element={<RegisterLogin />}
					></Route>
				</Routes>
			</React.Fragment>
		);
	}
}

export default App;
