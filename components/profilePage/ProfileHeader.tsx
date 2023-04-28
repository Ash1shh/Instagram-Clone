import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import AvatarSkeleton from "../Skeleton/AvatarSkeleton";
import { motion } from "framer-motion";

import { UserData } from "../../typings";
import { firestore } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

type ProfileHeaderProps = {
  isShow: boolean;
  userData: UserData;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ isShow, userData }) => {
  const [posts, setposts] = useState<any[]>([]);
  useEffect(
    () =>
      onSnapshot(collection(firestore, "posts"), (snapshot) =>
        setposts(snapshot.docs)
      ),
    [firestore]
  );

  const letters = ["K", "M"];
  const randomIndex = faker.datatype.number({ min: 0, max: 1 });

  const company = ["FACEBOOK", "APPLE", "AMAZON", "NETFLIX", "GOOGLE"];
  const randomCompany = faker.datatype.number({ min: 0, max: 4 });

  const details = [
    " The social network that connects over 2 billion people across the globe. Join us and share your story with the world. 🌎👥💬",
    "Innovation is at the heart of everything we do. From iPhones to iPads, Macs to Apple Watches, we're constantly pushing the boundaries of technology to make your life better. 🍎💻📱",
    "Your one-stop-shop for all your needs, from books to groceries, electronics to fashion. Our mission is to be the world's most customer-centric company, and we're just getting started. 🛍️📦💻",
    "Streaming the best movies and TV shows from around the world, we're the go-to destination for binge-worthy entertainment. Whether you're into drama, comedy, or documentaries, we've got something for everyone. 🎬🍿📺",
    "We're more than just a search engine. From Gmail to Google Maps, Google Photos to Google Drive, we're here to help you get things done, learn new things, and connect with the world. Join us on a journey of exploration and discovery. 🔍🌍💻",
  ];

  const randomdetails = () => details[randomCompany];

  const links = [
    "https://www.facebook.com/",
    "https://www.apple.com/",
    "https://www.amazon.com/",
    "https://www.netflix.com/",
    "https://www.google.com/",
  ];

  const randomlinks = () => links[randomCompany];

  return (
    <header className="flex flex-wrap items-center p-4 md:py-8">
      <div className="md:w-3/12 md:ml-16">
        {userData.profileImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-600 p-1"
              src={userData.profileImage}
              alt="profile"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AvatarSkeleton />
          </motion.div>
        )}
      </div>
      <div className="w-8/12 md:w-7/12 ml-4">
        <div className="md:flex md:flex-wrap md:items-center mb-4">
          <h2 className="text-3xl inline-block font-semibold md:mr-2 mb-2 sm:mb-0">
            {userData.username}
          </h2>

          <span
            className="inline-block fas fa-certificate fa-lg text-blue-500 relative mr-6  text-xl transform -translate-y-2"
            aria-hidden="true"
          >
            <i className="fas fa-check text-white text-xs absolute inset-x-0 ml-1 mt-px"></i>
          </span>

          <div className="bg-blue-500 text-white hover:bg-blue-600 px-2 hover:text-white py-1 font-semibold text-sm rounded text-center sm:inline-block block cursor-pointer mr-2">
            Follow
          </div>
          {isShow && (
            <span className="text-base font-semibold text-gray-700">
              <button
                className="p-1 border-transparent dark:text-white text-gray-700 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600 cursor-pointer"
                aria-label="Notifications"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </span>
          )}
        </div>

        <ul className="hidden md:flex space-x-8 mb-4">
          <li>
            <span className="font-semibold">{posts.length}</span>
            <span> </span>
            posts
          </li>

          <li>
            <span className="font-semibold">
              {parseFloat(faker.finance.amount(1, 20, 1))}
              {letters[randomIndex]}
            </span>
            <span> </span>
            followers
          </li>
          <li>
            <span className="font-semibold">{faker.random.numeric()}</span>
            <span> </span>
            following
          </li>
        </ul>

        <div className="hidden md:block">
          <h1 className="font-semibold">{userData.username}</h1>
          <h1 className="font-semibold">{userData.company}</h1>
          <span className="bioclassName">CEO OF {company[randomCompany]}</span>
          <p>{randomdetails()}</p>
          <span>
            <strong>{randomlinks()}</strong>
          </span>
        </div>
      </div>
    </header>
  );
};
export default ProfileHeader;
