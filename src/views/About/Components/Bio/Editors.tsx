"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis,LabelList } from "recharts"
import useFetchWakatime from  "../../../../hooks/useFetchWakatime"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import  {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const Editors = () => {

const {data} = useFetchWakatime ("https://wakatime.com/share/@githubarj/e11cf9a9-1416-4824-b46b-374a23dbed39.json")


  const sliced = data ? data?.slice(0, 5) : []
  const chartFormat = sliced.map(item => ({
    ...item,
    fill: item.color
  }))

  const chartC = {}
  for (const element of sliced)  {
  chartC[element.name] = {
    label: element.name,
    color : element.color
  }
}

console.log(chartC)

  console.log(chartFormat)

  return (
    <Card className="w-full bg-slate-800 text-white border-none">
      <CardHeader>
        <CardTitle>Code Editors Used</CardTitle>
        <CardDescription>Top in the last week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartC} className="min-h-[200]">
          <BarChart
            accessibilityLayer
            data={chartFormat}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
        
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={0}
              axisLine={false}
      
            />
            <XAxis dataKey="percent" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent     className="text-muted-foreground" />}
            />
            <Bar dataKey="percent" layout="vertical" radius={5} >
            
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Editors