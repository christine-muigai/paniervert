import { useCart } from './CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-lg mb-4">Your cart is empty</p>
            <a 
              href="/shop" 
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      
      {cart.length > 0 && (
        <div>
          <CartSummary />
        </div>
      )}
    </div>
  );
}