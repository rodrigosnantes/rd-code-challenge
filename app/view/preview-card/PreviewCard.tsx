'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { AppContext } from '../../provider/AppProvider';
import simpleLogo from '../../assets/logo.svg';

import styles from './preview-card.module.css';

export default function PreviewCard() {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={simpleLogo} alt="rd-simple-logo" />

      <CardDivider />

      <CardUserData />
    </div>
  );
}

function CardDivider() {
  return (
    <div className={styles.divider}>
      <hr className={styles.dividerHeight} />
    </div>
  );
}

function CardUserData() {
  const { formData } = useContext(AppContext);

  if (!formData) return null;
  
  return (
    <div className={styles.cardDataContainer}>
      <p className={styles.cardDataParagrapy}>{formData.name}</p>
      <p className={styles.cardDataParagrapy}>{formData.phone}</p>
      <p className={styles.cardDataParagrapy}>{formData.mail}</p>
    </div>
  );
}
