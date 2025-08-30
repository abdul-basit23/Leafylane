import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove, clear } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const list = Object.values(useSelector((state) => state.cart.items));
  const totalCount = list.reduce((a, x) => a + x.qty, 0);
  const total = list.reduce((a, x) => a + x.qty * x.price, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">Your Cart</h2>
      <p className="text-gray-600 mb-6">Total items: <span className="font-semibold">{totalCount}</span></p>

      {list.length === 0 ? (
        <div className="p-8 border rounded-2xl text-center bg-white">
          <p className="mb-4">Your cart is empty.</p>
          <Link to="/products" className="px-4 py-2 rounded-xl border inline-block">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[2fr,1fr] gap-6 items-start">
          <div className="space-y-4">
            {list.map((item) => (
              <div key={item.id} className="flex gap-4 border rounded-2xl p-3 bg-white">
                <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-600">Unit price: Rs {item.price.toLocaleString()}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={() => dispatch(decrease(item.id))} className="px-3 py-1 rounded-xl border">-</button>
                    <span className="px-3 py-1 rounded-xl border bg-gray-50">{item.qty}</span>
                    <button onClick={() => dispatch(increase(item.id))} className="px-3 py-1 rounded-xl border">+</button>
                    <button onClick={() => dispatch(remove(item.id))} className="ml-4 px-3 py-1 rounded-xl border">Delete</button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Subtotal</div>
                  <div className="font-semibold">Rs {(item.qty * item.price).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>

          <aside className="border rounded-2xl p-4 bg-white sticky top-24">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Items</span>
              <span className="font-semibold">{totalCount}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Total</span>
              <span className="font-semibold">Rs {total.toLocaleString()}</span>
            </div>
            <button
              onClick={() => alert("Checkout coming soon!")}
              className="w-full mb-3 px-4 py-2 rounded-2xl border font-semibold"
            >
              Checkout
            </button>
            <button onClick={() => navigate("/products")} className="w-full px-4 py-2 rounded-2xl border">
              Continue Shopping
            </button>
            <button onClick={() => dispatch(clear())} className="w-full mt-3 px-4 py-2 rounded-2xl border">
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
