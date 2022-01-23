import { Children, ReactNode, useCallback } from "react";
import styles from "./MainGrid.module.css";

interface MainGridProps {
  children?: ReactNode;
}

export const MainGrid = ({ children }: MainGridProps) => {
  return (
    <div className={styles.container}>
      {Children.map(children, (child, index) => {
        if (index < 8) {
          return (
            <div key={index} className={styles[`C${index + 1}`]}>
              {child}
            </div>
          );
        }
      })}
    </div>
  );
};
