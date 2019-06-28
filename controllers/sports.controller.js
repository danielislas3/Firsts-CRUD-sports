const Sport = require('../models/Sport')

exports.findSports=(req,res,nex)=>{
  Sport.find()
    .then(sports=>res.render('sports/all',{sports}))
    .catch(err=>res.render('sports/all',err))
}

exports.viewCreateSport= (req,res,nex)=>{
  res.render('sports/create')
}

exports.createSport=(req,res,nex)=>{
  Sport.create({ ...req.body, players: Number(req.body.players)})
  .then(sport=>res.redirect('/sports'))
  .catch(err=>res.send(err))
}