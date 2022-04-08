//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: String,
    author: String
});
BookSchema.path('_id');
module.exports = BookSchema;