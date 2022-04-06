import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/birthday">Birthday Reminder</Link>
      <Link to="/tours">Tours</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/accordion">Accordion</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/tabs">Tabs</Link>
      <Link to="/slider">Slider</Link>
      <Link to="/lorem">Lorem</Link>
      <Link to="/colors">Colors</Link>
      <Link to="/grocery">Grocery</Link>
    </>
  );
}
