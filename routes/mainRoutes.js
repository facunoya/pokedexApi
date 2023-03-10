const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.getHome)
router.get('/pokemon', mainControllers.getPokemon)
router.get('/buscar', mainControllers.buscarUno)
router.get('/buscarTodos', mainControllers.buscarTodos)

module.exports = router