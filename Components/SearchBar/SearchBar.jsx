import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex  justify-center items-center">
      <FontAwesomeIcon
        className="w-5 h-5 -mx-10 z-0 text-gray-400"
        icon={faSearch}
      />
      <input className="px-4 py-2 w-72 rounded-full  bg-gray-800" type="text" />
    </div>
  );
};

export default SearchBar;
