export default function ProductCard({ product }) {
    return (
      <div className="bg-white shadow rounded p-4">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    );
  }
  