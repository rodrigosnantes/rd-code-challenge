'use client';
import { useRouter } from 'next/navigation';

import Arrow from '../arrow/Arrow';
import styles from './build-button.module.css';

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
