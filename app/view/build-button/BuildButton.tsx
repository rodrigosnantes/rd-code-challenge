'use client';

import styles from './buildButton.module.css';
import { useRouter } from 'next/navigation';
import Arrow from '../arrow/Arrow';

export default function BuildButton() {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.push('/result')}>
      GERAR CARTÃO GRÁTIS
      <div className={styles.arrowButton}>
        <Arrow height="9" width="16" />
      </div>
    </button>
  );
}
