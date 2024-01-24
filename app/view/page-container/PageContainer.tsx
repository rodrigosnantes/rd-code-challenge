import React from "react";
import styles from './pageContainer.module.css';

export function HomePageContainer({ children }: { children: React.ReactNode }) {
  return <section className={styles.homeSection}>{children}</section>;
}

export function ResultPageContainer({ children }: { children: React.ReactNode }) {
  return <section className={styles.resultSection}>{children}</section>;
}
