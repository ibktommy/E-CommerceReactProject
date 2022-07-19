import React from "react";

import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux/es/exports";

import { onSnapshot } from "firebase/firestore";

import "./App.css";

import Homepage from "./pages/homepage/homepageComponents";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/headerComponent";
import RegisterLogin from "./pages/registerLogin/registerLoginComponent";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { setCurrentUser } from './redux/user/userAction'
class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

			// Condition to check if user is logged in
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				onSnapshot(userRef, (doc) => {
					// Storing user data in the App
					setCurrentUser({
							id: doc.id,
						...doc.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header />
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

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
