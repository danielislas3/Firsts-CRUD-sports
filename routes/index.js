const express = require('express');
const router  = express.Router();
const {findSports,viewCreateSport,createSport}=require('../controllers/sports.controller')
const {findPlayers}=require('../controllers/players.controllers')
const {findTeams}=require('../controllers/teams.controller')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
/* GET Sports page */
router.get('/sports',findSports)
//GET Create sports page
router.get('/sports/new',viewCreateSport)
//POST create sport page
router.post('/sports/new',createSport)
/* GET Teams page */
router.get('/teams',findTeams)
/* GET Players page */
router.get('/players',findPlayers)
module.exports = router;
