const fetchData = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
        const json = await response.json()
        console.log("aqui")
        return json
        // procesar el json obtenido
    } catch {
        console.log("Ocurrió un error")
    }

}
const getPokemon= async (coin) => {
    try {
        const response = await fetch(`${url_pokemons}${coin}`)
        const json = await response.json()
        console.log("Se atrapo el pokemon")
        return json
        // procesar el json obtenido
    } catch {
        console.log("Ocurrió un error")
    }
  }
fetchData
// const url = "https://api.coincap.io/v2/assets?limit=20";
// const url_coin = "https://api.coincap.io/v2";
const url_pokemons="https://pokeapi.co/api/v2/pokemon/"
// const url_pokemon="https://pokeapi.co/api/v2/pokemon/1"

function getPokemons() {
        return fetch(url_pokemons)
            .then((res) => res.json())
            .then((res) => res.data);
            
    
}
// function getPokemon(coin) {
//   return fetch(`${url_pokemon}/${coin}`)
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

export default {
    getPokemons,
    getPokemon,
    fetchData,
  };
  