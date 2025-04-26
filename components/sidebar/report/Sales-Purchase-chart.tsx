"use client";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

const data = [
    { name: "Jan", Purchase: 400000, Sales: 450000 },
    { name: "Feb", Purchase: 380000, Sales: 470000 },
    { name: "Mar", Purchase: 350000, Sales: 340000 },
    { name: "Apr", Purchase: 320000, Sales: 270000 },
    { name: "May", Purchase: 300000, Sales: 330000 },
    { name: "Jun", Purchase: 310000, Sales: 180000 },
    { name: "Jul", Purchase: 400000, Sales: 440000 },
    { name: "Aug", Purchase: 340000, Sales: 360000 },
    { name: "Sep", Purchase: 330000, Sales: 340000 },
    { name: "Oct", Purchase: 310000, Sales: 270000 },
    { name: "Nov", Purchase: 330000, Sales: 280000 },
    { name: "Dec", Purchase: 320000, Sales: 310000 },
];


const SalesPurchaseChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300} className="mt-14 text-sm">
                <BarChart width={800} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Purchase" fill="#c084fc" radius={5} barSize={20} />
                    <Bar dataKey="Sales" fill="#8b5cf6" radius={5} barSize={20} />
                </BarChart>
        </ResponsiveContainer>
    );
};

export default SalesPurchaseChart;
