const express = require('express');

const router = express.Router();

router.get("/sounds/allHeartSounds", (req, res) => {
    res.json({data: "hello"});
});

router.post("/sounds/allHeartSounds",(req,res)=>{
    res.json({data:"world"});
});

router.post("/sounds/originalHeartSounds",(req,res)=>{
    res.json({data:"haha"});
});


module.exports = router;