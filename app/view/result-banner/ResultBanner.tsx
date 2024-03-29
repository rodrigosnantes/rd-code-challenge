import Image from 'next/image';
import banner from '../../assets/banner.svg';

import styles from './banner.module.css';

export default function ResultBanner() {
  return <Image className={styles.banner} src={banner} alt="banner" />;
}
