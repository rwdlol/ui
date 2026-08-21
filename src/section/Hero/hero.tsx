import styles from "./hero.module.css";

export function Hero({ title }: { title: string }) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
}
