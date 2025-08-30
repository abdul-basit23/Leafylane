import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="min-h-[80vh] grid place-items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop)",
      }}
    >
      <div className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">LeafyLane</h1>
        <p className="text-lg leading-relaxed mb-6">
          We are a cozy online houseplant boutique bringing oxygen, calm vibes,
          and low-maintenance greens to every home. From hardy succulents to
          lush foliage, we curate plants that thrive indoors—and make your
          space feel alive.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 rounded-2xl shadow border font-semibold hover:shadow-lg"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
