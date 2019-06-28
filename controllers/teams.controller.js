const Team = require('../models/Team')

exports.findTeams=(req,res,nex)=>{
  Team.find()
    .then(teams=>res.render('teams/all',{teams}))
    .catch(err=>res.render('teams/all',err))
}