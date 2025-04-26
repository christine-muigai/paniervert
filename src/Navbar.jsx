import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">PanierVert</Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-green-200">Home</Link>
          <Link to="/shop" className="hover:text-green-200">Shop</Link>
          <Link to="/cart" className="hover:text-green-200 flex items-center">
            Cart
            {totalItems > 0 && (
              <span className="ml-1 bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>
          
          {currentUser ? (
            <>
              <Link to="/admin" className="hover:text-green-200">Admin</Link>
              <button 
                onClick={logout}
                className="hover:text-green-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-green-200">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}