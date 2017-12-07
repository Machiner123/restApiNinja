const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



const app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', {
  useMongoClient: true,
})
mongoose.Promise = global.Promise
// parses post body
app.use(bodyParser.json())
//initialize routes
app.use('/api', require('./routes/api'))
//handle errors
app.use(function(err, req, res, next){
  console.log(err)
  res.status(422).send({error: err.message})
})


app.listen(4000, function(){
  console.log('listening for requests at port 4000')

})
