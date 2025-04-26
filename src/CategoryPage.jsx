import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/products?category=${category}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, [category]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold capitalize mb-4">{category}</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;