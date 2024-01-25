import Image from 'next/image';
import logoName from '../../assets/logo-name.svg'

import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <Image src={logoName} alt="rd-logo-name" className={styles.headerLogo} />
      </div>
      <div className={styles.headerText}>Gerador de Cartão de Visita</div>
    </header>
  );
}