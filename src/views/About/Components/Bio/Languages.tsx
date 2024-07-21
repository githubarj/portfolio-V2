"use client"

import { Pie, PieChart } from "recharts"
import useFetchWakatime from  "../../../../hooks/useFetchWakatime"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
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


  return (
    <Card className="flex flex-col bg-slate-800 text-white border-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages Used</CardTitle>
        <CardDescription>Top 5 over the last week</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer

          config={chartC}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
             <ChartTooltip
              content={<ChartTooltipContent nameKey="percent"  />}
            />
            <Pie data={chartFormat} dataKey="percent"  />
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Languages