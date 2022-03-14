import React from "react";
import "./Nav.css";

const Nav = () => {
	return (
		<div className='navbar'>
			<a href='#home' className='logo-link'>
				<p className='logo'>DB</p>
			</a>
			<div className='navlinks'>
				<a className='navlink' href='#home'>
					Home
				</a>
				<a className='navlink' href='#about'>
					About
				</a>
				<a className='navlink' href='#projects'>
					Projects
				</a>
			</div>
		</div>
	);
};

export default Nav;
