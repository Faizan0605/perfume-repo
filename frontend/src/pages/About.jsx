import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (<>
        <Navbar />
        <div className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-4xl font-bold mb-6">About Me</h1>

            {/* Personal Info */}
            <div className="mb-6 text-center">
                <p className="text-xl"><strong>Name:</strong> Faizan Hashmi</p>
                <p className="text-xl"><strong>College:</strong> National Institute of Technology Srinagar</p>
                <p className="text-xl"><strong>Degree:</strong> B.Tech in Electronics & Communication Engineering (ECE)</p>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-semibold mb-2">Tools & Technologies Used in this project</h2>
                <p>React, JavaScript, Node.js, Express, MongoDB, Mongooose, Email.js etc</p>
                <p><b>Note-</b>The design inspired from other website and images is taken from other sources</p>
            </div>

            {/* Contact Info */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
                <p >Email: faizefaizan0605@gmail.com</p>
                <p>Phone: +91-7084848228</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/faizanh0605" className="text-blue-600" target="_blank" rel="noreferrer">www.linkedin.com/in/faizanh0605</a></p>
                <p>GitHub: <a href="https://github.com/Faizan0605" className="text-blue-600" target="_blank" rel="noreferrer">https://github.com/Faizan0605</a></p>
            </div>
        </div>
    </>

    );
};

export default About;
