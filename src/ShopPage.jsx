import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { useCart } from './CartContext';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductList 
        products={products} 
        onAddToCart={addToCart} 
      />
    </div>
  );
}