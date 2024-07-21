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
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]



const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const Languages = () => {

const {data} = useFetchWakatime ("https://wakatime.com/share/@githubarj/805e6505-1fb8-4f23-808b-24e26f6a36c5.json")


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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Languages Used</CardTitle>
        <CardDescription>Top 5 in the last week</CardDescription>
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
            hide
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={0}
              axisLine={false}
      
            />
            <XAxis dataKey="percent" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent  />}
            />
            <Bar dataKey="percent" layout="vertical" radius={5} >
                <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-[#ffff]"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Languages