const mongoose = require('mongoose')
const Player = require('../models/Player')
const Team = require('../models/Team')
const Sport = require('../models/Sport')

const sports =[
  {
    name:'Baseball',
    description:'king of the sports',
    ballSize:'small',
    players:9, 

  },
  {
    name:'futbol',
    description:'Odiame mas',
    ballSize:'medium',
    players:22
  }
]

const teams =[{
name: 'Red Sox',
league: 'Major League'
},
{
  name:'FC Barcelona',
  league:'La liga'
}]
const players =[
  {firstName:'David',
  lastName:'Ortiz',
  alias:'Big Papi',
  age:43},
  {firstName:'Lionel',
  lastName:'Messi',
  alias:'La Pulga',
  age:32
  }
]

//coneccion a DB

mongoose.connect('mongodb://localhost/sports')

const createSports= Sport.create(sports)
const createTeams= Team.create(teams)
const createPlayers= Player.create(players)

Promise.all([createSports,createPlayers,createTeams])
.then(response=>{
  console.log('Data created: '+ response);
  
  mongoose.connection.close()
})
.catch(err=>{
console.log(err);
mongoose.connection.close()
})
