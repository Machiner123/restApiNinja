const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NinjaSchema = new Schema({
  name: {
    type:String,
    required: [true, 'Name field is required']
  },
  rank:{
    type: String
  },
  available:{
    type: Boolean,
    default: false
  }
  // add in geo location
})
// schema vs model: looks like a model is a schema instance,
// or a schema is a blue print for a model, but the model
// will be what we actually use, and a schema is an idea

// Ninja will pleuralize our 'ninja' model, which takes the
// NinjaSchema as second argument
const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja
