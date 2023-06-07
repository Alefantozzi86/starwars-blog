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
					<h4 className="card-title text-white m-3">{item.result.properties.name}</h4>
					{type == "characters" ? (
						<>
						<div className="container ml-3">
							<h6 className="text-white ">Gender: {item.result.properties.gender}</h6>
							<h6 className="text-white">Hair color: {item.result.properties.hair_color}</h6>
							<h6 className="text-white">Eyes color: {item.result.properties.eye_color}</h6>
							  </div>
						</>
					) : (
						<>
						<div className="content pb- ml-3">
							<h6 className="text-white p-2">Population: {item.result.properties.population}</h6>
              				<h6 className="text-white p-2" >Terrain: {item.result.properties.terrain}</h6>
							</div>
						</>
					)}
						
					<div className="d-flex justify-content-between p-2">
						{type == "characters" ? (
							<>
								<a href="#" className="button-92 btn btn-outline-dark mt-2" onClick={() => navigate(`character/${item.result.uid}`)}>Learn more!</a>
							</>
						) : (
							<>
								<a href="#" className="button-92 btn btn-outline-dark mt-2" onClick={() => navigate(`planet/${item.result.uid}`)}>Learn more!</a>
							</>
						)}

						<button id="favorite" type="button" className=" button-92 btn btn-outline-warning mt-2 " onClick={() => { actions.addFavorites(item.result.properties.name) }}><span className="material-symbols-outlined">
							<i class="fa fa-heart"></i>
						</span></button>
						</div>
					</div>
				</div>
		</>
	)
}

export default SimpleCard;