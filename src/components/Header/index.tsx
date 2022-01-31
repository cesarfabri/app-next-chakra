import Image from "next/image";
import { SigninButton } from "../SigninButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="adm" width={100} height={100} />
        <nav>
          <a className={styles.active} href="#">
            Home
          </a>
          <a href="#">About</a>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}
