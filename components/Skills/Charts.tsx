"use client";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Charts({
  content,
  config,
  data,
  animation,
}: {
  content: any;
  config?: ChartConfig;
  data: any;
  animation: boolean;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="items-center">
        <CardTitle>Skills Distribution</CardTitle>
        <CardDescription className="text-center">
          {content.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        {animation && (
          <ChartContainer
            config={config || chartConfig}
            className="mx-auto w-full h-full"
          >
            <RadarChart data={data}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <PolarAngleAxis dataKey="name" />
              <PolarGrid />
              <Radar
                dataKey="level"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.6}
                dot={{
                  r: 4,
                  fillOpacity: 1,
                }}
              />
            </RadarChart>
          </ChartContainer>
        )}
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm"></CardFooter> */}
    </Card>
  );
}
