import Link from 'next/link';
import Arrow from '../arrow/Arrow';

import styles from './marketing-redirect.module.css';

export default function MarketingRedirect() {
  return (
    <Link
      target="_blank"
      href="https://app.rdstation.com.br/signup"
      className={styles.container}
    >
      <div className={styles.label}>
        FAZER UM TESTE GRÁTIS DO RD STATION MARKETING
      </div>
      <div>
        <Arrow height="9" width="16" color="#fff" />
      </div>
    </Link>
  );
}
