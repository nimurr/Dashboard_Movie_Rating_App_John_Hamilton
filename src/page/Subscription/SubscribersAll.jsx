import React, { useState } from "react";

const SubscribersAll = () => {
    const [data, setData] = useState([
        {
            id: "01",
            name: "Tasmia Hassan",
            email: "tasmia@gmail.com",
            problem: "Subscription Issue",
            status: "Resolved",
            date: "2025-12-22",
            blocked: false,
        },
        {
            id: "02",
            name: "Naim Rahman",
            email: "naim@gmail.com",
            problem: "Payment Failed",
            status: "Pending",
            date: "2025-12-21",
            blocked: false,
        },
        {
            id: "03",
            name: "Arif Hossain",
            email: "arif@gmail.com",
            problem: "Account Access",
            status: "In Progress",
            date: "2025-12-20",
            blocked: true,
        },
    ]);

    /* ---------------- SEARCH ---------------- */
    const [searchName, setSearchName] = useState("");
    const [searchDate, setSearchDate] = useState("");

    const filteredData = data.filter((item) => {
        const matchName = item.name
            .toLowerCase()
            .includes(searchName.toLowerCase());
        const matchDate = searchDate ? item.date === searchDate : true;
        return matchName && matchDate;
    });

    /* ---------------- PAGINATION ---------------- */
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    /* ---------------- MODAL ---------------- */
    const [openModal, setOpenModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openViewModal = (user) => {
        setSelectedUser(user);
        setOpenModal(true);
    };

    const toggleBlock = () => {
        setData((prev) =>
            prev.map((item) =>
                item.id === selectedUser.id
                    ? { ...item, blocked: !item.blocked }
                    : item
            )
        );
        setSelectedUser((prev) => ({
            ...prev,
            blocked: !prev.blocked,
        }));
    };

    return (
        <div className="min-h-screen bg-[#1b3448] text-white px-6 py-6">
            <div className="flex gap-4 mb-4 flex-wrap justify-between">
                <h1 className="text-3xl font-semibold mb-6">
                    Subscribers List
                </h1>

                {/* Filters */}
                <div className="flex gap-4 mb-4 flex-wrap">
                    <input
                        placeholder="Search by Username"
                        value={searchName}
                        onChange={(e) => {
                            setSearchName(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-[#0f2435] px-4 py-2 rounded-md outline-none text-sm"
                    />
                    <input
                        type="date"
                        value={searchDate}
                        onChange={(e) => {
                            setSearchDate(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-[#0f2435] px-4 py-2 rounded-md outline-none text-sm"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#0f2435] rounded-xl overflow-x-auto">
                <table className="w-full min-w-[1000px] text-sm">
                    <thead className="bg-[#132f44] text-gray-300">
                        <tr>
                            <th className="py-4 px-4">R.ID</th>
                            <th className="py-4 px-4">Username</th>
                            <th className="py-4 px-4">Email</th>
                            <th className="py-4 px-4">Problem</th>
                            <th className="py-4 px-4">Status</th>
                            <th className="py-4 px-4">Date</th>
                            <th className="py-4 px-4">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {currentData.map((item) => (
                            <tr key={item.id}>
                                <td className="py-4 px-4">{item.id}</td>
                                <td className="py-4 px-4">{item.name}</td>
                                <td className="py-4 px-4">{item.email}</td>
                                <td className="py-4 px-4">{item.problem}</td>
                                <td className="py-4 px-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs ${item.blocked
                                                ? "bg-red-600"
                                                : item.status === "Resolved"
                                                    ? "bg-green-600"
                                                    : item.status === "Pending"
                                                        ? "bg-orange-500"
                                                        : "bg-blue-500"
                                            }`}
                                    >
                                        {item.blocked
                                            ? "Blocked"
                                            : item.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4">{item.date}</td>
                                <td className="py-4 px-4">
                                    <button
                                        onClick={() => openViewModal(item)}
                                        className="bg-orange-500 px-3 py-1 rounded-md text-xs"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-end gap-2 mt-4 text-sm">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="disabled:opacity-40"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-7 h-7 rounded-full ${currentPage === i + 1
                                    ? "bg-orange-500"
                                    : "bg-[#132f44]"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* ---------------- VIEW MODAL ---------------- */}
            {openModal && selectedUser && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-[#1a3c58] w-[420px] rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Subscriber Details
                        </h3>

                        <div className="space-y-2 text-sm text-gray-300">
                            <p className="flex items-center justify-between py-3"><b>Name:</b> {selectedUser.name}</p>
                            <p className="flex items-center justify-between py-3"><b>Email:</b> {selectedUser.email}</p>
                            <p className="flex items-center justify-between py-3"><b>Problem:</b> {selectedUser.problem}</p>
                            <p className="flex items-center justify-between py-3"><b>Status:</b> {selectedUser.status}</p>
                            <p className="flex items-center justify-between py-3"><b>Date:</b> {selectedUser.date}</p>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={toggleBlock}
                                className={`flex-1 py-2 rounded-md ${selectedUser.blocked
                                        ? "bg-green-600"
                                        : "bg-red-600"
                                    }`}
                            >
                                {selectedUser.blocked
                                    ? "Unblock"
                                    : "Block"}
                            </button>

                            <button
                                onClick={() => setOpenModal(false)}
                                className="flex-1 bg-gray-500 py-2 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscribersAll;
