import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className='about' id='about'>
			<h1>About Me</h1>
			<section className='about-text'>
				<p>
					My Web Development journey started when I was in my 2nd year of middle school. I
					decided to learn some HTML just to show off to my classmates that I could write
					whatever I wanted and it would show up on the browser.
				</p>
				<p>
					After a while of making the most basic websites, I wanted to start learning web
					development more in-depth. I created an account on{" "}
					<a
						href='https://www.codecademy.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='external-link'
					>
						Codecademy
					</a>{" "}
					and advanced my HTML and CSS knowledge. I then switched to{" "}
					<a
						href='https://www.freecodecamp.org/'
						target='_blank'
						rel='noopener noreferrer'
						className='external-link'
					>
						Freecodecamp
					</a>{" "}
					to pick up JavaScript. I made countless tiny projects on there and vastly
					improved my skills. But of course, I still wasn't there yet.
				</p>
				<p>
					It's only the last few years that I started taking web development somewhat
					seriously. I am currently learning React and hoping to take on some backend
					technologies later as well. These technologies include Node.js, MongoDB, and
					perhaps some C# and SQL databases.
				</p>
			</section>
		</div>
	);
};

export default About;
