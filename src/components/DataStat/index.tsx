import { ReactNode, useCallback } from "react";
import { LineChart } from "../Charts/LineChart";
import styles from "./DataStat.module.css";

interface DataScheme {
  value: number;
  unit: string;
  montly: number;
  daily: number;
}

export interface DataStateProps {
  children?: ReactNode;
  label: string;
  data: DataScheme;
  type?: "input" | "output" | "total";
}

export const DataState = ({
  children,
  label = "Dados",
  data,
  type = "total",
}: DataStateProps) => {
  const { daily, unit, montly, value } = data;

  const validateValues = useCallback((value) => {
    return value ? value : "--";
  }, []);

  return (
    <>
      <div className={styles.stat}>
        <div className={styles.stat__label}>{label}</div>
        <div className={`${styles.stat__number} ${styles[type]}`}>
          <span className={styles.stat__unit}>{unit}</span>
          <span>{validateValues(value)}</span>
        </div>

        <div className={styles.stat__footer}>
          <span className={styles.stat__footer_item}>
            <span>Diária</span>
            <span className={`${styles.stat__footer_value} ${styles[type]}`}>
              {unit + validateValues(daily)}
            </span>
          </span>

          <span className={styles.stat__footer_item}>
            <span>Mensal</span>
            <span
              className={`${styles.stat__footer_value} ${styles[type]}`}
            >
              {unit + validateValues(montly)}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
