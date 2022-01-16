import type { NextPage } from "next";
import { MainGrid } from "~/components/ChartGrid/MainGrid";
import { BarChart } from "~/components/Charts/BarChart";
import { LineChart } from "~/components/Charts/LineChart";
import { List } from "~/components/List";

const mSeries = [
  {
    name: "Entradas",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

const Home: NextPage = () => {
  return (
    <div className="container">
      <MainGrid>
        <div className="w-full h-full  bg-white">A</div>
        <div className="w-full h-full bg-white">B</div>
        <div className="w-full h-full bg-white">C</div>

        <LineChart />
        <BarChart />
        <LineChart />
        <BarChart />
        <LineChart />
      </MainGrid>
    </div>
  );
};

export default Home;
