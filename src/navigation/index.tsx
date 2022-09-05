import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";

const Navigation = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Navigation;
function useState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
