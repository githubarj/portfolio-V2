'use client';

import { Pie, PieChart } from 'recharts';
import useFetchWakatime from '../../../../hooks/useFetchWakatime';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { DataItem } from './Editors';

const Languages = () => {
  const { data } = useFetchWakatime(
    'https://wakatime.com/share/@githubarj/805e6505-1fb8-4f23-808b-24e26f6a36c5.json'
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
    <Card className='flex flex-col bg-slate-800 text-white border-none'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Languages Used</CardTitle>
        <CardDescription>Top 5 over the last week</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartC}
          className='mx-auto aspect-square max-h-[280px]'
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey='percent' />} />
            <Pie data={chartFormat} dataKey='percent' />
            <ChartLegend
              content={<ChartLegendContent nameKey='name' />}
              className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Languages;
