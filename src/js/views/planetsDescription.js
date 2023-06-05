import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const PlanetsDescription = () => {
	const params = useParams();
	const { id } = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();

	useEffect(() => {
		if (store.planets == 0) return;
		const infoNew = store.planets.find((item) => item.result.uid == id);
		console.log(infoNew);
		setActualPage(infoNew);
	}, [params])

	return (
		<>
			<div className="row m-5">
				<div className="col-6 text-center">
					<img src={`https://starwars-visualguide.com/assets/img/planets/${actualPage?.result.uid}.jpg`} alt="..." id="sizeImagen" />

				</div>
				<div className="col-6 text-start text-warning">
					<h1 className="p-4 mb-3">{actualPage?.result.properties.name}</h1>
					<p className="p-2">{actualPage?.result.description}</p><p>What is the name of the galaxy in Star Wars? The Star Wars Galaxy. Its dimension is around 120,000 light-years or about 37,000 parsecs (with a parsec being equivalent to 3,258 light-years). It is estimated that some 100 quadrillion different life forms inhabit it.</p>
				</div>
			</div>
			<div className="container">
				<div className="row text-warning border-top border-warning">
					<div className="col">
						<h3>Climate</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.climate}</p>
					</div>
					<div className="col">
						<h3>Diameter</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.diameter}</p>
					</div>
					<div className="col">
						<h3>Population</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.population}</p>
					</div>
					<div className="col">
						<h3>Terrain:</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.terrain}</p>
					</div>
					<div className="col">
						<h3>Surface water</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.surface_water}</p>
					</div>
					<div className="col">
						<h3>Orbital period</h3>
						<p className="text-white ps-1">{actualPage?.result.properties.orbital_period}</p>
					</div>
				</div>
			</div>
		</>

	);
};
export default PlanetsDescription;