import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.span}>Politica de privacidade</span>
      <span className={styles.span}>© Resultados Digitais</span>
    </footer>
  );
}
