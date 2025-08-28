import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
                        Perfume Store
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}>
                            Home
                        </NavLink>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}>
                            Shop
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}>
                            Contact
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"}>
                            About
                        </NavLink>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-pink-600 focus:outline-none"
                        >
                            {/* Hamburger / Close icon */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pb-3 space-y-2 bg-white shadow">
                    <NavLink to="/" className="block text-gray-700 hover:text-pink-600">Home</NavLink>
                    <NavLink to="/shop" className="block text-gray-700 hover:text-pink-600">Shop</NavLink>
                    <NavLink to="/about" className="block text-gray-700 hover:text-pink-600">About</NavLink>
                    <NavLink to="/contact" className="block text-gray-700 hover:text-pink-600">Contact</NavLink>
                </div>
            )}
        </nav>
    );
}
