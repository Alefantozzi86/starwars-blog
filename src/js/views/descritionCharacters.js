import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const DescriptionCharacters = () => {
	const params = useParams();
	const { id } = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();

	useEffect(() => {
		if (store.characters == 0) return;
		const infoNew = store.characters.find((item) => item.result.uid == id);
		console.log(infoNew);
		setActualPage(infoNew);
	}, [params])

	return (
		<>
			<div className="row m-5">
				<div className="col-6 text-center">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${actualPage?.result.uid}.jpg`} alt="..." id="sizeImagen" />

				</div>
				<div className="col-6 text-start text-warning">
					<h1 className="p-4 mb-3">{actualPage?.result.properties.name}</h1>
					<p className="p-2">{actualPage?.result.description} </p> <p>The famous Star Wars saga by director George Lucas. The saga centers on his knowledge of the Force, his fall to the Dark side, and ultimately his redemption and death.</p>
				</div>
			</div>
			<div className="container">
				<div className="row text-warning border-top border-warning">
					<div className="col">
						<h3>Gender:</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.gender}</p>
					</div>
					<div className="col">
						<h3>Height</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.height}</p>
					</div>
					<div className="col">
						<h3>Hair color</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.hair_color}</p>
					</div>
					<div className="col">
						<h3>Eye color</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.eye_color}</p>
					</div>
					<div className="col">
						<h3>Birth year</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.birth_year}</p>
					</div>
					<div className="col">
						<h3>Gender</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.gender}</p>
					</div>
				</div>
			</div>
		</>

	);
};