import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className='home' id='home'>
			<div className='home-cont'>
				<h1>Hey, I'm David Balian.</h1>
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
