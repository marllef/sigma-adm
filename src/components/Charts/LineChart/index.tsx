import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Props } from "react-apexcharts";
import styles from "~/components/Charts/LineChart/LineChart.module.css";

const Chart = dynamic<Props>(() => import("react-apexcharts"), {
  ssr: false,
});

export interface BarChartProps<T = any> {
  title?: string;
  options?: ApexOptions;
  series?: Array<T>;
}

const mOptions: ApexOptions = {
  chart: {
    id: `basic-line-${Math.round(Math.random())}`,
    width: "100%",
    parentHeightOffset: 15,
    zoom: {
      enabled: false,
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  dataLabels: {
    enabled: false,
  },

  colors: ["#0f4efb"],
};

export const LineChart = ({
  title = "Gráfico de Linhas",
  options,
  series,
  ...rest
}: BarChartProps) => {
  const [mSeries, setSeries] = useState([
    {
      name: "Entradas",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  const mOptions: ApexOptions = {
    chart: {
      id: `basic-line-${Math.round(Math.random())}`,
      width: "100%",
      parentHeightOffset: 15,
      zoom: {
        enabled: false,
      },
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
    colors: ["#0f4efb"],
  };

  useEffect(() => {
    if (series) {
      setSeries(series);
    }
  }, [series]);

  return (
    <>
      <div className={styles.chartContainer}>
        <Chart
          key={`basic-line-${Math.round(100 * Math.random())}`}
          series={mSeries}
          options={mOptions}
          type="line"
          {...rest}
        />
      </div>
    </>
  );
};
