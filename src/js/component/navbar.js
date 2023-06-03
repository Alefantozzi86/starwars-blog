import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
	const {store, actions } = useContext(Context);
	const {favorites} = store;
	return (
		<>
		<nav className="navbar bg-black mb-3">
			<Link to="/">
				<img className="navbar-brand p-3" src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{width:'8'+'rem'}}/>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
						<button className="button-91 btn btn-dark dropdown-toggle" aria-expanded="false">
							Favorites({store.favorites.lenght}) 
						</button>
						</div>
						<ul className="dropdown-menu justify-content-between">
							{!store.favorites.length == 0 ? (
								store.favorites.map((favorite, item) => {
									return <li
										className="d-flex flex-nowrap p-1"
										key={item}>
										<span className="dropdown-item">
											<Link
												className="favs-menu"
												style={{ textDecoration: 'none' }}
												to={favorite.url}>
												{favorite.name}
											</Link>
										</span>
										<span>
											<i className="dropdown-btn fa fa-trash pt-2 pe-2"
												onClick={() => {
													actions.delFavorite(index)
												}
												}>
											</i>
										</span>
									</li>
								}))
								: (<li className="text-center">No favorites</li>)
							}
						</ul>
			</div>
					
			</nav>
			</>
			);
};