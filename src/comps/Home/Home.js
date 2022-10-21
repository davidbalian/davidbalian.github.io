import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import { ReactComponent as Down } from "../../imgs/down.svg";
import "./Home.css";

const Home = () => {
	const text = "Hey, I'm David Balian.";
	const textArray = [...text];
	const [headingText, setHeadingText] = useState([""]);

	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setHeadingText([""]);

		let i = 0;

		setInterval(() => {
			if (i === textArray.length - 1) {
				clearInterval();
			}

			setHeadingText((prevState) => [...prevState, textArray[i]]);
			i++;
		}, 75);
	}, []);

	return (
		<div className='home' id='home'>
			<div className='home-cont'>
				<h1>{headingText.join("")}</h1>
				<p>
					I am a Web Developer, and aComputer Engineering student at the Cyprus University of Technology.
				</p>
				<a href='#about'>
					<button>About Me</button>
				</a>
				<a href='#about'>
					<Down className='logo-icon scroll-arrow' fill={theme ? "#231f20" : "#f5f1ed"} />
				</a>
			</div>
		</div>
	);
};

export default Home;
