const router=require('express').Router();
router.get('/',(req,res)=>{
    
    Candidate.find({ }).then(result=>{
        res.json(result);
    })
    .catch(err=>{
        res.json(err);
    })
})