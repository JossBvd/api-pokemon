const express = require('express');
let pokemons = require('./pokedex.json');

const app = express();
const port = 3000;

// -----------  Routes  --------------
app.get('/', (req,res) => res.send('Hello, Express !!'));

// Nombre de pokemons dans le pokedex
app.get('/api/pokemons', (req,res) => {
    res.send(`Il y a ${pokemons.length} pokemons dans le pokédex`)
})

// Récuperer les données d'un pokemon
app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    res.send(`Vous avez demandé le pokémon n°${id} : ${pokemon.name.french}`);
});




app.listen(port, () => console.log(`Notre application Node est démarrée sur : http:localhost:${port}`));