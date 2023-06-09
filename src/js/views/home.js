import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import SimpleCard from "../component/simpleCard";

const Home = () => {

	const { store, actions } = useContext(Context);
	console.log(store.characters);
	console.log(store.planets);
	return (
		<>
			<div className="container">
				<div className="container-cards">
					<div className="text-start text-danger m-4">
						<h1>Characters</h1>
						<div className="row scroll scrollbar">
							{
								store.characters.map((people) => (
									<SimpleCard key={people.result._id} item={people} type={"characters"} />
								))}

						</div>
					</div>

					<div className="text-start text-danger m-4">
						<h1>Planets</h1>
						<div className="row scroll scrollbar">
							{
								store.planets.map((planet) => (
									<SimpleCard key={planet.result._id} item={planet} type={"planets"} />
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Home;
