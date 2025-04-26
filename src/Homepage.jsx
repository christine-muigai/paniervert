export default function HomePage() {
  return (
    <div>
      <div className="bg-green-600 text-white py-16 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to PanierVert</h1>
          <p className="text-xl">Your one-stop shop for fresh groceries</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Featured products would be rendered here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Fresh Vegetables</h3>
            <p className="text-gray-600 mb-4">Locally sourced and organic</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Seasonal Fruits</h3>
            <p className="text-gray-600 mb-4">Sweet and juicy</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Healthy Grains</h3>
            <p className="text-gray-600 mb-4">Nutritious and delicious</p>
          </div>
        </div>
      </div>
    </div>
  );
}