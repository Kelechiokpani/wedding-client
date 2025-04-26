import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const pieData = [
    { name: "milo", value: 61, color: "#f97316" },
    { name: "Diaper", value: 15, color: "#a855f7" },
    { name: "Apple", value: 13, color: "#14b8a6" },
    { name: "Novel", value: 8, color: "#eab308" },
];

const TopRankedProductChart =()=> {
    return (
        <div className="flex flex-col items-center ">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={({percent}) => `${(percent * 100).toFixed(0)}%`}
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full px-4">
                {pieData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                <span className="inline-block w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></span>
                            <span className="text-sm text-gray-700">{item.name}</span>
                            <span className="text-sm font-semibold" style={{color: item.color}}>
                                     {item.value}%
                </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopRankedProductChart