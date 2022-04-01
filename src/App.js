import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import {
  BirthdayReminder,
  Tours,
  Reviews,
  Accordion,
  Menu,
  Tabs,
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
      </Routes>
    </>
  );
}

export default App;
