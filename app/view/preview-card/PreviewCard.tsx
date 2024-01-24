import Image from 'next/image';

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
  return (
    <div className={styles.cardDataContainer}>
      <p className={styles.cardDataParagrapy}>nome e sobrenome</p>
      <p className={styles.cardDataParagrapy}>(00) 0000-0000</p>
      <p className={styles.cardDataParagrapy}>meuemail@email.com</p>
    </div>
  );
}
