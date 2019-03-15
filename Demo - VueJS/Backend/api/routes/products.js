const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GEt request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.Material,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling Post requests to /products',
        createdProduct: product
    });
});

module.exports = router;