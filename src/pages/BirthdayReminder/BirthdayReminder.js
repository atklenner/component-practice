import { data } from "./data";
import { useState } from "react";
import Person from "./components/Person";
import ClearButton from "./components/ClearButton";
import styles from ".//BirthdayReminder.module.css";

export default function BirthdayReminder() {
  const [persons, setPersons] = useState(data);

  function emptyList() {
    setPersons([]);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{persons.length} birthdays today</h1>
        {persons.map((person) => {
          return <Person person={person} key={person.id} />;
        })}
        <ClearButton handleClick={emptyList} />
      </div>
    </div>
  );
}
