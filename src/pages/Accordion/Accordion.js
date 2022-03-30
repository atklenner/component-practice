import styles from "./Accordion.module.css";
import { questions } from "./data";
import Question from "./Question.js";

export default function Accordion() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Questions And Answers About Login</h1>
        <div className={styles.questions}>
          {questions.map((question) => {
            return <Question {...question} />;
          })}
        </div>
      </div>
    </div>
  );
}
