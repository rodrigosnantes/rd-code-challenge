import Image from 'next/image';
import logoName from '../../assets/logo-name.svg'

import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image
          src={logoName}
          alt="rd-logo-name"
          className={styles.image}
        />
      </div>
      <div className={styles.headerText}>Gerador de Cartão de Visita</div>
    </header>
  );
}