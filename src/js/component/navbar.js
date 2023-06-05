import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const { favorites } = store;

	return (
		<nav className="navbar bg-dark sticky-top p-4 ">
			<div className="container">
				<Link to="/">
					<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{ width: '8' + 'rem' }} />
				</Link>
			</div>
			<div className="ml-auto">
				<div className=" dropdown nav-item dropdown">
					<a className="button-91 nav-link dropdown-toggle text-warning" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg-danger rounded ps-1 pe-1" width="1" height="1">{store.favorites.length}</span>
					</a>
					<ul className="dropdown-menu" id="dropdow">
						{store.favorites.length == 0 ? <li className="ps-5">(No Favorites)</li> : favorites.map((item) => {
							return <li>
								{item}<span className="material ps-4" onClick={() => { actions.delFavorites(item) }}>
									❌
								</span>
							</li>
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};