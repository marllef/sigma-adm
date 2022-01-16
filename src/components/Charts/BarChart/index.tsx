import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Props } from "react-apexcharts";
import styles from "~/components/Charts/BarChart/BarChart.module.css";

const Chart = dynamic<Props>(() => import("react-apexcharts"), {
  ssr: false,
});

export interface BarChartProps<T = any> {
  title?: string;
  options?: ApexOptions;
  series?: Array<T>;
}

export const BarChart = ({
  title = "Gráfico de Barras",
  options,
  series,
}: BarChartProps) => {
  const [mSeries, setSeries] = useState([
    {
      name: "Entradas",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "Saídas",
      data: [40, 50, 55, 60, 59, 70, 80, 101],
    },
  ]);

  const mOptions: ApexOptions = {
    chart: {
      id: `basic-bar-${Math.round(100 * Math.random())}`,
      width: "100%",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: title,
    },

    colors: ["#2bfb0f", "#ff4545"],
  };

  useEffect(() => {
    if (series) {
      setSeries(series);
    }
  }, [series]);
  return (
    <>
      <div
        key={`basic-bar-${Math.round(100 * Math.random())}`}
        className={styles.chartContainer}
      >
        <Chart series={mSeries} options={mOptions || options} type="bar" />
      </div>
    </>
  );
};
