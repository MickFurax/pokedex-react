import React, { useState } from "react";
import { Search } from "react-feather";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      // Execute search
      navigate(`${value}`);
    }
  };

  const home = () => {
    setValue("");
    navigate("/");
  };

  return (
    <div className="bg-white w-auto h-24 flex items-center justify-between px-8 sticky top-0 z-40">
      <button
        onClick={home}
        className=" text-red-500 text-3xl hidden sm:block md:block"
      >
        <strong>Poké</strong>dex
      </button>
      <form
        onSubmit={handleSubmit}
        className="relative block mr-6 md:mr-0 sm:mr-0"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Search className="text-red-500" />
        </span>
        <input
          className="placeholder:text-slate-400 block bg-white w-full border rounded py-2 pl-9 pr-3 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 sm:text-sm"
          placeholder="Name or Id"
          type="text"
          name="search"
          onChange={handleChange}
          value={value}
        />
      </form>
      <div className="gap-6 flex">
        <a href="#" className="text-slate-600 hover:text-red-500">
          Favorite
        </a>
        <a href="#" className="text-slate-600 hover:text-red-500">
          Pokéball
        </a>
      </div>
    </div>
  );
};

export default Navbar;
