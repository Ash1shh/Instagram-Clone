import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

type MiniProfileProps = {};

const MiniProfile: React.FC<MiniProfileProps> = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleChangePage = () => {
    if (session) {
      router.push({
        pathname: `profile/${session.user?.uid}`,
        query: {
          userId: `${session.user?.uid}`.toString(),
        },
      });
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <div className="flex items-center justify-between mt-14 ml-10 cursor-pointer"
    onClick={handleChangePage}
    >
      {session ? (
        <>
          <img
            className="w-16 h-16 rounded-full border p-[2px]"
            src={session?.user?.image!}
            alt=""
          />
          <div className="flex-1 mx-4">
            <h2 className="font-bold">{session?.user?.name}</h2>
            <h3 className="text-sm text-gray-400">Welcome to Igrami</h3>
          </div>
          <button
            onClick={() => signOut()}
            className="text-blue-400 text-sm font-semibold"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <img
            className="w-16 h-16 rounded-full border p-[2px]"
            src="https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg"
            alt=""
          />
          <div className="flex-1 mx-4">
            <h2 className="font-bold text-red-600">Please Login</h2>
            <h3 className="text-sm text-gray-400">Welcome to Igrami</h3>
          </div>
          <button
            onClick={() => router.push("/auth/login")}
            className="text-blue-400 text-sm font-semibold"
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};
export default MiniProfile;
