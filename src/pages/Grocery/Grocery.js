import styles from "./Grocery.module.css";
import { useState } from "react";

export default function Grocery() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    setList((prevList) => {
      return [...prevList, value];
    });
  }

  function clearList() {
    setList([]);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Grocery Bud</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} />
          <button>Submit</button>
        </form>
        <div>
          {list.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
        <button>Clear List</button>
      </div>
    </div>
  );
}
