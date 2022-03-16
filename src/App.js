import React from "react";
import About from "./comps/About/About";
import Contact from "./comps/Contact/Contact";
import Footer from "./comps/Footer/Footer";
import Home from "./comps/Home/Home";
import Nav from "./comps/Nav/Nav";
import Projects from "./comps/Projects/Projects";

const App = () => {
	return (
		<div>
			<Nav />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
