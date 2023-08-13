const productRepository = require('../repositories/ProductRepository');

class ProductUseCase {
  async getProductsByVideoID(videoID) {
    return productRepository.getProductsByVideoID(videoID);
  }
}

module.exports = new ProductUseCase();
