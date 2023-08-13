import Product from './Product';
import './ProductList.css';
import { useLoaderData } from 'react-router-dom';

const ProductList = () => {
  const data = useLoaderData();
  const products = data.product;

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p className="no-product-message">There is No Product</p>
      ) : (
        products.map((product, index) => (
          <Product key={index} title={product.title} price={product.price} />
        ))
      )}
    </div>
  );
};

export default ProductList;
