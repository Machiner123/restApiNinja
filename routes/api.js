const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

// get list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  res.send({type:'GET'})
})
// add new ninja to database
// detail: create() instantiates ninja object, then
// saves it. Then, uses promise structure to second
// data as response
router.post('/ninjas', function(req, res, next){
  Ninja.create(req.body)
    .then((ninja)=>{
      res.send(ninja)
    }).catch(next)
})
// update a ninja in db
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then((ninja) => {
    res.send(ninja)
  })
  //res.send({type:'PUT'})
})
// delte ninja from db
router.delete('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndRemove(_id = req.params.id)
  .then((ninja) => {
    res.send(ninja)
  })
})

module.exports = router
