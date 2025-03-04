"use client";

import React, { useEffect, useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa6";

const Signin: React.FC = () => {
  const [isSignUp, setIsSignup] = useState(true);
  // const CLIENT_ID = "Iv23liNQWnfjsBht4RLH";
  // const githubAccess = () => {
  //   window.location.assign(
  //     "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
  //   );
  // };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);
  return (
    <div className="flex justify-center items-center h-full flex-col">
      {/* <button onClick={githubAccess}>signin with github</button> */}

      <div className="text-[21px] md:text-3xl flex flex-col items-center gap-5  font-bold">
        <FaCode size={45} className="text-[var(--icon-color)]" />
        <div>
          CodeReviewAI
          <div className="text-sm font-normal text-[var(--secondary-text-color)]">
            Yout intelligent review assistant
          </div>
        </div>
      </div>

      <div className="p-6 bg-[var(--secondary-background-color)] rounded-md mt-5">
        <div className="font-semibold bg-[var(--third-background-color)] px-24 py-3 rounded-md flex items-center gap-3">
          <FaGithub size={20} /> Continue with GitHub
        </div>
        <div className="flex items-center mt-5 gap-4">
          <div className="flex-1 border-t border-[var(--secondary-text-color)]"></div>
          <span className="text-[12px] text-gray-400 whitespace-nowrap">
            or continue with
          </span>
          <div className="flex-1 border-t border-[var(--secondary-text-color)]"></div>
        </div>

        <div>
          <form className="max-w-md mx-auto  rounded-lg shadow-md space-y-6 mt-5">
            {isSignUp && (
              <div>
                <label className="block text-[13px] font-medium text-[var(--primary-text-color)]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full px-4 py-2  bg-[var(--third-background-color)] outline-none  rounded-md focus:ring focus:ring-[var(--primary-color)]"
                />
              </div>
            )}
            <div>
              <label className="block text-[13px] font-medium text-[var(--primary-text-color)]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2  bg-[var(--third-background-color)] outline-none  rounded-md focus:ring focus:ring-[var(--primary-color)]"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[var(--primary-text-color)]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2  bg-[var(--third-background-color)] outline-none  rounded-md focus:ring focus:ring-[var(--primary-color)]"
              />
            </div>

            <div className="text-[var(--primary-color)] text-[12px] text-end">
              Forget password
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-[14px]  mt-2">
        Don&apos;t have an account?{" "}
        {isSignUp ? (
          <span
            onClick={() => {
              setIsSignup((prev) => !prev);
            }}
            className="text-[var(--primary-color)]"
          >
            Sign in
          </span>
        ) : (
          <span
            onClick={() => {
              setIsSignup((prev) => !prev);
            }}
            className="text-[var(--primary-color)]"
          >
            Sign up
          </span>
        )}
      </div>
    </div>
  );
};

export default Signin;
