/* eslint-disable react/prop-types */
import './Product.css';

const Product = ({ title, price }) => {
  return (
    <div className="product">
      <img
        src="https://source.unsplash.com/random/200x100/?product"
        alt="Product"
        className="product-image"
      />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
    </div>
  );
};


export default Product;
