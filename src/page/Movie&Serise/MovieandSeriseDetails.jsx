import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const MovieandSeriseDetails = () => {
    /* ------------------ DATA ------------------ */
    const reviews = Array.from({ length: 23 }, (_, i) => ({
        id: i + 1,
        name: "Tasmia Hassan",
        email: "tasmia@gmail.com",
        rate: "09",
        review:
            "This movie feels very woked, don’t really felt bad and all over concept is LGBTQ related.",
        date: "22-12-2025",
    }));

    /* ------------------ PAGINATION ------------------ */
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(reviews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = reviews.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    /* ------------------ MODAL ------------------ */
    const [openModal, setOpenModal] = useState(false);
    const selectedReview = reviews[0];

    return (
        <div className="min-h-screen bg-[#1b3448] text-white px-6 py-6">
            {/* Back */}
            <div className="mb-4 text-sm text-gray-300 cursor-pointer">
                The Little Mermaid
            </div>

            {/* Details */}
            <div className="bg-[#1a3c58] rounded-xl p-6 flex gap-6 items-center">
                <div className="w-[170px] relative">
                    <img
                        src="https://comicsagogo.wordpress.com/wp-content/uploads/2011/11/tintin-movie-poster-horizontal.jpg"
                        alt=""
                        className="rounded-lg h-64 object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-orange-500 text-xs px-2 py-1 rounded-full">
                        8.5
                    </span>
                </div>

                <div className="flex-1">
                    <h1 className="text-2xl font-bold">THE OFFICE 🚨</h1>
                    <p className="text-sm text-gray-400 mt-1">
                        TV Series • S1–S9 • 22m
                    </p>

                    <div className="mt-4">
                        <h3 className="font-semibold mb-1">Overview</h3>
                        <p className="text-sm text-gray-300">
                            A mockumentary on a group of typical office workers.
                        </p>
                    </div>

                    <div className="mt-4 text-sm text-gray-300">
                        <p>
                            <span className="font-semibold">Genre:</span> Comedy,
                            Sitcom
                        </p>
                        <p>
                            <span className="font-semibold">Year:</span> 2005–2013
                        </p>
                    </div>
                </div>
            </div>

            {/* Review Header */}
            <div className="mt-8 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Review & Rating</h2>

                <div className="flex gap-2">
                    <div className="bg-[#0f2435] px-3 py-2 flex items-center rounded-md">
                        <input
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm"
                        />
                        <IoSearch />
                    </div>
                    <button className="bg-[#0f2435] px-3 py-2 rounded-md">
                        <BsCalendar2Date />
                    </button>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="bg-orange-500 px-4 py-2 rounded-md text-sm"
                    >
                        Edit Rating
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#1a3c58] rounded-xl mt-4 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-[#132f44] text-gray-300">
                        <tr>
                            <th className="py-4 px-4 text-left">No</th>
                            <th className="py-4 px-4 text-left">Username</th>
                            <th className="py-4 px-4 text-left">Email</th>
                            <th className="py-4 px-4 text-left">Rate</th>
                            <th className="py-4 px-4 text-left">Review</th>
                            <th className="py-4 px-4 text-left">Date</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {currentData.map((item, index) => (
                            <tr key={item.id}>
                                <td className="py-4 px-4">
                                    {startIndex + index + 1}
                                </td>
                                <td className="py-4 px-4">{item.name}</td>
                                <td className="py-4 px-4">{item.email}</td>
                                <td className="py-4 px-4">{item.rate}</td>
                                <td className="py-4 px-4 truncate max-w-xs">
                                    {item.review}
                                </td>
                                <td className="py-4 px-4">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end gap-2 mt-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-3 py-1 text-gray-300 disabled:opacity-40"
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-7 h-7 rounded-full ${currentPage === i + 1
                            ? "bg-orange-500"
                            : "bg-[#0f2435]"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-3 py-1 text-gray-300 disabled:opacity-40"
                >
                    Next
                </button>
            </div>

            {/* ---------------- MODAL ---------------- */}
            {openModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-[#1a3c58] rounded-xl w-[700px] p-6 relative">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-4 right-4 text-xl"
                        >
                            <IoClose />
                        </button>

                        <div className="space-y-5">
                            <img
                                src="/Auth/user.png"
                                className="w-40 h-40 rounded-full object-cover mx-auto"
                            />

                            <div className="flex-1 space-y-3 text-sm">
                                <p>
                                    <span className="font-semibold">Name:</span>{" "}
                                    <input className="bg-[#0f2435] py-3 mt-2 px-2 rounded-lg w-full " type="text" defaultValue={selectedReview.name} name="" id="" />
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Email Address:
                                    </span>
                                    <input className="bg-[#0f2435] py-3 mt-2 px-2 rounded-lg w-full " type="text" defaultValue={selectedReview.email} name="" id="" />
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Number of Rates:
                                    </span>
                                    <input className="bg-[#0f2435] py-3 mt-2 px-2 rounded-lg w-full " type="text" defaultValue={selectedReview.rate} name="" id="" />
                                </p>
                                <p>
                                    <span className="font-semibold">Review:</span>
                                    <input className="bg-[#0f2435] py-3 mt-2 px-2 rounded-lg w-full " type="text" defaultValue={selectedReview.review} name="" id="" />
                                </p>
                                <p>
                                    <span className="font-semibold">
                                        Review Date:
                                    </span> 
                                    <input className="bg-[#0f2435] py-3 mt-2 px-2 rounded-lg w-full " type="date"  name="" id="" />
                                </p>
                                <button className="bg-orange-500 px-8 py-3 rounded-md"> Update </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieandSeriseDetails;
