import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus(" Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus(data.message || " Failed to send message.");
            }
        } catch (err) {
            console.error("Error sending message:", err);
            setStatus(" Something went wrong. Please try again later.");
        }
    };

    return (
        <section
            id="contact"
            className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-green-100"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Contact Us
            </h2>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full mt-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="5"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                    Send Message
                </button>

                {status && (
                    <p className="mt-4 text-center font-medium text-green-700">
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
}
