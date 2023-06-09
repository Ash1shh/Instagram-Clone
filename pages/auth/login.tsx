import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen overflow-hidden"
    >
      <Head>
        <title>Instagram Clone Sign in</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://drive.google.com/uc?export=download&id=1eqWbbCrvcw6w6W-3eCEFkDu-9L2MbRaH"
        />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -m-36 px-14 text-center pt-60">
        <img
          src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Transparent.png"
          alt=""
        />
        <p className="font-xs italic">
          This is not a Real app, it is build for educational purpose only
        </p>
        <div className="mt-20">
          <div>
            <button
              className="p-3 bg-blue-500 rounded-lg text-white"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Login;
