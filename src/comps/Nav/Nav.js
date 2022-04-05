import React from "react";
import "./Nav.css";

const Nav = () => {
	return (
		<div className='navbar'>
			<a href='#home' className='logo-link'>
				<p className='logo'>DB</p>
			</a>
			<div className='navlinks'>
				<a className='navlink' href='#about'>
					About
				</a>
				<a className='navlink' href='#projects'>
					Projects
				</a>
				<a className='navlink' href='#contact'>
					Contact
				</a>
				<a
					className='navlink'
					href='https://cdn.jsdelivr.net/gh/davidbalian/davidbalian.github.io/src/comps/Nav/David-Balian-Resume.pdf'
					target='_blank'
				>
					Resume
				</a>
			</div>
		</div>
	);
};

export default Nav;
