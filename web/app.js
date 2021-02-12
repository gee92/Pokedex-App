const pokedex = document.getElementById("pokedex");


const fetchPokemon = () => {
    const promises = [];
    for(let i = 1; i <= 898; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name, 
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
     }))

        


        pokeDexDisplay(pokemon);
    });
        
};    

const pokeDexDisplay = (pokemon) => {
    console.log();
    const pokemonHTMLString = pokemon.map(poke => `
    <li class="card"> 
    <h2 class="card-title"> ${poke.id}. ${poke.name} </h2>
        <img class="card-image" src="${poke.image}"/>
        <p class="card-type"> Type: ${poke.type}</p>
    </li>`
    
    )
    .join('');

    pokedex.innerHTML = pokemonHTMLString; 

}


    fetchPokemon();