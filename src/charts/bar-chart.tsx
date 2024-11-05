import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { Bar_Chart } from "@/constants/index.data";
import {AgChartOptions} from "ag-charts-community";

export const BarChart = ():React.JSX.Element => {
  const [options] = useState<AgChartOptions>({
    title: {
      text: "Sotuvning yillik hisoboti.",
    },
    subtitle: {
      text: "Zet-market.uz",
    },
    data: Bar_Chart,
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey: "totalPrice",
        yName: "totalPrice",
      },
      
    ],
  });

  return <AgCharts options={options} />;
};