var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var PlayerSchema = new Schema({
    img: { type: Buffer},
    name:{type:String,required:true,index:true},
    teamsPlayedfor:[{type:String,required:true}],
    nationality:{type:String,required:true},
    battingstyle:{type:String,required:true},
    bowlingstyle:{type:String,required:true},
    type:{type:String},
    placeofbirth:{type:String,required:true,default:"N.A"},
    born:{type:String,required:true,default:"N.A"},
    about:{type:String,required:true},
    BattingRankingODI:{type:String},
    BattingRankingTest:{type:String},
    BattingRankingT20:{type:String},
    BowlingRankingODI:{type:String},
    BowlingRankingTest:{type:String},
    BowlingRankingT20:{type:String},
    });
module.exports = mongoose.model('Players',PlayerSchema);