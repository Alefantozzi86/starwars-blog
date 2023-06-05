import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

const SimpleCard = ({ item, type, url }) => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	return (
		<>
			<div className="card-img mb-4 m-4  border border-0 " style={{ width: 18 + 'rem' }}>
				<img src={`https://starwars-visualguide.com/assets/img/${type}/${item.result.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body rounded  border border-0">
					<h5 className="card-title text-white">{item.result.properties.name}</h5>
					{type == "characters" ? (
						<>
							<p>Gender: {item.result.properties.gender}</p>
							<p>Hair color: {item.result.properties.hair_color}</p>
							<p>Eyes color: {item.result.properties.eye_color}</p>
						</>
					) : (
						<>
							<p>Population: {item.result.properties.population}</p>
              				<p>Terrain: {item.result.properties.terrain}</p>
							
						</>
					)}
					<div className="d-flex justify-content-between">
						{type == "characters" ? (
							<>
								<a href="#" className="button-92 btn btn-outline-dark" onClick={() => navigate(`character/${item.result.uid}`)}>Learn more!</a>
							</>
						) : (
							<>
								<a href="#" className="button-92 btn btn-outline-dark" onClick={() => navigate(`planet/${item.result.uid}`)}>Learn more!</a>
							</>
						)}

						<button id="favorite" type="button" className=" button-92 btn btn-outline-warning" onClick={() => { actions.addFavorites(item.result.properties.name) }}><span className="material-symbols-outlined">
							<i class="fa fa-heart"></i>
						</span></button>
					</div>
				</div>
			</div>
		</>
	)
}

export default SimpleCard;