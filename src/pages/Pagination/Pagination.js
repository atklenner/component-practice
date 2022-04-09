import { useState, useEffect } from "react";
import styles from "./Pagination.module.css";

export default function Pagination() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getFollowers() {
      setLoading(true);
      try {
        let res = await fetch(
          "https://api.github.com/users/john-smilga/followers?per_page=100"
        );
        let data = await res.json();
        if (data) {
          setData(
            data.map((user) => {
              const { login, avatar_url, html_url, id } = user;
              return {
                name: login,
                image: avatar_url,
                url: html_url,
                id,
              };
            })
          );
        } else {
          setData([]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getFollowers();
    setLoading(false);
  }, []);

  useEffect(() => {
    setFollowers(data.slice(10 * (page - 1), 10 * page));
  }, [data, page]);

  function changePage(num) {
    if (num < 1) {
      setPage(1);
    } else if (num > 10) {
      setPage(10);
    } else {
      setPage(num);
    }
  }

  return loading ? (
    <h1 className={styles.title}>Loading</h1>
  ) : (
    <div className={styles.container}>
      <h1 className={styles.title}>Followers</h1>
      <div className={styles.followers}>
        {followers.map((follower) => {
          return (
            <div className={styles.follower} key={follower.id}>
              <img
                src={follower.image}
                alt="some ugly guy"
                className={styles.follower__image}
              />
              <p>{follower.name}</p>
              <a href={follower.url} className={styles.follower__link}>
                Their GitHub
              </a>
            </div>
          );
        })}
      </div>
      <div className={styles.pages}>
        <button onClick={() => changePage(page - 1)} className={styles.btn}>
          Prev
        </button>
        <button onClick={() => changePage(page + 1)} className={styles.btn}>
          Next
        </button>
      </div>
    </div>
  );
}
