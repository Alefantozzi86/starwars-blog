import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const {favorites} = store;

	return (
		<nav className="navbar bg-dark sticky-top p-4 ">
			<div className="container">
				<Link to="/">
					<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{ width: '8' + 'rem' }} />
				</Link>
			</div>
			<div className="ml-auto">
				<div  className=" dropdown nav-item dropdown">
						<a className="button-91 nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="bg-secondary rounded ps-1 pe-1" width="1" height="1">{store.favorites.length}</span>
						</a>
						<ul className="dropdown-menu">
							{store.favorites.length == 0 ? <li className="ps-5">(No Favorites)</li> : favorites.map((item) => {
								return <li>
									<div className="dropdown-item" href="#">{item}<span className="material-symbols-outlined ps-4 text-center" onClick={() => { actions.delFavorites(item) }}>
										❌
									</span>	</div>
								</li>
							})}
						</ul>
					

				</div>

			</div>
		</nav>

	);
};