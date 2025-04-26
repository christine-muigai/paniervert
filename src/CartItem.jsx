import { useCart } from './CartContext';

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
        <p className="text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          className="w-16 p-1 border border-gray-300 rounded text-center"
        />
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}