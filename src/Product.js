import React from 'react';
import './Product.css'; // Un file CSS specifico per lo stile del prodotto

const Product = ({ imageUrl, name, description, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
