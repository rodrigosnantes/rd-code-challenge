import Image from 'next/image';
import styles from './header.module.css'

import logoName from '../../assets/logo-name.svg'

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