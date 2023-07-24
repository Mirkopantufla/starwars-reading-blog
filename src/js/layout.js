import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./views/Home.jsx";
import CharacterInfo from "./views/CharacterInfo.jsx";
import PlanetInfo from "./views/PlanetInfo.jsx";
import Footer from "./component/Footer.jsx";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/people/:theid" element={<CharacterInfo />} />
					<Route path="/planets/:theid" element={<PlanetInfo />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
