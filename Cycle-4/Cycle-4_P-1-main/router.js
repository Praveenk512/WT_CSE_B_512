const express = require('express');
const router = express.Router();
router.get('/get',(req,res)=>{
res.status(201).send("HELLO THI IS GET REQUEST");
});
router.post('/post',(req,res)=>{
    res.status(201).send("HELLO THI IS POST REQUEST");
});

module.exports = router;