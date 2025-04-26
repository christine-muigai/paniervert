import { Link } from 'react-router-dom';

export default function Home() {
  const categories = ['vegetables', 'fruits', 'cereals', 'dairy', 'bakery', 'meat','seafood'];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">PanierVert</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <Link
            key={cat}
            to={`/category/${cat}`}
            className="bg-green-100 p-6 rounded-lg shadow hover:bg-green-200 text-center capitalize"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
