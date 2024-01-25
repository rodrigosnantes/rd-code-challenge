'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useContext, useState } from 'react';

import { AppContext } from '../../provider/AppProvider';
import { Tform } from '../../domain/form';
import { phoneMask, validateFormData } from '../../service/form-service';
import BuildButton from '../build-button/BuildButton';
import Input from '../input/Input';
import styles from './home-sec-form.module.css';

export default function HomeSectionForm() {
  const router = useRouter();
  const { setFormData: handlePostFormData } = useContext(AppContext);
  const [formData, setFormData] = useState<Tform>({} as Tform);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? phoneMask(value) : value,
    }));
  },[]);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { isValid, invalidField } = validateFormData(formData);

    if (!isValid) {
      alert(`Erro ao validar ${invalidField}`);
    }

    if (isValid) {
      handlePostFormData(formData);
      router.push('/result');
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

      <BuildButton />
    </form>
  );
}
