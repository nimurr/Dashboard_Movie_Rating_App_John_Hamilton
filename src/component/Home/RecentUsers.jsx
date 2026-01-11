
import React from 'react';

const users = [
    {
        no: 1,
        username: 'johnsmith',
        email: 'john@example.com',
        phone: '+1 234 567 890',
        reviews: 12,
        joinDate: '12 Jan 2024',
        lastActive: '2 min ago',
        status: 'Active',
    },
    {
        no: 2,
        username: 'sarahjones',
        email: 'sarah@example.com',
        phone: '+1 987 654 321',
        reviews: 5,
        joinDate: '03 Feb 2024',
        lastActive: '1 hr ago',
        status: 'Inactive',
    },
    {
        no: 3,
        username: 'mikechen',
        email: 'mike@example.com',
        phone: '+44 123 456 789',
        reviews: 18,
        joinDate: '22 Mar 2024',
        lastActive: '5 min ago',
        status: 'Active',
    },
];

const RecentUsers = () => {
    return (
        <div className="w-full rounded-2xl overflow-x-auto bg-[#1a3c58] px-6 text-white shadow-xl mb-5">
            <div className=" min-w-[1000px]">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-slate-400 border-b border-slate-700">
                            <th className="py-5">No</th>
                            <th className="py-5">Username</th>
                            <th className="py-5">Email</th>
                            <th className="py-5">Phone Number</th>
                            <th className="py-5">Reviews</th>
                            <th className="py-5">Join Date</th>
                            <th className="py-5">Last Active</th>
                            <th className="py-5">Status</th>
                            <th className="py-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.no}
                                className="border-b border-slate-800 transition"
                            >
                                <td className="py-5">{user.no}</td>
                                <td className="py-5 font-medium">@{user.username}</td>
                                <td className="py-5 text-slate-300">{user.email}</td>
                                <td className="py-5">{user.phone}</td>
                                <td className="py-5">{user.reviews}</td>
                                <td className="py-5">{user.joinDate}</td>
                                <td className="py-5 text-slate-300">{user.lastActive}</td>
                                <td className="py-5">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === 'Active'
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'bg-red-500/20 text-red-400'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-3">
                                    <button className="text-orange-400 hover:underline text-xs">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentUsers;