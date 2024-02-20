const SearchBar = () => {
  return (
    <div className="flex  justify-center items-center ml-3">
      <input
        className="px-4 py-2 w-72 rounded-full bg-gray-800"
        type="text"
        placeholder="Search Twitter"
      />
    </div>
  );
};

export default SearchBar;
