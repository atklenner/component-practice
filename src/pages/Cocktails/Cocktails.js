import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import { CocktailContextProvider } from "./context";

export default function Cocktails() {
  return (
    <CocktailContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path=":id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </CocktailContextProvider>
  );
}
