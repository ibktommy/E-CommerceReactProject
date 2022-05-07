import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepageComponents";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/headerComponent";
import RegisterLogin from "./pages/registerLogin/registerLoginComponent";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Homepage />}></Route>
				<Route exact path="/shop" element={<ShopPage />}></Route>
				<Route exact path="/registerLogin" element={<RegisterLogin />}></Route>
			</Routes>
		</>
	);
}

export default App;
