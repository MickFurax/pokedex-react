import { Route, Routes } from "react-router-dom";
import Pokeball from "../pages/Pokeball";
import Navbar from "../components/Navbar";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";
import Favorite from "../pages/Favorite";

const Navigation = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":id" element={<Detail />} />
        <Route path="pokeball/" element={<Pokeball />} />
        <Route path="favorite/" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default Navigation;
function useState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
