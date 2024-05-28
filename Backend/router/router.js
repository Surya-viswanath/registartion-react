const express=require('express');
const Createform = require('../controller/form');


const router= express.Router();

router.route('/form').post(Createform)
