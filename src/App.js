import BirthdayReminder from "./pages/BirthdayReminder/BirthdayReminder";
import Tours from "./pages/Tours/Tours";
import Reviews from "./pages/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Accordion from "./pages/Accordion/Accordion";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<BirthdayReminder />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
