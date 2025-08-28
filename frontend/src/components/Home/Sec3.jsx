import React from 'react';
import { Link } from "react-router-dom";
const Sec3 = () => {
    return (
        <div className="py-16 flex justify-center">
            <div className="relative w-3/4 flex justify-center items-center">

                {/* Bottom Image Div */}
                <div
                    className="w-6/9 h-105 rounded-2xl shadow-lg bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/7.webp')" }}
                ></div>

                {/* Top Overlapping Image Div */}
                <div
                    className="w-full h-80 absolute top-12 mx-auto rounded-2xl shadow-2xl border-4 border-white bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/5.webp')" }}
                ></div>

                {/* Text Div */}
                <div className="absolute  my-auto mx-auto w-full z-20  p-6 rounded-xl flex justify-between ">
                    <div className='w-1/2'>

                    </div>
                    <div className='w-1/2 flex flex-col justify-center'>
                        <h3 className="text-sm  text-zinc-400">40% OFF</h3>
                        <h2 className="mt-2 text-4xl font-bold text-gray-900">
                            Luxury Perfume Collection
                        </h2>
                        <p className="mt-4  font-semibold  cursor-pointer " style={{ color: "#d8926f" }}
                        >

                            <Link to="/shop">Shop Now-</Link>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Sec3;
