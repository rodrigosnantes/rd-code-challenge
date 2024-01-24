'use client';

import styles from './back.module.css';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.back()}>
      {'< Gerar outro cartão'}
    </button>
  );
}

