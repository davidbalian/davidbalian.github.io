import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
	const text = "Hey, I'm David Balian.";
	const textArray = [...text];
	const [headingText, setHeadingText] = useState([""]);

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
					I am a Computer Engineering student at the Cyprus University of Technology, and
					an aspiring Web Developer.
				</p>
				<a href='#about'>
					<button>About Me</button>
				</a>
			</div>
		</div>
	);
};

export default Home;
