"use client"
import { TrendingUp } from "lucide-react"
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
    { month: "January", failed: 186, success: 80 },
    { month: "February", failed: 305, success: 200 },
    { month: "March", failed: 237, success: 120 },
    { month: "April", failed: 73, success: 190 },
    { month: "May", failed: 180, success: 130 },
    { month: "June", failed: 102, success: 140 },
    { month: "July", failed: 20, success: 40 },
    { month: "August", failed: 78, success: 123 },
    { month: "September", failed: 56, success: 320 },
    { month: "October", failed: 43, success: 149 },
    { month: "November", failed: 30, success: 80 },
    { month: "December", failed: 14, success: 67 },
]

const chartConfig = {
    failed: {
        label: "Failed Message",
        color: "hsl(var(--chart-1))",
    },
    success: {
        label: "Sent Message",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function Overview_Stats() {
    return (
        <div className="container mx-auto ">
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Message Chart - </CardTitle>
                    <CardDescription>
                        Showing total sent and Failed Message
                        {/*Showing total sent and Failed Message for the last 6 months*/}
                    </CardDescription>
                </CardHeader>


                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="failed" fill="var(--color-failed)" radius={4} />
                            <Bar dataKey="success" fill="var(--color-success)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>

                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                        <div className="grid gap-2">
                            <div className="flex items-center gap-2 font-medium leading-none">
                                Recent Message Stats <TrendingUp className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>

    )
}
