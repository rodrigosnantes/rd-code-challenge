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
    <label className={styles.label}>
      <span className={styles.textLabel}>{label}</span>
      <input
        required
        value={value}
        id={name}
        className={styles.text}
        type={type}
        name={name}
        onChange={callback}
        placeholder={placeholder}
      />
    </label>
  );
}
