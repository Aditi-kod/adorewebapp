const services = [
    { name: "Healthcare", icon: "💊" },
    { name: "Education", icon: "📚" },
    { name: "Farming Help", icon: "🌾" },
    { name: "Water Supply", icon: "🚰" },
    { name: "Transport", icon: "🚌" },
];

export default function Services() {
    return (
        <section
            id="services"
            className="w-full bg-gray-50 py-20"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Our Services
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-6xl">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300"
                    >
                        <div className="text-4xl md:text-5xl">{s.icon}</div>
                        <p className="mt-3 text-base md:text-lg font-medium">{s.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
