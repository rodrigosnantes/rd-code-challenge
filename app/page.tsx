import Footer from './view/footer/Footer';
import Header from './view/header/Header';
import BuildButton from './view/build-button/BuildButton';
import Banner from './view/banner/Banner';
import HomeSectionTitle from './view/home-sec-title/HomeSecTitle';
import HomeSectionForm from './view/home-sec-form/HomeSecForm';

import { HomePageContainer } from './view/page-container/PageContainer';
import HomeUsagePolicy from './view/home-usage-policy/HomeUsagePolicy';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <HomePageContainer>
        <HomeSectionTitle />

        <div className={styles.box}>
          <Banner />

          <div>
            <HomeSectionForm />
            <HomeUsagePolicy />
            <BuildButton />
          </div>
        </div>
      </HomePageContainer>

      <Footer />
    </main>
  );
}
