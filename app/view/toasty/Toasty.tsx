import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Ttoasty } from '../../domain/toasty';

import styles from './toasty.module.css';

const Toasty = forwardRef(({ variant, text }: Ttoasty, ref: any) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [show]);

  return (
    <div
      ref={modalRef}
      id="toasty"
      className={`${styles.toasty} ${!show ? styles.hide : styles.show} ${
        styles[variant]
      }`}
    >
      <span className={styles.toastyText}>{text}</span>
    </div>
  );
});

Toasty.displayName = 'Toasty';

export default Toasty;
