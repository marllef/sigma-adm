import { Branding } from "./Branding";
import { AvatarPopover } from "./Avatar";
import { Notifications } from "./Notifications";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header__container}>
      <span className={styles.header__brand}>
        <Branding />
      </span>

      <span className={styles.header__actions}>
        <Notifications />
        <AvatarPopover />
      </span>
    </div>
  );
};
