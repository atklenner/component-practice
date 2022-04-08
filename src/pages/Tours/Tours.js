import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tour from "./components/Tour";
import styles from "./Tours.module.css";

export default function Tours() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    reload();
  }, []);

  function removeLocation(id) {
    setLocations((prevLocations) => {
      return prevLocations.filter((location) => location.id !== id);
    });
  }

  async function reload() {
    setIsLoading(true);
    try {
      let res = await fetch("https://course-api.com/react-tours-project");
      let data = await res.json();
      setLocations(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>
              {locations.length === 0 ? "No More Tours" : "Our Tours"}
            </h1>
          </div>
          {locations.map((location) => {
            return (
              <Tour
                key={location.id}
                {...location}
                handleClick={removeLocation}
              />
            );
          })}
        </div>
      )}
      {!isLoading && locations.length === 0 && (
        <button onClick={reload} className="button">
          Refresh
        </button>
      )}
    </div>
  );
}
