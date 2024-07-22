'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, XAxis, YAxis, LabelList } from 'recharts';
import useFetchWakatime from '../../../../hooks/useFetchWakatime';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

  export interface DataItem {
    name: string;
    color: string;
    percent: number;
  }


const Editors = () => {
  const { data } = useFetchWakatime(
    'https://wakatime.com/share/@githubarj/e11cf9a9-1416-4824-b46b-374a23dbed39.json'
  );


  const sliced: DataItem[] = data ? data?.slice(0, 5) : [];
  const chartFormat = sliced.map((item: DataItem) => ({
    ...item,
    fill: item.color,
  }));

  const chartC: { [key: string]: { label: string; color: string } } = {};
  for (const element of sliced) {
    chartC[element.name] = {
      label: element.name,
      color: element.color,
    };
  }


  return (
    <Card className='w-full bg-slate-800 text-white border-none'>
      <CardHeader className='items-center '>
        <CardTitle>Code Editors Used</CardTitle>
        <CardDescription>Top in the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartC} className='min-h-[200]'>
          <BarChart
            accessibilityLayer
            data={chartFormat}
            layout='vertical'
            margin={{
              left: 10,
            }}
          >
            <YAxis
              dataKey='name'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey='percent' type='number' hide />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className='text-muted-foreground' />
              }
            />
            <Bar dataKey='percent' layout='vertical' radius={5}></Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Editors;
