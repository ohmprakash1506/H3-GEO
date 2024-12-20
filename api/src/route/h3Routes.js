const express = require('express');
const H3Controller = require('../controllers/h3-controllers');

const router = express.Router();
const h3Controller = new H3Controller();

router.get('/getH3Index', h3Controller.getH3Index)

module.exports = router