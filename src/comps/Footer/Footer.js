import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import "./Footer.css";
import { ReactComponent as Theme } from "../../imgs/theme.svg";

// document.documentElement.style.setProperty("--red", "red")

const Footer = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		if (!theme) {
			document.documentElement.style.setProperty("--black", "#f5f1ed");
			document.documentElement.style.setProperty("--yellow", "#0f1108");
			document.documentElement.style.setProperty("--red", "#7ac7e1");
		} else {
			document.documentElement.style.setProperty("--black", "#231f20");
			document.documentElement.style.setProperty("--yellow", "#f0e7d8");
			document.documentElement.style.setProperty("--red", "#a63a50");
		}
	}, [theme]);

	return (
		<div className='footer'>
			<p>Made with &#10084;&#65039; by David Balian</p>
			<Theme
				fill={theme ? "#a63a50" : "#7ac7e1"}
				onClick={() => {
					setTheme(!theme);
				}}
				className='theme-toggle'
			/>
		</div>
	);
};

export default Footer;
