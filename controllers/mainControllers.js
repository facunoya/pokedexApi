const fs = require('fs');
const path = require('path');

const Pokemon = {
    getHome: (req, res) => {
        res.render('home')
    },
    getPokemon: (req, res) => {
        fetch('https://pokeapi.co/api/v2/pokemon?')
        .then(pokedex => pokedex.json())
        .then(result => {
            let pokemons = result.results
            console.log(pokemons)
            res.render('card', {"pokemons": pokemons})
        })
        // res.send('HOla MUNDO')
    },
    buscarUno: (req, res) => {
        fetch('https://pokeapi.co/api/v2/pokemon/37')
        .then(poke => poke.json())
        .then(pokemones => {
            let pokemons = {
                name: pokemones.name,
                img: pokemones.sprites.other.dream_world.front_default,
                hp: pokemones.stats[0].base_stat,
                exp: pokemones.base_experience,
                move: pokemones.moves[0].move.name
            }
            res.render('card2', {"pokemons": pokemons})
        })
    }, 
    buscarTodos: (req, res) => {
        let acum = [];
        fetch('https://pokeapi.co/api/v2/pokemon?')
        .then(pokedex => pokedex.json())
        .then(result => {
            let facu = result.results;
            facu.forEach(diego => {
                acum.push(diego.url)
            });
            res.send(acum)
            //Esta función me trae las url pero no me deja hacerle fetch a todas,    
           
        }) 
    }
};

module.exports = Pokemon;