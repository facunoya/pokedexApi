const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/bus', mainControllers.getHome)
router.get('/pokemon', mainControllers.getPokemon)
router.get('/buscar', mainControllers.buscarUno)
router.get('/', mainControllers.buscarTodos)
router.get('/todos2', mainControllers.todos2)

module.exports = router