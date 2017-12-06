const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())
//initialize routes
app.use('/api', require('./routes/api'))


app.listen(4000, function(){
  console.log('listening for requests at port 4000')

})
