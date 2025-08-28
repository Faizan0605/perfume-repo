import React from "react";
import { Link } from "react-router-dom";

const Sec4 = () => {
    return (
        <div className="flex justify-center py-16 " style={{ backgroundColor: "#f6f4f2" }}
        >
            <div className="w-3/4 flex flex-col md:flex-row items-center md:items-start ">

                {/* Left Side */}
                <div className="w-full md:w-1/2 h-150 flex justify-center md:justify-start items-center">
                    <div className="w-8/9 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                            Blossom Collection
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Explore our exclusive collection of luxury perfumes that blend tradition with modern elegance. Every fragrance is carefully composed to capture emotions, reflect your individuality, and create moments of confidence and charm. Whether you seek a refreshing burst for the day or a deep, alluring aroma for the evening, our scents are designed to elevate your personality and leave a lasting memory.
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block  text-white text-xs font-semibold py-4 px-8 rounded transition duration-300"
                            style={{ backgroundColor: "#d8926f" }}
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div
                        className="w-8/9 h-64 md:h-150 bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: "url('/images/3.webp')" }}
                    ></div>
                </div>

            </div>
        </div>
    );
};

export default Sec4;
