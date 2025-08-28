import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section
            className="relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/8.webp')",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-white/0"></div>

            {/* Content */}
            <div className="relative w-3/4 flex flex-col justify-start">
                <p className="text-md md:text-base text-zinc-400 mb-3">
                    Discover your signature scent with our exclusive collection
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-10 text-zinc-800">
                    Perfume Store
                </h1>
                <div>
                    <Link
                        to="/shop"
                        className=" text-white text-xs font-semibold py-4 px-8 rounded transition duration-300"
                        style={{ backgroundColor: "#d8926f" }}
                    >
                        SHOP NOW!
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
