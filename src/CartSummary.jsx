import { useCart } from './CartContext';

export default function CartSummary() {
  const { totalPrice, clearCart } = useCart();

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between font-medium text-lg mb-6">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button
        onClick={clearCart}
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mb-4"
      >
        Clear Cart
      </button>
      <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
        Checkout
      </button>
    </div>
  );
}