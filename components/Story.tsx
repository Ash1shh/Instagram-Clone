import Image from "next/image";
import React from "react";

type StoryProps = {
  img: string;
  username: string;
};

const Story: React.FC<StoryProps> = ({ img, username }) => {
  return (
    <div>
      <Image
      height={64}
      width={64}
        className="h-16 w-16 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-16 truncate text-center mt-1">{username}</p>
    </div>
  );
};
export default Story;
