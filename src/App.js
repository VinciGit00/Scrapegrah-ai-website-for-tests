import React, { useState, useEffect } from 'react';
import Product from './Product';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Logic to fetch products from a database or JSON file would go here
    const sampleProducts = [
         {
        imageUrl: 'https://picsum.photos/200/300?random=1',
        name: 'T-shirt with Owl Print',
        description: 'Comfortable cotton t-shirt featuring an owl print.',
        price: '€20.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=2',
        name: 'Classic Leather Wallet',
        description: 'Genuine leather wallet with multiple compartments.',
        price: '€35.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=3',
        name: 'Canvas Backpack',
        description: 'Spacious canvas backpack perfect for daily use.',
        price: '€45.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=4',
        name: 'Stainless Steel Water Bottle',
        description: 'Durable stainless steel water bottle, eco-friendly.',
        price: '€15.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=5',
        name: 'Wooden Desk Organizer',
        description: 'Handcrafted wooden desk organizer with compartments.',
        price: '€25.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=6',
        name: 'Ceramic Coffee Mug',
        description: 'Stylish ceramic coffee mug, microwave safe.',
        price: '€10.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=7',
        name: 'Smartphone Stand',
        description: 'Adjustable smartphone stand for hands-free viewing.',
        price: '€8.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=8',
        name: 'Soft Cotton Bath Towel',
        description: 'Luxuriously soft cotton bath towel for spa-like comfort.',
        price: '€18.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=9',
        name: 'Wireless Bluetooth Earphones',
        description: 'High-quality wireless Bluetooth earphones with noise cancellation.',
        price: '€50.00'
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=10',
        name: 'Glass Fruit Bowl',
        description: 'Elegant glass fruit bowl to display fruits beautifully.',
        price: '€30.00'
      }
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem 0' }}>
        <h2>My Store</h2>
      </nav>
      
      {/* Product Catalog */}
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Our Product Catalog</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.name} style={{ margin: '1rem', maxWidth: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0', marginBottom: '0.5rem', color: '#333' }}>{product.name}</h3>
              <p style={{ margin: '0', color: '#666' }}>{product.description}</p>
              <p style={{ margin: '0', color: '#333', fontWeight: 'bold' }}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
