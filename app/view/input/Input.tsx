import styles from './input.module.css';

export default function Input({ name, label, placeholder } : { name: string; label: string; placeholder: string }) {
  return (
    <label className={styles.label}>
      <span className={styles.textLabel}>{label}</span>
      <input
        className={styles.text}
        type="text"
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}