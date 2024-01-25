import Image from 'next/image';
import banner from '../../assets/banner.svg';

import styles from './home-banner.module.css';

export default function HomeBanner() {
  return <Image className={styles.banner} src={banner} alt="banner" />;
}
