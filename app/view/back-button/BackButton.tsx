'use client';
import { useRouter } from 'next/navigation';

import styles from './back-button.module.css';

export default function BackButton() {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.back()}>
      {'< Gerar outro cartão'}
    </button>
  );
}

