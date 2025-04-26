import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import CartPage from './CartPage';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            {currentUser && (
              <Route path="/admin" element={<AdminPage />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
