import React, { useContext } from "react";
import "./Contact.css";
import { ReactComponent as Insta } from "../../imgs/instagram.svg";
import { ReactComponent as Linked } from "../../imgs/linked.svg";
import { ReactComponent as Git } from "../../imgs/git.svg";
import { ReactComponent as At } from "../../imgs/at.svg";
import { ThemeContext } from "../../App";

const Contact = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div id='contact'>
			<h1>Contact Me</h1>
			<div className='links'>
				<div className='icon-link big'>
					<At className='logo-icon' fill={theme ? "#f0e7d8" : "#0f1108"} />
					<a
						href='mailto:davidbalyan9@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='external-link'
					>
						davidbalyan9@gmail.com
					</a>
				</div>
				<div className='icon-link'>
					<Insta className='logo-icon' fill={theme ? "#f0e7d8" : "#0f1108"} />
					<a
						href='https://www.instagram.com/davbaly/'
						target='_blank'
						rel='noopener noreferrer'
						className='external-link'
					>
						@davbaly
					</a>
				</div>
				<div className='icon-link'>
					<Git className='logo-icon' fill={theme ? "#f0e7d8" : "#0f1108"} />
					<a
						href='https://github.com/davidbalian'
						target='_blank'
						rel='noopener noreferrer'
						className='external-link'
					>
						davidbalian
					</a>
				</div>
				<div className='icon-link'>
					<Linked className='logo-icon' fill={theme ? "#f0e7d8" : "#0f1108"} />
					<a
						href='https://www.linkedin.com/in/davidbalian/'
						target='_blank'
						rel='noopener noreferrer'
						className='external-link'
					>
						David Balian
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
