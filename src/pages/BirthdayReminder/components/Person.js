import styles from "./Person.module.css";

export default function Person({ person }) {
  return (
    <div className={styles.card}>
      <img
        src={"https://bulma.io/images/placeholders/64x64.png"}
        alt="what an ugly person"
        className={styles.image}
      />
      <div className={styles.content}>
        <p className={styles.title}>{person.name}</p>
        <p className={styles.subtitle}>{person.age} years</p>
      </div>
    </div>
  );
}
