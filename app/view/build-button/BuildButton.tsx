

import Arrow from '../arrow/Arrow';
import styles from './build-button.module.css';

export default function BuildButton() {
  return (
    <button className={styles.button} type="submit">
      GERAR CARTÃO GRÁTIS
      <div className={styles.arrowButton}>
        <Arrow height="9" width="16" />
      </div>
    </button>
  );
}
