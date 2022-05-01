import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepageComponents.jsx";

const HatsPage = () => {
	console.log();
	return (
		<div>
			<h1>HATS PAGE</h1>
		</div>
	);
};

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Homepage />}></Route>
				<Route exact path="/hats" element={<HatsPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
