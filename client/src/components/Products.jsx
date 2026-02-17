import { useState } from "react";

const products = [
    { id: 1, name: "Rice", price: "₹40/kg", icon: "🍚" },
    { id: 2, name: "Wheat", price: "₹35/kg", icon: "🌾" },
    { id: 3, name: "Milk", price: "₹50/litre", icon: "🥛" },
    { id: 4, name: "Vegetables", price: "₹30/kg", icon: "🥕" },
    { id: 5, name: "Butter", price: "₹80/pack", icon: "🧈" },
    { id: 6, name: "Bread", price: "₹25", icon: "🍞" },
];

export default function Products() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const addToCart = async (product) => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");

            const res = await fetch("https://adorewebapp.onrender.com/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                     products: [
                        {
                            name: product.name,
                            quantity: 1, 
                            },],
                }),
            });

            const data = await res.json();

            if (res.ok) {
                alert(`${product.name} booked successfully!`);
            } else {
                alert(data.message || "Failed to book product.");
            }
        } catch (error) {
            console.error("Booking error:", error);
            alert("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section id="products" className="p-8 bg-green-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Available Products</h2>

            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white p-4 rounded-lg shadow text-center"
                        >
                            <div className="text-3xl">{p.icon}</div>
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-gray-600">{p.price}</p>

                            <button
                                onClick={() => addToCart(p)}
                                disabled={loading}
                                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                            >
                                {loading ? "Booking..." : "Add to Cart"}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 col-span-2 md:col-span-3 text-center">
                        No products found
                    </p>
                )}
            </div>
        </section>
    );
}
