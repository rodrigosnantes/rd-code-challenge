'use client';

import Arrow from '../arrow/Arrow';
import styles from './downloadButton.module.css';
import { useRouter } from 'next/navigation';

export default function DownloadButton() {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.push('/result')}>
      <div
        style={{
          width: '1.5rem',
          height: '1.5rem',
          rotate: '90deg',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Arrow height="10" width="16" color="#97A1AC" />
      </div>
      Baixar Cartão
    </button>
  );
}
