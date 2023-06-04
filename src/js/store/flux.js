const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			characters: [],
			planets:[],
			favorites: [],
		},

		actions: {
			
			getCharacters: async() =>{
				try {
					const store = getStore(); 
					const httpResponse = await fetch('https://www.swapi.tech/api/people/');
					if (!httpResponse.ok) {
					  return;
					}
					const Data = await httpResponse.json();
					Data.results.map(async (person) => {
					  const response = await fetch(person.url);
		  
					  const newCharacter = await response.json();
					  setStore({
						characters: [...store.characters, newCharacter],
					  });
					});
				  } catch (error) {
					console.log(error);
				}
        	},

			getPlanets: async() =>{
				try {
					const store = getStore(); 
					const httpResponse = await fetch('https://www.swapi.tech/api/planets/');
					if (!httpResponse.ok) {
					  return;
					}
					const actualData= await httpResponse.json();
					actualData.results.map(async (person) => {
					  const response = await fetch(person.url);
		  
					  const actualPlanet = await response.json();
					  setStore({
						planets: [...store.planets, actualPlanet],
					  });
					});
				  } catch (error) {
					console.log(error);
				}
				
        	},

			addFavorites: (name)=>{
				const store = getStore(); 
				setStore({favorites: [...store.favorites, name]})
			},

			delFavorites: (name) =>{
				const store = getStore();
				let newFavorites = store.favorites.filter((item)=>item !== name);
				setStore({favorites:newFavorites})
			},
		}
	};
};

export default getState;