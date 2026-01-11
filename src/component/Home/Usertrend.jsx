'use client'
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const userTrendData = [
    { month: 'Jan', users: 60 },
    { month: 'Feb', users: 72 },
    { month: 'Mar', users: 65 },
    { month: 'Apr', users: 62 },
    { month: 'May', users: 80 },
    { month: 'Jun', users: 75 },
    { month: 'Jul', users: 68 },
    { month: 'Aug', users: 78 },
];

const recentActivities = [
    { text: 'User @johnsmith signed up', time: '2 min ago' },
    { text: 'Review posted for "The Dark Knight"', time: '5 min ago' },
    { text: 'Review flagged by 3 users', time: '15 min ago' },
    { text: '@sarahjones followed @mikechen', time: '1hr ago' },
    { text: '@sarahjones followed @mikechen', time: '1hr ago' },
    { text: '@sarahjones followed @mikechen', time: '1hr ago' },
];

const Usertrend = () => {
    return (
        <div className="space-y-6">
            {/* User Trend Chart */}
            <div className="rounded-2xl bg-[#1a3c58] p-6 text-white shadow-xl">
                <h2 className="text-lg font-semibold">User trend</h2>
                <p className="text-sm text-slate-400 mb-4">
                    Monthly user acquisition over the last 6 months
                </p>

                <div className="h-[260px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={userTrendData}>
                            <CartesianGrid strokeDasharray="4 4" stroke="gray" />
                            <XAxis dataKey="month" stroke="gray" />
                            <YAxis stroke="gray" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#7c2d12',
                                    borderRadius: '8px',
                                    border: 'none',
                                    color: '#fff',
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="users"
                                stroke="#ffffff"
                                strokeWidth={3}
                                dot={{ r: 5 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl bg-[#1a3c58] p-6 text-white shadow-xl">
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

                <ul className="space-y-4">
                    {recentActivities.map((item, index) => (
                        <li key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                                <span className="text-slate-200">{item.text}</span>
                            </div>
                            <span className="text-slate-400">{item.time}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Usertrend;