import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleSelectProduct = (product) => {
    if (isEditing) {
      if (window.confirm('You have unsaved changes. Discard them?')) {
        setIsEditing(false);
        setSelectedProduct(product);
      }
    } else {
      setSelectedProduct(product);
    }
  };

  const handleCreateProduct = () => {
    if (isEditing) {
      if (window.confirm('You have unsaved changes. Discard them?')) {
        setIsEditing(false);
        setIsCreating(true);
        setSelectedProduct({
          title: '',
          description: '',
          price: 0,
          category: 'fruits', // Default to fruits instead of vegetables
          image: ''
        });
      }
    } else {
      setIsCreating(true);
      setSelectedProduct({
        title: '',
        description: '',
        price: 0,
        category: 'fruits', // Default to fruits instead of vegetables
        image: ''
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (productData) => {
    const method = isCreating ? 'POST' : 'PATCH';
    const url = isCreating 
      ? 'http://localhost:3000/products' 
      : `http://localhost:3000/products/${selectedProduct.id}`;

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then(res => res.json())
      .then(data => {
        if (isCreating) {
          setProducts([...products, data]);
        } else {
          setProducts(products.map(p => p.id === selectedProduct.id ? data : p));
        }
        setSelectedProduct(data);
        setIsEditing(false);
        setIsCreating(false);
      })
      .catch(err => console.error('Error saving product:', err));
  };

  const handleCancel = () => {
    if (isCreating) {
      setSelectedProduct(null);
      setIsCreating(false);
    } else {
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`http://localhost:3000/products/${selectedProduct.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setProducts(products.filter(p => p.id !== selectedProduct.id));
          setSelectedProduct(null);
        })
        .catch(err => console.error('Error deleting product:', err));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products</h1>
          <button
            onClick={handleCreateProduct}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            New Product
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {products.map(product => (
            <div
              key={product.id}
              onClick={() => handleSelectProduct(product)}
              className={`p-3 mb-2 rounded cursor-pointer ${selectedProduct?.id === product.id ? 'bg-green-100' : 'hover:bg-gray-100'}`}
            >
              <h3 className="font-medium">{product.title}</h3>
              <p className="text-sm text-gray-600 truncate">{product.description}</p>
              <span className="inline-block mt-1 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-2">
        {selectedProduct ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {isEditing || isCreating ? (
              <ProductForm
                product={selectedProduct}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mt-1">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleEdit}
                      className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-64 object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                    <p className="text-2xl font-bold text-green-600 mb-4">
                      ${selectedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-lg">Select a product to view or edit details</p>
          </div>
        )}
      </div>
    </div>
  );
}