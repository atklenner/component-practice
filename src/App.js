import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import {
  BirthdayReminder,
  Tours,
  Reviews,
  Accordion,
  Menu,
  Tabs,
  Slider,
} from "./pages/index";

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
        <Route path="/tabs" element={<Tabs />} />
        <Route path="slider" element={<Slider />} />
      </Routes>
    </>
  );
}

export default App;
