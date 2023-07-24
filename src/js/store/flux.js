const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://www.swapi.tech/api/",
			favorites: [],
			characters: null,
			planets: null,
			chosenCharacter: null,
			chosenPlanet: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			chargeAllCharacters: async (url) => {

				const data = {
					options: {
						method: 'GET'
					}
				}

				try {
					const result = await fetch(url, data.options)
					const respJson = await result.json()
					console.log(respJson)
					setStore({ characters: respJson })

				} catch (error) {
					console.warn(error)
				}

			},
			chargeAllPlanets: async (url) => {

				const data = {
					options: {
						method: 'GET'
					}
				}
				try {
					const result = await fetch(url, data.options)
					const respJson = await result.json()
					console.log(respJson)
					setStore({ planets: respJson })

				} catch (error) {
					console.warn(error)
				}

			},
			chargeSpecificCharacter: async (characterPos) => {

				const { apiURL } = getStore();

				const data = {
					apiURL: `${apiURL}/people/${characterPos}`,
					options: {
						method: 'GET'
					}
				}

				const result = await fetch(data.apiURL, data.options)
				result.json().then(character => {
					console.log(character)
					setStore({
						chosenCharacter: character
					})
				})

			},
			chargeSpecificPlanet: async (planetPos) => {

				const { apiURL } = getStore();

				const data = {
					apiURL: `${apiURL}/planets/${planetPos}`,
					options: {
						method: 'GET'
					}
				}

				const result = await fetch(data.apiURL, data.options)
				result.json().then(planet => {
					console.log(planet)
					setStore({
						chosenPlanet: planet
					})
				})

			},
			getLocalFavorites: () => {
				if (localStorage.getItem('favoritos')) {
					let localFavorites = localStorage.getItem('favoritos');
					setStore({ favorites: JSON.parse(localFavorites) })
				}
			},
			saveLocalFavorites: () => {
				const { favorites } = getStore();

				localStorage.setItem('favoritos', JSON.stringify(favorites))
			},
			addFavorite: (element) => {

				const { favorites } = getStore();

				if (favorites.includes(element)) {
					getActions().deleteFavorite(element);
					toast.warn('Este personaje ya se encuentra en favoritos!')
					console.log('El personaje ya existe en favoritos')
				} else {

					setStore({
						favorites: favorites.concat(element)
					})
				}
				getActions().saveLocalFavorites();
			},
			deleteFavorite: (item) => {

				const { favorites } = getStore();

				setStore({
					favorites: favorites.filter(fav => fav !== item)
				})

				getActions().saveLocalFavorites();

			}
		}
	};
};

export default getState;
