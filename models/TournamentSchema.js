var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var FixturesSchema = new Schema({
    img: { type: Buffer},
    tournamentname:{type:String,required:true,index:true},
    teams:[String],
    totalformats:{
        Test:{type:Number},
        T20:{type:Number},
        ODI:{type:Number}
     },
    teampoints:[{
             teamlogo:{type: Buffer},
             teamname:{type:String},
             points:{type:Number},
             played:{type:Number},
             won:{type:Number},
             lost:{type:Number},
             netrunrate:{type:mongoose.Types.Decimal128},
             tied:{type:Number},
             teamid:{type:String,default:""}
            }],
    winner:{type:String,default:"TBD"},
    manofthetoutnament:{type:String,default:"TBD"},
    manofthetoutnamentid:{type:String,default:""}
    });
module.exports = mongoose.model('TournamentFixtures',FixturesSchema );