
interface ChartCardProps {
    title: string;
    children: React.ReactNode;
    dateRange?: React.ReactNode;
}



const BaseChartCard = ({ title, children, dateRange,  }: ChartCardProps)=>{
    return (
        <div className="bg-white rounded-2xl w-full ">
            <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-base font-semibold">{title}</h3>
                    {dateRange && <div>{dateRange}</div>}
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}



export default BaseChartCard