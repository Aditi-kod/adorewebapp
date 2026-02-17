import { useState, useEffect } from "react";

export default function Dashboard() {
    const [bookings, setBookings] = useState([]);
    const [loadingBookings, setLoadingBookings] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await fetch("https://adorewebapp.onrender.com/api/bookings", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await res.json();
                if (res.ok) {
                    setBookings(data.bookings);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoadingBookings(false);
            }
        };

        fetchBookings();
    }, [token]);

    return (
        <section className="p-8 min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h2>

            {/* Bookings Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Your Bookings 🛒</h3>

                {loadingBookings ? (
                    <p>Loading your bookings...</p>
                ) : bookings.length > 0 ? (
                    <ul className="space-y-3">
                        {bookings.map((b) => (
                            <li
                                key={b._id}
                                className="flex justify-between items-center p-4 border rounded-lg"
                            >
                                <div>
                                    {Array.isArray(b.products) && b.products.length> 0 ?(
                                    b.products.map((p) => (
                                        <div key={p._id}>
                                            {p.name} - {p.quantity}
                                        </div>
                                    ))
                                    ): (
                                        <div>No products in this booking.</div>
                                    )}
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        b.status === "Confirmed"
                                            ? "bg-green-200 text-green-800"
                                            : "bg-yellow-200 text-yellow-800"
                                    }`}
                                >
                                    {b.status || "Pending"}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No bookings yet.</p>
                )}
            </div>
        </section>
    );
}
