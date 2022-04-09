import { useState, useEffect } from "react";
import styles from "./Random.module.css";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

export default function Random() {
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentInfo, setCurrentInfo] = useState("");

  useEffect(() => {
    getRandomPerson();
  }, []);

  async function getRandomPerson() {
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const { picture, name, email, dob, location, phone, login } =
        data.results[0];
      setPerson({
        image: picture.large,
        name: `${name.first} ${name.last}`,
        email,
        age: dob.age,
        address: `${location.street.number} ${location.street.name}`,
        phone,
        password: login.password,
      });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    setCurrentInfo(person.name);
  }

  return loading ? (
    <h1>loading</h1>
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={person.image}
          alt="they are all 7/10"
          className={styles.user__image}
        />
        <h2 className={styles.user__info}>{currentInfo}</h2>
        <div className={styles.infoBtns}>
          <FaUser onMouseOver={() => setCurrentInfo(person.name)} />
          <FaEnvelopeOpen onMouseOver={() => setCurrentInfo(person.email)} />
          <FaCalendarTimes onMouseOver={() => setCurrentInfo(person.age)} />
          <FaMap onMouseOver={() => setCurrentInfo(person.address)} />
          <FaPhone onMouseOver={() => setCurrentInfo(person.phone)} />
          <FaLock onMouseOver={() => setCurrentInfo(person.password)} />
        </div>
        <button onClick={getRandomPerson} className={styles.randomBtn}>
          New Random Person
        </button>
      </div>
    </div>
  );
}
