import React, { createContext, useState } from "react";
import About from "./comps/About/About";
import Contact from "./comps/Contact/Contact";
import Footer from "./comps/Footer/Footer";
import Home from "./comps/Home/Home";
import Nav from "./comps/Nav/Nav";
import Projects from "./comps/Projects/Projects";

export const ThemeContext = createContext();

const App = () => {
	const [theme, setTheme] = useState(0);

	return (
		<div>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Nav />
				<Home />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
