import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) =>
    Object.values(state.cart.items).reduce((a, x) => a + x.qty, 0)
  );

  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-extrabold text-2xl tracking-tight">LeafyLane</Link>
        <nav className="flex items-center gap-4">
          <Link className="hover:underline" to="/products">Products</Link>
          <Link className="hover:underline" to="/cart">Cart</Link>
          <Link to="/cart" className="relative inline-flex items-center gap-2 font-medium px-3 py-2 rounded-xl border">
            🛒 <span className="text-sm">{count}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
