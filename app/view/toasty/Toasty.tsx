import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import styles from './toasty.module.css';

const Toasty: React.ForwardRefRenderFunction<ToastyHandles, ToastyProps> = (props: any, ref) => {
  const { variant, text } = props;
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [show]);

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <div
      id="toasty"
      className={`${styles.toasty} ${!show ? styles.hide : styles.show} ${
        styles[variant]
      }`}
    >
      <span className={styles.toastyText}>{text}</span>
    </div>
  );
};

export default forwardRef(Toasty);

export interface ToastyHandles {
  openModal: () => void;
  closeModal: () => void;
}

export interface ToastyProps {
  ref: React.RefObject<ToastyHandles>;
  variant: string;
  text: string;
}
