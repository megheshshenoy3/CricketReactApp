const mongoose=require('mongoose')
const Schema=require('mongoose').Schema;
const MatchResults=new Schema({
    tournamentname:{type:String,required:true},
    tournamentid:{type:String,required:true},
    team1Name:{type:String,required:true,index:true},
    team2Name:{type:String,required:true},
    matchDate:{type:Date,required:true},
    status:{type:String,required:true},
    winner:{type:String},
    manofthematch:{type:String},
    bowleroftheMatch:{type:String},
    bestfielder:{type:String},
    tosswon:{type:String},
    result:{type:String},
    team1totalruns:{type:Number},
    team2totalruns:{type:Number},
    totalovers:{type:String},
    team1overs:{type:String},
    team2overs:{type:String},
    team1wickets:{type:Number},
    team2wickets:{type:Number},
    Venue:{type:String},
    city:{type:String},
    time:{type:String},
    matchnumber:{type:Number},
    team1logo:{ type: Buffer},
    team2logo:{ type: Buffer},  
    team1battingstats:[{
        playername:{type:String},
        playerid:{type:String},
        fours:{type:String},
        runs:{type:String},
        sixes:{type:String},
        balls:{type:String},
        strikerate:{type:String},
        outby:{type:String},
        membertype:{type:String}
    }],
    team1bowlingstats:[{
        playername:{type:String},
        playerid:{type:String},
        extras:{type:Number},
        overs:{type:Number},
        runs:{type:Number},
        erate:{type:String},
        wickets:{type:Number}
    }],
    team2battingstats:[{
        playername:{type:String},
        playerid:{type:String},
        fours:{type:String},
        runs:{type:String},
        sixes:{type:String},
        balls:{type:String},
        strikerate:{type:String},
        outby:{type:String},
        membertype:{type:String}
    }],
    team2bowlingstats:[{
        playername:{type:String},
        playerid:{type:String},
        extras:{type:Number},
        overs:{type:Number},
        runs:{type:Number},
        erate:{type:String},
        wickets:{type:Number}
    }]
})
module.exports = mongoose.model('FixturesAndResults',MatchResults );