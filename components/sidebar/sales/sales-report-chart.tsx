import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const data = [
    { month: "Jan", sales: 10000 },
    { month: "Feb", sales: 15000 },
    { month: "Mar", sales: 9000 },
    { month: "Apr", sales: 11000 },
    { month: "May", sales: 13000 },
    { month: "Jun", sales: 18000 },
    { month: "Jul", sales: 21000 },
    { month: "Aug", sales: 18000 },
    { month: "Sep", sales: 15000 },
    { month: "Oct", sales: 21000 },
    { month: "Nov", sales: 21000 },
    { month: "Dec", sales: 25000 },
];


const SalesReportChart = ()=>{
    return (
        <ResponsiveContainer width="100%" height={300} className="mt-14 text-sm">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8b5cf6" radius={[8, 8, 0, 0]} barSize={30}  />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SalesReportChart