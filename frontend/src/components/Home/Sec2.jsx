import React from 'react';
import { Link } from 'react-router-dom';

const Sec2 = () => {
    return (
        <div className="py-12 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                Best Perfume Collection
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
                {/* Product Card 1 */}
                <Link
                    to="/shop"
                    className="w-56 bg-gray-50 rounded-xl shadow-lg p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <img
                        src="/images/2.webp"
                        alt="Perfume 1"
                        className="w-40 h-40 mx-auto object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">Velour Mist</h3>
                    <p className="font-bold mt-1" style={{ color: "#d8926f" }}>$120</p>
                    <div className="flex justify-center mt-2 text-yellow-400">★★★★☆</div>
                </Link>

                {/* Product Card 2 */}
                <Link
                    to="/shop"
                    className="w-56 bg-gray-50 rounded-xl shadow-lg p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <img
                        src="/images/3.webp"
                        alt="Perfume 2"
                        className="w-40 h-40 mx-auto object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">Eternal Bloom</h3>
                    <p className="font-bold mt-1" style={{ color: "#d8926f" }}>$95</p>
                    <div className="flex justify-center mt-2 text-yellow-400">★★★★★</div>
                </Link>

                {/* Product Card 3 */}
                <Link
                    to="/shop"
                    className="w-56 bg-gray-50 rounded-xl shadow-lg p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <img
                        src="/images/4.webp"
                        alt="Perfume 3"
                        className="w-40 h-40 mx-auto object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">Golden Aura</h3>
                    <p className="font-bold mt-1" style={{ color: "#d8926f" }}>$150</p>
                    <div className="flex justify-center mt-2 text-yellow-400">★★★★☆</div>
                </Link>
            </div>
            <div className='flex justify-center mt-5 text-xl'>
                <Link to="/shop" >SEE ALL PERFUMES!</Link>
            </div>


        </div>
    );
};

export default Sec2;
