import { faCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menus from "../Menus/Menus";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="flex px-3 py-2 justify-between mt-3 border border-gray-700">
      {/* Menubar */}
      <Menus />
      {/* Navbar */}
      <div className="flex w-96 justify-between">
        <h2 className="font-semibold">Home</h2>
        <FontAwesomeIcon className="w-7 h-7 text-blue-400" icon={faCake} />
      </div>
      {/* SearchBar */}
      <SearchBar />
    </div>
  );
};

export default Navbar;
