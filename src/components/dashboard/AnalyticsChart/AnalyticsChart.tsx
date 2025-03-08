import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BlurContainer from "@components/ui/BlurContainer";

interface AnalyticsChartProps {
  title: string;
  data: {
    name: string;
    value: number;
  }[];
  color?: string;
  height?: number;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  title,
  data,
  color = "#3b82f6",
  height = 300,
}) => {
  return (
    <BlurContainer className="w-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient
                id={`color${title.replace(/\s+/g, "")}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "0.5rem",
                border: "none",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                backdropFilter: "blur(8px)",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={`url(#color${title.replace(/\s+/g, "")})`}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </BlurContainer>
  );
};

export default AnalyticsChart;
