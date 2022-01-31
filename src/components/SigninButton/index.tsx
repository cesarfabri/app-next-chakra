import { GoKey } from "react-icons/go";
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SigninButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <GoKey color='#04d361' />
      Cesar Fabri
      <FiX className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <GoKey color='#eba417' />
      Signin administrativo
    </button>
  );
}
