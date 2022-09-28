const express = require('express');
const route = express.Router();

// const services = require('../services/index')

// route.get('/', services.phoneService.getProduct)

route.get('/product', (req, res) => {
    res.send("product/product");
})

module.exports = route;