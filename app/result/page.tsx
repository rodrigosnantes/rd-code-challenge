import Image from 'next/image';
import Footer from '../view/footer/Footer';
import Header from '../view/header/Header';
import styles from './page.module.css';
import simpleLogo from '../assets/logo.svg';

import { ResultPageContainer } from '../view/page-container/PageContainer';
import Banner from '../view/banner/Banner';
import DownloadButton from '../view/download-button/BuildButton';
import BackButton from '../view/back-button/BackButton';
import Link from 'next/link';
import Arrow from '../view/arrow/Arrow';

export default function Result() {
  return (
    <main className={styles.main}>
      <Header />

      <ResultPageContainer>
        <div className={styles.container}>
          <div
            style={{
              marginTop: '1rem',
            }}
          >
            <Banner />
          </div>

          <div style={{ width: '31.8rem' }}>
            <BackButton />
            <PreviewCard />
            <DownloadButton />
            <RdMarkertingRegirect />
          </div>
        </div>
      </ResultPageContainer>

      <Footer />
    </main>
  );
}

function PreviewCard() {
  return (
    <div
      style={{
        width: '31.8rem',
        height: '15.4rem',
        borderRadius: '1.5rem',
        padding: '2rem, 4.5rem',
        background: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Image width={70} height={60} src={simpleLogo} alt="rd-simple-logo" />
      </div>

      <CardDivider />

      <CardUserData />
    </div>
  );
}

function CardDivider() {
  return (
    <div
      style={{
        marginLeft: '1.25rem',
        marginRight: '1.25rem',
      }}
    >
      <hr style={{ height: '11rem', border: '1px solid #D8D9FD' }}></hr>
    </div>
  );
}

function CardUserData() {
  return (
    <div
      style={{
        width: '12.1rem',
        height: '8.6rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <p
        style={{
          fontSize: '1.25rem',
          lineHeight: '30px',
          fontWeight: '400',
          color: '#000000',
        }}
      >
        nome e sobrenome
      </p>
      <p
        style={{
          fontSize: '1.25rem',
          lineHeight: '30px',
          fontWeight: '400',
          color: '#000000',
        }}
      >
        (00) 0000-0000
      </p>
      <p
        style={{
          fontSize: '1.25rem',
          lineHeight: '30px',
          fontWeight: '400',
          color: '#000000',
        }}
      >
        meuemail@email.com
      </p>
    </div>
  );
}

function RdMarkertingRegirect() {
  return (
    <p
      style={{
        marginTop: '1.7rem',
        textAlign: 'center',
      }}
    >
      <Link
        href="https://app.rdstation.com.br/signup"
        style={{
          fontSize: '1rem',
          color: '#fff',
          lineHeight: '1.5rem',
          fontWeight: 800,
          textDecoration: 'none',
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
        }}
      >
        FAZER UM TESTE GRÁTIS DO RD STATION MARKETING
        <div>
          <Arrow height="9" width="16" color="#fff" />
        </div>
      </Link>
    </p>
  );
}
