import React, { useState } from "react";
import { Search } from "react-feather";

interface Props {
  search: (value: string) => void;
}

const Navbar = (props: Props) => {
  const [value, setValue] = useState("");

  const { search } = props;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      search(value);
    }
  };

  return (
    <div className="bg-white w-auto h-24 flex items-center justify-between px-8 ">
      <div className=" text-red-500 text-3xl hidden sm:block md:block">
        <strong>Poké</strong>dex
      </div>
      <form onSubmit={handleSubmit} className="relative block mr-6 md:mr-0 sm:mr-0">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Search className="text-red-500" />
        </span>
        <input
          className="placeholder:text-slate-400 block bg-white w-full border rounded py-2 pl-9 pr-3 focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 sm:text-sm"
          placeholder="Name or Id"
          type="text"
          name="search"
          onChange={handleChange}
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
