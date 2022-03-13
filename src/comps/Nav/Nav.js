import React from "react";
import "./Nav.css";

const Nav = () => {
	return (
		<div className='navbar'>
			<div className='logo-cont'>
				<p className='logo'>DB</p>
			</div>
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
