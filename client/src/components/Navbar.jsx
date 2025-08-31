import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-green-700 text-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-3xl font-bold">Hometown Harvest</h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <ul className="flex gap-6">
                            <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
                            <li><a href="#products" className="hover:text-yellow-300">Products</a></li>
                            <li><a href="#news" className="hover:text-yellow-300">News</a></li>
                            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
                        </ul>
                        <a href="/dashboard">
                            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                                Dashboard
                            </button>
                        </a>
                        <a href="/login">
                            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                                Login
                            </button>
                        </a>
                        <a href="/profile">
                            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                                My Profile
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12" // X icon
                                            : "M4 6h16M4 12h16M4 18h16" // Hamburger
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <ul className="flex flex-col gap-2">
                        <li><a href="#services" className="hover:text-yellow-300 block">Services</a></li>
                        <li><a href="#products" className="hover:text-yellow-300 block">Products</a></li>
                        <li><a href="#news" className="hover:text-yellow-300 block">News</a></li>
                        <li><a href="#contact" className="hover:text-yellow-300 block">Contact</a></li>
                    </ul>
                    <div className="flex gap-2 mt-2">
                        <a href="/dashboard" className="flex-1">
                            <button className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                                Dashboard
                            </button>
                        </a>
                        <a href="/login" className="flex-1">
                            <button className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                                Login
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
