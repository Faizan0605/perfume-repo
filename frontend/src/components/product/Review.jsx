import React, { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [form, setForm] = useState({ username: "", rating: 5, comment: "" });

    // Fetch all reviews on component mount
    useEffect(() => {
        axios.get("/api/reviews")
            .then(res => setReviews(res.data))
            .catch(err => console.error(err));
    }, []);

    // Handle form input changes
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("/api/reviews", form)
            .then(res => {
                setReviews([...reviews, res.data]);
                setForm({ username: "", rating: 5, comment: "" });
            })
            .catch(err => console.error(err));
    };

    return (

        <div className="flex flex-col items-center pb-60" style={{ backgroundColor: "#f6f4f2", backgroundImage: "url('/images/7.webp')" }}>
            <hr className="w-3/4 h-1 border-0 rounded mb-6" style={{ backgroundColor: "#d8926f" }}></hr>
            <div className="w-3/4 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Reviews</h3>

                {/* Add Review Form */}
                <form onSubmit={handleSubmit} className="mb-6 flex flex-col items-center w-full">
                    <div className="flex flex-col md:flex-row justify-evenly gap-3 mb-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Your Name"
                            value={form.username}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded"
                        />
                        <select
                            name="rating"
                            value={form.rating}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        >
                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Star</option>)}
                        </select>
                        <input
                            type="text"
                            name="comment"
                            placeholder="Your Review"
                            value={form.comment}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded w-full sm:w-auto"
                        />
                    </div>

                    <div className="w-full">
                        <button
                            type="submit"
                            className="text-white px-4 py-2 rounded hover:cursor-pointer w-full"
                            style={{ backgroundColor: "#d8926f" }}
                        >
                            Submit
                        </button>
                    </div>

                </form>

                <div className="w-full  flex flex-col gap-4">
                    {reviews.length === 0 ? (
                        <p>No reviews yet.</p>
                    ) : (
                        reviews.map((review) => (
                            <div
                                key={review._id}
                                className="shadow-black rounded p-4 shadow-sm bg-white opacity-70"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <strong className="text-gray-800">{review.username}</strong>
                                    <span className="text-yellow-500 font-semibold">{review.rating}⭐</span>
                                </div>
                                <p className="text-gray-600">{review.comment}</p>
                                <p className="text-xs text-gray-400 mt-2">
                                    {new Date(review.createdAt).toLocaleString()}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>


        </div>
    );
};

export default Reviews;
