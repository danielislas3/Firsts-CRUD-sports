const Sport = require('../models/Sport')

exports.findSports=(req,res,nex)=>{
  Sport.find()
    .then(sports=>res.render('sports/all',{sports}))
    .catch(err=>res.render('sports/all',err))
}