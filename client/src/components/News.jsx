const newsList = [
    { title: "New Market Opening", date: "2025-08-15", desc: "A new local market will open for farmers and villagers." },
    { title: "Healthcare Camp", date: "2025-08-20", desc: "Free health checkups for all villagers at the community hall." },
    { title: "Scholarship Program", date: "2025-09-01", desc: "Applications are open for village students' scholarships." },
];

export default function News() {
    return (
        <section
            id="news"
            className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Latest News
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {newsList.map((n, i) => (
                    <div
                        key={i}
                        className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-xl font-semibold">{n.title}</h3>
                        <p className="text-sm text-gray-500">{n.date}</p>
                        <p className="mt-3 text-gray-700">{n.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
