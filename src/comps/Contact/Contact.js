import React from "react";
import "./Contact.css";
import instagram from "../../imgs/instagram.svg";
import linked from "../../imgs/linked.svg";
import git from "../../imgs/git.svg";
import at from "../../imgs/at.svg";

const Contact = () => {
	return (
		<div id='contact'>
			<h1>Contact Me</h1>
			<div className='links'>
				<div className='icon-link big'>
					<img src={at} alt='@' className='logo-icon' />
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
					<img src={instagram} alt='instagram logo' className='logo-icon' />
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
					<img src={git} alt='github logo' className='logo-icon' />
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
					<img src={linked} alt='linked in logo' className='logo-icon' />
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
