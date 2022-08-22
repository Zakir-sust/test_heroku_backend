const express = require('express')


const router = express.Router();

router.route('/')
.get((req,res)=>{
    res.send('at root route')
})

router.route('/other')
.get((req,res)=>{
    res.send('at other route')
})

module.exports = router