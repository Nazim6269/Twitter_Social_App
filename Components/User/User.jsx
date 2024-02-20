import Image from "next/image";
import React from "react";

const User = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/fashion.PNG"
        width={5}
        height={5}
        className="rounded-full w-11 h-11"
      />
      <p>name</p>
      <p className="text-sm text-gray-400">@nametag</p>
      <p className="text-sm text-gray-400">11.03.2024</p>
    </div>
  );
};

export default User;
