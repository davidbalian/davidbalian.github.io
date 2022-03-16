import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className='about' id='about'>
			<h1>About Me</h1>
			<section className='about-text'>
				<p>
					Hello! I'm David and I enjoy building things that live on the internet. My
					interest in web development started back in 2017 when I tried making funny
					websites to show off to my classmates.
				</p>
				<p>
					Fast-forward to today. I'm a freshman at the Cyprus University of Technology,
					pursuing a degree in Computer Engineering and Informatics. When i'm not intensly
					studying :), I like to improve my web dev skills by making web apps.
				</p>
				<p>
					It's only the last few years that I started taking web development somewhat
					seriously. I am currently learning React and hoping to take on some backend
					technologies later as well. These technologies include Node.js, MongoDB, and
					perhaps some C#, and SQL databases.
				</p>
			</section>
		</div>
	);
};

export default About;
