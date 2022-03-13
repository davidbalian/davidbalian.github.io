import React from "react";
import About from "./comps/About/About";
import Home from "./comps/Home/Home";
import Nav from "./comps/Nav/Nav";

const App = () => {
	return (
		<div>
			<Nav />
			<Home />
			<About />
		</div>
	);
};

export default App;
