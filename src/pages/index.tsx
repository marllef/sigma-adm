import type { NextPage } from "next";
import { MainGrid } from "~/components/ChartGrid/MainGrid";
import { BarChart } from "~/components/Charts/BarChart";
import { LineChart } from "~/components/Charts/LineChart";
import { DataState } from "~/components/DataStat";
import { List } from "~/components/List";

const Home: NextPage = () => {
  return (
    <MainGrid>
      <DataState
        label="Entradas"
        type="input"
        data={{ daily: 5, value: 500, montly: 0, unit: "R$" }}
      />
      <DataState
        label="Saídas"
        type="output"
        data={{ daily: 1, value: 250, montly: 0, unit: "R$" }}
      />
      <DataState
        label="Faturamento Médio"
        type="total"
        data={{ daily: 10, value: 3000, montly: 0, unit: "R$" }}
      />

      <LineChart />
      <BarChart />
      <LineChart />
      <BarChart />
      <LineChart />
    </MainGrid>
  );
};

export default Home;
