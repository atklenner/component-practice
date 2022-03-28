import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/birthday">Birthday Reminder</Link>
      <Link to="/tours">Tours</Link>
      <Link to="/reviews">Reviews</Link>
    </>
  );
}
