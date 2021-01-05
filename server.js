var express = require('express');
var app = express();
var multer = require('multer')
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors');
var CountryModel = require('./models/countrySchema')
var PlayerModel = require('./models/playerprofile')
var Fixturesandresults = require('./models/matchfixtures')
var TournamnetTable = require('./models/TournamentSchema')
var Venue =require('./models/venues')
app.use(cors())
let port=process.env.PORT || 5000;
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
mongoose.connect("mongodb://meghesh:shenoy@cluster0-shard-00-00.01ynn.mongodb.net:27017,cluster0-shard-00-01.01ynn.mongodb.net:27017,cluster0-shard-00-02.01ynn.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-sgt0zy-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log("Connected to DB");
})
app.post('/uploads', jsonParser, (req, res) => {
    console.log(req.body)
    let data = Buffer.from(req.body.file, "base64")
    // console.log(JSON.stringify(req.body.file))    
    let datafrom = req.body.teampoints;
    for (let i = 0; i < datafrom.length; i++) {
        console.log("In here")
        let datas = Buffer.from(datafrom[i].teamlogo, "base64")
        datafrom[i].teamlogo = datas;
    }
    let record = {
        img: data,
        tournamentname: req.body.tournamentname,
        teams: req.body.teams,
        teampoints: datafrom,
        winner: req.body.winner,
        manofthetournament: req.body.manofthetournament,
        manofthetournament: req.body.manofthetournamentid
    }
    const newRecord = new TournamnetTable(record)
    newRecord.save().then(result => {
        res.json("Success")
    })
})
app.use(express.static(path.join(__dirname, 'reactapp/build')));

app.get('/countryinfo', (req, res) => {
    CountryModel.find({}).then(resultof => {
        res.json(resultof)
    })
})
app.get('/matchinfo', (req, res) => {
    Fixturesandresults.find({}).then(resultof => {
        res.json(resultof)
    })
})
app.get('/playerinfo', (req, res) => {
    PlayerModel.find({}).then(resultof => {
        res.json(resultof)
    })
})
app.get('/tournamentinfo', async (req, res) => {
   let tournament=await TournamnetTable.find({ })
   res.json(tournament)
}
)
app.put('/update/:id',jsonParser,(req, res) => {
    console.log(req.body)
    TournamnetTable.findById(req.params.id).then(candidate=>{
        console.log(req.params.id)
        candidate.teampoints[0].teamlogo=Buffer.from(req.body.team1logo, "base64")
        candidate.teampoints[1].teamlogo=Buffer.from(req.body.team2logo, "base64")
        candidate.save().then(()=>{console.log("Updated Successfully")
        res.json("Updated Successfully")})
        .catch(err=>{res.status(400).json(err)});
    })
    
});
app.get('/venueget',(req,res)=>{
    Venue.find({ }).then(result=>res.json(result))
})
app.post('/addvenue',jsonParser,(req,res)=>{
    let images=[]
    for(let i=0;i<req.body.img.length;i++)
    {
        images.push(Buffer.from(req.body.img[i], "base64"))
    }
    let venue=new Venue({
        img:images,
        country:req.body.country,
        name:req.body.name
    })
    venue.save().then(result => {
        res.json("Success");
    })
})
app.get('*', (request, response) => {

    response.sendFile(path.join(__dirname, 'reactapp','build','index.html'));
     
 });
app.listen(port, () => {
    console.log("Port Active");
})
