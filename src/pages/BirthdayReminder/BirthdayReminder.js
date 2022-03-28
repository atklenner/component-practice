import { data } from "./data";
import { useState } from "react";
import Person from "./components/Person";
import ClearButton from "./components/ClearButton";

export default function BirthdayReminder() {
  const [persons, setPersons] = useState(data);

  function emptyList() {
    setPersons([]);
  }

  return (
    <div className="container my-auto">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">
            <h1 className="title is-3">{persons.length} birthdays today</h1>
          </div>
        </div>
        {persons.map((person) => {
          return <Person person={person} key={person.id} />;
        })}
        <ClearButton handleClick={emptyList} />
      </div>
    </div>
  );
}
