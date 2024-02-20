import React from "react";

const Trending = () => {
  return (
    <div className="bg-gray-800 px-3 py-4  w-72 shadow-md rounded-2xl">
      <p className="font-semibold">Whats happening</p>
      <hr />
      <div className="py-2">
        <p>#FreePS5Monday</p>
        <span className="text-sm text-gray-400"> 220k tweets</span>
      </div>
      <div className="py-2 ">
        <p>#BTSonGMA</p>
        <span className="text-sm text-gray-400"> 20k tweets</span>
      </div>
      <div className="py-2">
        <p>#AstraZeneca</p>
        <span className="text-sm text-gray-400"> 657k tweets</span>
      </div>
      <span className="underline text-blue-600">show more</span>
    </div>
  );
};

export default Trending;
