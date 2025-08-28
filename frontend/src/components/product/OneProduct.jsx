import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar"
import Review from "./Review";

const OneProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/api/perfumes/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;


    const galleryImages = product.images && product.images.length > 0
        ? product.images
        : [product.image, product.image, product.image];

    return (<>
        <Navbar />

        <div className="min-h-80vh p-8 bg-gray-100 md:flex md:justify-evenly gap-8 " style={{ backgroundColor: "#f6f4f2", backgroundImage: "url('/images/6.webp')" }}>


            {/* Image Gallery */}
            <div className="sm:flex gap-4 mb-6 ">
                <img
                    src={galleryImages[0]}
                    alt={`${product.name} main`}
                    className="w-96 h-96 object-cover rounded mb-2"
                />
                <div className="flex flex-col gap-2">
                    {galleryImages.slice(1, 5).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${product.name} ${index + 1}`}
                            className="w-24 h-24 object-cover rounded"
                        />
                    ))}
                </div>
            </div>

            <div>
                <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
                {/* Description & Price */}
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="font-bold text-xl mb-4" style={{ color: "#d8926f" }}>${product.price}</p>

                {/* Sizes */}
                {product.sizes && (
                    <div className="flex gap-2 mb-4">
                        {product.sizes.map((size, index) => (
                            <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">{size}</span>
                        ))}
                    </div>
                )}

                {/* Purchase Button */}
                <button className=" text-white px-6 py-2 rounded  transition hover:cursor-pointer" style={{ backgroundColor: "#d8926f" }}>
                    Purchase
                </button>

                {/* Share Button */}
                <button
                    className="ml-4 bg-rose-500 text-white px-6 py-2 rounded hover:bg-rose-400 hover:cursor-pointer transition"
                    onClick={() => navigator.share ? navigator.share({ title: product.name, url: window.location.href }) : alert("Share not supported")}
                >
                    Share
                </button>
            </div>

        </div>
        <Review />
    </>
    );
};

export default OneProduct;
