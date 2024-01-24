import Input from '../input/Input';
import styles from './home-sec-form.module.css'

export default function HomeSectionForm() {
  return (
    <div className={styles.form}>
      <Input name="name" label="Nome*" placeholder="Nome" />

      <div className={styles.formContainer}>
        <Input name="phone" label="Telefone*" placeholder="(00) 0 0000-0000" />

        <Input name="mail" label="E-mail*" placeholder="nome@email.com" />
      </div>
    </div>
  );
}