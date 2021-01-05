var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var CountrySchema = new Schema({
    img:[{ type: Buffer}],
    country:{type:String},
    name:{type:String,required:true,index:true}
    });
module.exports = mongoose.model('Venues',CountrySchema );