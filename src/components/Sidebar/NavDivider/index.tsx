import styles from "./NavDivider.module.css";
interface Props {
  children?: string;
}

export const NavDivider = ({ children }: Props) => {
  return (
    <div className={styles.navDivider__container}>
      <div>{children?.toString().toUpperCase()}</div>
    </div>
  );
};
