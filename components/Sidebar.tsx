import React, { useState } from "react";
import {
  PaperAirplaneIcon,
  HeartIcon,
  Bars3Icon,
  UserIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import PostModal from "./modal/PostModal";

function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="col-span-1 flex flex-col justify-between border-r-2  border-gray-400">
      <div className="fixed">
        <img
          className="hidden lg:inline-grid mt-10 mb-4 cursor-pointer object-cover w-28 ml-8"
          src="https://i.postimg.cc/HsQWcQVm/Instagram-logo-svg.png"
          alt=""
        />
        <img
              className="w-6 lg:hidden flex-shrink-0 mt-10 mb-4 cursor-pointer ml-8"
              src="https://i.postimg.cc/TPPWJkDg/5ecec78673e4440004f09e77.png"
              alt=""
            />
        <div className="flex flex-col item-center px-4 md:items-start cursor-pointer  space-y-72">
          <div className="flex flex-col space-y-1 ">
            <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  ">
              <HomeIcon className="h-6 w-6" />
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl"
              >
                Home
              </p>
            </div>
            <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  ">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl  "
              >
                Search
              </p>
            </div>
            <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  ">
              <svg
                aria-label="Explore"
                className="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
                <polygon
                  fill-rule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                ></polygon>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
              </svg>
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl  "
              >
                Explore
              </p>
            </div>
            <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  ">
              <svg
                aria-label="Reels"
                className="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="2.049"
                  x2="21.95"
                  y1="7.002"
                  y2="7.002"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="13.504"
                  x2="16.362"
                  y1="2.001"
                  y2="7.002"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="7.207"
                  x2="10.002"
                  y1="2.11"
                  y2="7.002"
                ></line>
                <path
                  d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl  "
              >
                Reels
              </p>
            </div>
            <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  ">
              <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl  "
              >
                Messages
              </p>
            </div>
            <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  ">
              <HeartIcon className="h-6 w-6" />
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl  "
              >
                Notifications
              </p>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  "
            >
              <PlusCircleIcon className="h-6 w-6" />
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl  "
              >
                Create
              </p>
            </div>
            {session ? (
              <>
                <div
                  onClick={() => signOut()}
                  className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  "
                >
                  <UserIcon className="h-6 w-6" />
                  <p className="hidden text-base font-light lg:inline-flex lg:text-xl">
                    Sign Out
                  </p>
                </div>
              </>
            ) : (
              <div
                onClick={() => router.push("/auth/login")}
                className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  "
              >
                <UserIcon className="h-6 w-6" />
                <p className="hidden text-base font-light lg:inline-flex lg:text-xl">
                  Sign In
                </p>
              </div>
            )}
          </div>
          <div className="mb-4">
            <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200  ">
              <Bars3Icon className="h-6 w-6" />
              <p
                className="hidden text-base font-light lg:inline-flex 
            lg:text-xl  "
              >
                More
              </p>
            </div>
          </div>
        </div>
        <PostModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Sidebar;
