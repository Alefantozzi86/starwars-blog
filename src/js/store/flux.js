const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			characters: [],
			planets: [],
			favorites: [],
		},

		actions: {

			getCharacters: async () => {
				try {
					const store = getStore();
					const httpResponse = await fetch('https://www.swapi.tech/api/people/');
					if (!httpResponse.ok) {
						return;
					}
					const addData = await httpResponse.json();
					addData.results.map(async (person) => {
						const response = await fetch(person.url);

						const addCharacter = await response.json();
						setStore({
							characters: [...store.characters, addCharacter],
						});
					});
				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				try {
					const store = getStore();
					const httpResponse = await fetch('https://www.swapi.tech/api/planets/');
					if (!httpResponse.ok) {
						return;
					}
					const addData = await httpResponse.json();
					addData.results.map(async (person) => {
						const response = await fetch(person.url);

						const addPlanet = await response.json();
						setStore({
							planets: [...store.planets, addPlanet],
						});
					});
				} catch (error) {
					console.log(error);
				}

			},

			addFavorites: (name) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] })
			},

			delFavorites: (name) => {
				const store = getStore();
				let newFavorites = store.favorites.filter((item) => item !== name);
				setStore({ favorites: newFavorites })
			},
		}
	};
};

export default getState;