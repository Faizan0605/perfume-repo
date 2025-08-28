import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i1opgoi', 'template_fj7fwf7', form.current, {
                publicKey: 'Yh-uXs1dFmwjUc4-c',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <section
            className="relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/images/1.webp')", backgroundColor: "#d8926f" }}
        >
            <div className="w-3/4 bg-white bg-opacity-90 shadow-lg rounded p-8">
                {/* Newsletter Section */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Stay Updated
                </h2>
                <p className="text-gray-600 text-center mb-10">
                    Subscribe to our newsletter and be the first to know about new arrivals,
                    exclusive offers, and special discounts crafted just for you.
                </p>

                <form className="space-y-6" ref={form} onSubmit={sendEmail} >
                    <div className="flex flex-col md:flex-row gap-4 ">
                        <input
                            name="user_name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded focus:outline-none"
                        />
                        <input
                            name="user_email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border rounded focus:outline-none"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            value="Send"
                            className="w-full  hover:cursor-pointer text-white  font-semibold py-4 px-8 rounded transition duration-300"
                            style={{ backgroundColor: "#d8926f" }}

                        >
                            Subscribe
                        </button>
                    </div>
                </form>

                {/* Footer-like Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-zinc-500">
                    {/* Store */}
                    <div>
                        <h3 className="font-bold mb-3">Store</h3>
                        <p>123 Luxury Street, Perfume City, Country</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold mb-3">Contact</h3>
                        <p>Email: info@perfumestore.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>

                    {/* Hours */}
                    <div className='hidden lg:block'>
                        <h3 className="font-bold mb-3">Hours</h3>
                        <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                        <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                    </div>

                    {/* Follow */}
                    <div className='hidden lg:block'>
                        <h3 className="font-bold mb-3">Follow</h3>
                        <p>Facebook | Instagram | Twitter | Pinterest</p>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Form;
