//let xhr = new XMLHttpRequest();
//xhr.onreadystatechange = function(){

 //   if(this.readystate === 4 && this.status === 200){
  //      console.log(this.response);
//    }

//}

//xhr.open('GET','localhost:3000/');
//xhr.send();

const pokedex = 
document.getElementById('pokedex')
const pokeCount = 898;


const fetchPokemons = async() => {
    for(i = 1; i <= pokeCount; i++){
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = 
    `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    //createPokemoncard(pokemon);
}


fetchPokemons();

function createPokemonCard(pokemon) {
    const pokemonEl = Document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUppercase() + 
    pokemon.name.slice(1);

    const pokeInnerHTML =  `
        ${pokemon.id}
        `;
 

    pokemonEl.InnerHTML = pokeInnerHTML;

    pokedex.appendChild(PokemonEl);

}