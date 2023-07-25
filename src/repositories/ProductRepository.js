const Product = require('../models/ProductModel');

class ProductRepository {
  async getProductsByVideoID(videoID) {
    return Product.find({ videoID }, { _id: 0, productID: 1, linkProduct: 1, title: 1, price: 1 });
  }
}

module.exports = new ProductRepository();
