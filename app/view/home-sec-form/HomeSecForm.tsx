'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useContext, useRef, useState } from 'react';

import { AppContext } from '../../provider/AppProvider';
import { EForm, Tform } from '../../domain/form';
import { phoneMask, validateFormData } from '../../service/form-service';
import BuildButton from '../build-button/BuildButton';
import Input from '../input/Input';
import styles from './home-sec-form.module.css';
import Toasty from '../toasty/Toasty';
import { Ttoasty } from '../../domain/toasty';

export default function HomeSectionForm() {
  const router = useRouter();
  const tostyRef = useRef(null);
  const { setFormData: handlePostFormData } = useContext(AppContext);
  const [formData, setFormData] = useState<Tform>({} as Tform);
  const [onError, setOnError] = useState<Ttoasty>({
    enable: false,
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

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { isValid, invalidField } = validateFormData(formData);

    if (!isValid) {
      tostyRef?.current?.openModal();
      setOnError({
        variant: 'error',
        text: `Erro ao validar ${invalidField}`,
      });
    }

    if (isValid) {
      tostyRef?.current?.openModal();
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
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <Input
        name="name"
        label="Nome*"
        placeholder="Nome"
        value={formData.name}
        callback={handleChange}
      />

      <div className={styles.formContainer}>
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
          placeholder="nome@email.com"
          callback={handleChange}
        />
      </div>

      <Toasty ref={tostyRef} variant={onError.variant} text={onError.text} />

      <BuildButton />
    </form>
  );
}
