'use client';

import Arrow from '../arrow/Arrow';
import { useRouter } from 'next/navigation';
import styles from './download-button.module.css';

export default function DownloadButton() {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.push('/result')}>
      <div className={styles.arrowIcon}>
        <Arrow height="10" width="16" color="#97A1AC" />
      </div>
      Baixar Cartão
    </button>
  );
}
