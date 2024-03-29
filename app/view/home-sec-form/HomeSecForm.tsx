'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useCallback, useContext, useRef, useState } from 'react';

import { AppContext } from '../../provider/AppProvider';
import { Tform } from '../../domain/form';
import { Ttoasty } from '../../domain/toasty';
import { phoneMask, validateFormData } from '../../service/form-service';
import BuildButton from '../build-button/BuildButton';
import HomeUsagePolicy from '../home-usage-policy/HomeUsagePolicy';
import Input from '../input/Input';
import Toasty, { ToastyHandles } from '../toasty/Toasty';

import styles from './home-sec-form.module.css';

export default function HomeSectionForm() {
  const router = useRouter();
  const tostyRef = useRef<ToastyHandles>(null);
  const { setFormData: handlePostFormData } = useContext(AppContext);

  const [formData, setFormData] = useState<Tform>({} as Tform);
  const [onError, setOnError] = useState<Ttoasty>({
    variant: '',
    text: '',
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prev) => ({
        ...prev,
        [name]: name === 'phone' ? phoneMask(value) : value,
      }));
    },
    []
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { isValid, invalidField } = validateFormData(formData);

    if (!isValid) {
      // tostyRef?.current?.openModal();

      if (tostyRef?.current) {
        tostyRef?.current?.openModal();
      }
      setOnError({
        variant: 'error',
        text: `Erro ao validar ${invalidField}`,
      });
    }

    if (isValid) {
      if (tostyRef?.current) {
        tostyRef?.current?.openModal();
      }

      setOnError({
        variant: 'success',
        text: 'Gerando....',
      });
      handlePostFormData(formData);
      setTimeout(() => {
        router.push('/result');
      }, 400);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <Input
          name="name"
          label="Nome*"
          placeholder="Nome"
          value={formData.name}
          callback={handleChange}
        />

        <div className={styles.formGroup}>
          <Input
            name="phone"
            label="Telefone*"
            value={formData.phone}
            placeholder="(00) 0 0000-0000"
            callback={handleChange}
          />

          <Input
            name="mail"
            label="E-mail*"
            value={formData.mail}
            placeholder="email@email.com"
            callback={handleChange}
          />
        </div>
      </div>

      <Toasty ref={tostyRef} variant={onError.variant} text={onError.text} />

      <HomeUsagePolicy />

      <BuildButton />
    </form>
  );
}
