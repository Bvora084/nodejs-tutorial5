var mongoose = require('mongoose');

var artistSchema = mongoose.Schema({
    name:String,
    painting:String
})

module.exports = mongoose.model("artist",artistSchema)
