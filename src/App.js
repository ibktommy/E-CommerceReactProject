import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepageComponents.jsx";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/headerComponent";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Homepage />}></Route>
				<Route exact path="/shop" element={<ShopPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
