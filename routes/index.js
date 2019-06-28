const express = require('express');
const router  = express.Router();
const {findSports}=require('../controllers/sports.controller')
const {findPlayers}=require('../controllers/players.controllers')
const {findTeams}=require('../controllers/teams.controller')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
/* GET Sports page */
router.get('/sports',findSports)
/* GET Teams page */
router.get('/teams',findTeams)
/* GET Players page */
router.get('/players',findPlayers)
module.exports = router;
