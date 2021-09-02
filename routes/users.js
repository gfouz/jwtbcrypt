const  User = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    //res.send('ha llegado la peticion post...');
    // First Validate The Request
       var  user = new User({
            username: req.body.username,
            password: req.body.password
        });
        user.save();
        res.send(user);

});



module.exports = router;