import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const PLANTS = [
  { id: "snake", name: "Snake Plant", price: 1800, category: "Succulents",
    img: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=800&auto=format&fit=crop" },
  { id: "aloe", name: "Aloe Vera", price: 1500, category: "Succulents",
    img: "https://images.unsplash.com/photo-1614594950023-1c0f1a1625df?q=80&w=800&auto=format&fit=crop" },
  { id: "peace-lily", name: "Peace Lily", price: 2200, category: "Flowering",
    img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop" },
  { id: "monstera", name: "Monstera Deliciosa", price: 3500, category: "Foliage",
    img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c1?q=80&w=800&auto=format&fit=crop" },
  { id: "pothos", name: "Golden Pothos", price: 1700, category: "Foliage",
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop" },
  { id: "orchid", name: "Orchid", price: 4000, category: "Flowering",
    img: "https://images.unsplash.com/photo-1610465299990-6b5d3f3b1d76?q=80&w=800&auto=format&fit=crop" },
];

export default function ProductListing() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const groups = PLANTS.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shop Houseplants</h2>
      <p className="text-gray-600 mb-6">Browse by category and add your favorites to the cart.</p>

      <div className="space-y-10">
        {Object.entries(groups).map(([category, plants]) => (
          <section key={category}>
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {plants.map((p) => {
                const added = !!items[p.id];
                return (
                  <div key={p.id} className="rounded-2xl overflow-hidden border shadow-sm bg-white flex flex-col">
                    <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="font-semibold text-lg">{p.name}</div>
                      <div className="text-gray-700 mb-4">Rs {p.price.toLocaleString()}</div>
                      <button
                        disabled={added}
                        onClick={() =>
                          dispatch(addToCart({ id: p.id, name: p.name, price: p.price, img: p.img }))
                        }
                        className={`mt-auto px-4 py-2 rounded-xl border font-medium ${
                          added ? "opacity-50 cursor-not-allowed" : "hover:shadow"
                        }`}
                      >
                        {added ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
