import styles from './input.module.css';

export default function Input({
  name,
  label,
  placeholder,
  type = 'text',
  callback,
  value,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  callback: (param: any) => any;
  value?: string | number;
}) {
  return (
    <label className={styles.inputContainer}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        className={styles.input}
        required
        value={value}
        id={name}
        type={type}
        name={name}
        onChange={callback}
        placeholder={placeholder}
      />
    </label>
  );
}
