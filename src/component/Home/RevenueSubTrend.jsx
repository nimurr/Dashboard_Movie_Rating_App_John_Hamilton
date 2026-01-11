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

const RevenueSubTrend = () => {
    const revenueSubscriberData = [
        { month: 'Jan', revenue: 800, subscribers: 120 },
        { month: 'Feb', revenue: 2100, subscribers: 142 },
        { month: 'Mar', revenue: 2000, subscribers: 135 },
        { month: 'Apr', revenue: 780, subscribers: 128 },
        { month: 'May', revenue: 1750, subscribers: 160 },
        { month: 'Jun', revenue: 1850, subscribers: 150 },
    ];

    return (
        <div className="w-full h-full max-w-6xl mx-auto rounded-2xl bg-[#1a3c58] p-6 text-white shadow-xl flex flex-col gap-5 justify-between">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h2 className="text-lg font-semibold">Revenue & Subscriber trend</h2>
                    <p className="text-sm text-slate-400">
                        Monthly revenue and user acquisition over the last 6 months
                    </p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-6 rounded bg-orange-500"></span>
                        <span className="text-slate-300">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-6 rounded bg-white"></span>
                        <span className="text-slate-300">Subscriber</span>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="h-[80%] ">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueSubscriberData}>
                        <CartesianGrid strokeDasharray="4 " stroke="gray" />
                        <XAxis
                            dataKey="month"
                            stroke="#94a3b8"
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            yAxisId="left"
                            stroke="#94a3b8"
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            stroke="#94a3b8"
                            tick={{ fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#7c2d12',
                                borderRadius: '8px',
                                border: 'none',
                                color: '#fff',
                            }}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="revenue"
                            stroke="#f97316"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="subscribers"
                            stroke="#ffffff"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueSubTrend;