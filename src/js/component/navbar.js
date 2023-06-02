import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
		<nav className="navbar bg-black mb-3">
			<Link to="/">
				<img className="navbar-brand p-3" src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{width:'8'+'rem'}}/>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
						<button
							className="button-91 btn btn-dark dropdown-toggle"
							aria-expanded="false">
							Favorites 
						</button>
						</div>
			</div>
					
			</nav>
			</>
			);
};