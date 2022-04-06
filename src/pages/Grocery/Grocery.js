import styles from "./Grocery.module.css";
import { useState } from "react";
import { v4 as uudiv4 } from "uuid";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import Alert from "./Alert";

export default function Grocery() {
  const [value, setValue] = useState("");
  const [list, setList] = useLocalStorage("groceryList", []);
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({
    message: "alert!",
    color: "lightcoral",
  });

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      setIsEditing(false);
      handleAlert("Item Edited", "lightgreen");
    } else {
      handleAlert("Item Submitted", "lightgreen");
    }
    setList((prevList) => {
      return [...prevList, { value: value, id: uudiv4() }];
    });
    setValue("");
  }

  function handleAlert(message, color) {
    setShowAlert(true);
    setAlertData({ message, color });
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  function clearList() {
    setList([]);
    handleAlert("Empty List", "lightcoral");
  }

  function editItem(id) {
    let editItem = list.find((item) => item.id === id);
    setValue(editItem.value);
    setIsEditing(true);
    deleteItem(id);
  }

  function deleteItem(id) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
    handleAlert("Item Deleted", "lightcoral");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {showAlert && <Alert {...alertData} />}
        <h1 className={styles.title}>Grocery Bud</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={value}
            className={styles.input}
            onChange={handleChange}
            placeholder="e.g. eggs"
          />
          <button className={styles.submit}>
            {isEditing ? "Edit" : "Submit"}
          </button>
        </form>
        <div className={styles.itemContainer}>
          {list.map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <p>{item.value}</p>
                <div>
                  <button
                    className={styles.itemBtn}
                    onClick={() => editItem(item.id)}
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className={styles.itemBtn}
                    onClick={() => deleteItem(item.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {list.length !== 0 && (
          <button className={styles.clearBtn} onClick={clearList}>
            Clear List
          </button>
        )}
      </div>
    </div>
  );
}
