import Link from 'next/link';
import styles from './home-usage-policy.module.css';

export default function HomeUsagePolicy() {
  return (
    <ul>
      <li className={styles.li}>
        Ao preencher o formulário, concordo * em receber comunicações de acordo
        com meus interesses.
      </li>
      <li className={styles.li}>
        Ao informar meus dados, eu concordo com a
        <Link
          style={{
            color: '#fff',
            marginLeft: '2px',
          }}
          target="_blank"
          href="https://legal.rdstation.com/pt/privacy-policy/"
        >
          Política de privacidade
        </Link>
      </li>
      <br />
      <p className={styles.p}>
        * Você pode alterar suas permissões de comunicação a qualquer tempo
      </p>
    </ul>
  );
}
