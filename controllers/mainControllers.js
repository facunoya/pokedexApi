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
        fetch('https://pokeapi.co/api/v2/pokemon/29')
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
    buscarTodos: async (req, res) => {
        let acum = [];
        let todos = []
        fetch('https://pokeapi.co/api/v2/pokemon?')
        .then(pokedex => pokedex.json())
        .then(result => {
            let facu = result.results;
            facu.forEach(diego => {
                acum.push(diego.url)
            });
            Promise.all(acum.map(acum => 
                fetch(acum)
                .then(res => res.json())
                
            )).then(data => {
                for(let i = 0; i < data.length ; i++){
                    pokemon = {
                        nombre: data[i].name,
                        img: data[i].sprites.other.dream_world.front_default,
                        hp: data[i].stats[0].base_stat,
                        exp: data[i].base_experience,
                        move: data[i].moves[0].move.name
                    }
                    todos.push(pokemon)
                }
                console.log(todos)
                res.render('prueba', {"pokemons": todos})
            })


            // res.render('prueba', {"pokemons": acum})
            //Esta función me trae las url pero no me deja hacerle fetch a todas,   
            // for(let i = 0; i < acum.length; i++){
            //     fetch(acum[i])
            //     .then(respuesta => respuesta.json())
            //     .then(pokemones => {
            //         let pokemons = {
            //             name: pokemones.name,
            //             img: pokemones.sprites.other.dream_world.front_default,
            //             hp: pokemones.stats[0].base_stat,
            //             exp: pokemones.base_experience,
            //             move: pokemones.moves[0].move.name
            //         }
            //         todos.push(pokemons)
            //         res.send(pokemons)  
            //     })
            // } 
        }) 
        
    },
    todos2: (req, res) => {
        let nueva = Pokemon.buscarTodos()
        res.send(nueva)
    }
};

module.exports = Pokemon;