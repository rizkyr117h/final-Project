const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/product/:videoID', productController.getProductsByVideoID);

module.exports = router;
