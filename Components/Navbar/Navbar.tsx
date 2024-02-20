import MenuItem from "../MenuItem/MenuItem";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="flex px-3 justify-between items-center">
      <div className="w-80">icon</div>
      {/* Navbar */}
      <div className="flex w-3/5 justify-between border px-3 py-3 border-gray-700">
        <h2 className="font-semibold">Home</h2>
        icon
      </div>
      {/* SearchBar */}
      <SearchBar />
    </div>
  );
};

export default Navbar;
