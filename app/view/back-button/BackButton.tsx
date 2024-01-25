'use client';

import { useRouter } from 'next/navigation';
import { AppContext } from '../../provider/AppProvider';
import { useContext } from 'react';

import styles from './back-button.module.css';

export default function BackButton() {
  const router = useRouter();
  const { setFormData } = useContext(AppContext);

  return (
    <button className={styles.button} onClick={() => {
      router.back();
      setFormData(null)
    }}>
      {'< Gerar outro cartão'}
    </button>
  );
}

