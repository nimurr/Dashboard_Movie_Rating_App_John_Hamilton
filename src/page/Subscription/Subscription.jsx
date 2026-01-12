import React, { useState } from "react";
import { FaChevronLeft, FaCrown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Subscription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [mode, setMode] = useState("add"); // add | edit

    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            name: "Standard",
            price: 9,
            description: "Basic yearly subscription",
        },
    ]);

    const [formData, setFormData] = useState({
        id: null,
        name: "",
        price: "",
        description: "",
    });

    /* ---------- OPEN MODAL ---------- */
    const openAddModal = () => {
        setMode("add");
        setFormData({ id: null, name: "", price: "", description: "" });
        setOpenModal(true);
    };

    const openEditModal = (sub) => {
        setMode("edit");
        setFormData(sub);
        setOpenModal(true);
    };

    /* ---------- SAVE ---------- */
    const handleSave = () => {
        if (!formData.name || !formData.price) return;

        if (mode === "add") {
            setSubscriptions([
                ...subscriptions,
                { ...formData, id: Date.now() },
            ]);
        } else {
            setSubscriptions(
                subscriptions.map((sub) =>
                    sub.id === formData.id ? formData : sub
                )
            );
        }

        setOpenModal(false);
    };

    /* ---------- DELETE ---------- */
    const handleDelete = (id) => {
        setSubscriptions(subscriptions.filter((s) => s.id !== id));
    };

    return (
        <div className="min-h-screen bg-[#1b3448] text-white  md:px-6 py-6">
            {/* Header */}
            <div className="flex justify-between flex-wrap items-center mb-6">
                <h1 className="text-3xl font-semibold flex items-center gap-2 cursor-pointer">
                    <FaChevronLeft className="text-2xl" /> Subscription
                </h1>

                <div className="flex gap-2">
                    <Link to="/subscribers" className="bg-orange-500 px-4 py-2 rounded-md text-sm">
                        Subscribers List
                    </Link>
                    <button
                        onClick={openAddModal}
                        className="bg-blue-500 px-4 py-2 rounded-md text-sm"
                    >
                        Add Subscription
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="flex gap-6 flex-wrap">
                {subscriptions.map((sub) => (
                    <div
                        key={sub.id}
                        className="bg-[#1a3c58] w-[260px] rounded-xl p-5 shadow-lg"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full">
                                <FaCrown className="size-6" />
                            </span>
                            <h2 className="text-xl font-semibold">{sub.name}</h2>
                        </div>

                        <p className="text-5xl font-bold text-orange-500">
                            ${sub.price}.00{" "}
                            <span className="text-sm text-gray-400">
                                Per Year
                            </span>
                        </p>

                        <div className="mt-6 space-y-2">
                            <button
                                onClick={() => openEditModal(sub)}
                                className="w-full border border-gray-500 py-2 rounded-md text-sm hover:bg-[#132f44]"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(sub.id)}
                                className="w-full bg-gray-500 hover:bg-red-600 py-2 rounded-md text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ---------------- MODAL ---------------- */}
            {openModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-[#1a3c58] w-[420px] rounded-xl p-6 relative">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-4 right-4 text-xl"
                        >
                            <IoClose />
                        </button>

                        <h3 className="text-lg font-semibold mb-4">
                            {mode === "add"
                                ? "Add Subscription"
                                : "Edit Subscription"}
                        </h3>

                        <div className="space-y-4 text-sm">
                            <div>
                                <label className="block mb-1 text-gray-300">
                                    Enter subscription name
                                </label>
                                <input
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full bg-[#0f2435] px-3 py-2 rounded-md outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-300">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            price: e.target.value,
                                        })
                                    }
                                    className="w-full bg-[#0f2435] px-3 py-2 rounded-md outline-none"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-300">
                                    Description
                                </label>
                                <textarea
                                    rows="3"
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            description: e.target.value,
                                        })
                                    }
                                    className="w-full bg-[#0f2435] px-3 py-2 rounded-md outline-none resize-none"
                                />
                            </div>

                            <button
                                onClick={handleSave}
                                className="w-full bg-orange-500 py-2 rounded-md font-medium"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Subscription;
