import { Star } from "react-feather";
import pokeball from "../assets/pokeball.png";

const Status = () => {
  return (
      <div className="flex">
        <button className="rounded-full mt-auto m-0 mr-1 mb-1 md:mr-4 md:mb-4 sm:mr-2 sm:mb-2">
          <img src={pokeball} alt="Pokeball" className="icon m-2" />
        </button>
      </div>
  );
};

export default Status;
