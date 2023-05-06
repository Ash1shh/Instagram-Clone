import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import Image from "next/image";

type SuggestionsProps = {};

const Suggestions: React.FC<SuggestionsProps> = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm nb-d-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold hover:text-gray-500">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between space-y-4"
        >
          <img
            className="w-10 h-10
          rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400 font-medium">Follows you</h3>
          </div>
          <button className="text-blue-400 text-sm font-bold hover:text-black dark:hover:text-white">
            Follow
          </button>
        </div>
      ))}

      <div className="mt-6">
        <div className="flex space-x-1 w-72">
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              About ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Help ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Press ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              API ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Jobs ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Privacy ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Terms ·
            </p>
          </Link>
        </div>

        <div className="flex space-x-1 w-52">
          <Link href="/">
            <p className="w-max text-xs leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Locations ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs  leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Language ·
            </p>
          </Link>
          <Link href="/">
            <p className="w-max text-xs  leading-5 font-medium text-gray-500 dark:text-[#70767B] hover:underline">
              Meta Verified ·
            </p>
          </Link>
        </div>

        <div className="mt-5">
          <p className="text-sm leading-6 font-medium text-gray-600 dark:text-[#70767B]">
            © 2023 INSTAGRAM FROM META
          </p>
        </div>
      </div>
    </div>
  );
};
export default Suggestions;
