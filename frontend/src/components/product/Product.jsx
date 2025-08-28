import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        axios.get("/api/perfumes")
            .then(res => setPerfumes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: "#f6f4f2" }}>
            <h1 className="text-4xl font-bold mb-8 text-center">Our Perfumes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {perfumes.map(p => (
                    <Link key={p._id} to={`/product/${p._id}`}>
                        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2 text-center">{p.name}</h2>
                            <p className="text-gray-500 mb-2 text-center">{p.brand}</p>
                            <p className="text-gray-600 mb-2 text-center">{p.description}</p>
                            <p className="font-bold text-lg mb-2" style={{ color: "#d8926f" }}>${p.price}</p>
                            {p.sizes && (
                                <div className="flex gap-2 mt-2">
                                    {p.sizes.map((size, index) => (
                                        <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Product;
