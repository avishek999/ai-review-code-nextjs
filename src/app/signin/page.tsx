"use client";
/** core libraries & installed libraries */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

/** icons */
import { FaCode, FaGithub } from "react-icons/fa6";

/** user defined component */

/** services */
import { CLIENT_ID } from "@/services/config";
import { loginViaEmail, registerViaEmail } from "@/services/api";

/** interfaces */
import { IUser } from "@/interface/user";
import OtpVerification from "@/components/otpVerification/OtpVerification";

enum AuthModeEnum {
  SignIn = "signin",
  SignUp = "signup",
  ForgetPassword = "forgetPassword",
}

const Signin: React.FC = () => {
  /** ================== useState start ================== */
  const [authMode, setAuthMode] = useState<AuthModeEnum>(AuthModeEnum.SignUp);
  const [testOtp, settestOtp] = useState(false);

  /** ================== useState end ================== */

  /** ==================  hooks start ================== */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({});

  /** ==================  hooks start ================== */
  /** ================== useEffect start ================== */
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);

  /** ================== useEffect end ================== */

  /** ================== function start ================== */

  const onAuthSubmit = async (data: IUser) => {
    if (authMode === AuthModeEnum.SignIn) {
      delete data.name;

      const response = await loginViaEmail(data);
      console.log(response);
      console.log(data);

      return;
    }
    if (authMode === AuthModeEnum.ForgetPassword) {
      delete data.name;
      console.log(data);
      return;
    }

    const response = await registerViaEmail(data);

    if (response.status === true) {
      console.log(response.status);
      console.log(data);
    } else {
      console.log(response.status);
    }
  };

  const getGithubCode = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  };

  /** ================== function end ================== */

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-xl md:text-3xl flex flex-col items-center gap-5 font-bold">
        <FaCode size={45} className=" text-[var(--icon-color)]" />
        <div className="text-center" onClick={() => settestOtp(!testOtp)}>
          CodeReviewAI
          <div className="text-sm font-normal text-[var(--secondary-text-color)]">
            Your intelligent review assistant
          </div>
        </div>
      </div>

      <div className="p-6 bg-[var(--secondary-background-color)] rounded-md mt-5 max-w-sm w-full  flex overflow-hidden ">
        <div
          className={` transition-all flex-none w-full ${
            testOtp ? "translate-x-[-500px]" : ""
          }  `}
        >
          <div
            className="font-semibold bg-[var(--third-background-color)] px-6 py-3 rounded-md flex items-center justify-center gap-3 hover:opacity-70  transition-opacity  cursor-pointer"
            onClick={getGithubCode}
          >
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
            <form
              onSubmit={handleSubmit(onAuthSubmit)}
              className="max-w-md mx-auto  rounded-lg shadow-md space-y-6 mt-5"
            >
              {authMode === AuthModeEnum.SignUp && (
                <div>
                  <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    placeholder="Enter your name"
                    className="mt-1 w-full px-4 py-2 placeholder:text-sm  bg-[var(--third-background-color)] outline-none  rounded-md focus:ring focus:ring-[var(--primary-color)]"
                  />
                  <div>{errors.name?.message}</div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-2  bg-[var(--third-background-color)] outline-none placeholder:text-sm  rounded-md focus:ring focus:ring-[var(--primary-color)]"
                />
                <div>{errors.email?.message}</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                  })}
                  placeholder="Enter your password"
                  className="mt-1 w-full px-4 py-2 placeholder:text-sm   bg-[var(--third-background-color)] outline-none  rounded-md focus:ring focus:ring-[var(--primary-color)]"
                />
                <div>{errors.password?.message}</div>
              </div>

              {authMode === AuthModeEnum.ForgetPassword && (
                <div>
                  <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                    OTP
                  </label>
                  <input
                    type="number"
                    {...register("verifyOtp", {
                      required: {
                        value: false,
                        message: "otp is required",
                      },
                    })}
                    placeholder="Enter your OTP"
                    className="mt-1 w-full px-4 py-2 placeholder:text-sm   bg-[var(--third-background-color)] outline-none  rounded-md focus:ring focus:ring-[var(--primary-color)]"
                  />
                  <div>{errors.verifyOtp?.message}</div>
                </div>
              )}

              <div
                onClick={() => setAuthMode(AuthModeEnum.ForgetPassword)}
                className="text-[var(--primary-color)] text-[12px] text-end cursor-pointer"
              >
                Forget password
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md hover:opacity-80  active:scale-95  transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className={`transition-all  ${
            testOtp ? "translate-x-[-330px]" : "translate-x-[200px]"
          } `}
        >
          <OtpVerification />
        </div>
      </div>

      <div className="text-center text-[14px] mt-2">
        Already have an account?
        {authMode === AuthModeEnum.SignUp ? (
          <span
            onClick={() => setAuthMode(AuthModeEnum.SignIn)}
            className="text-[var(--primary-color)] cursor-pointer"
          >
            Sign in
          </span>
        ) : (
          <span
            onClick={() => setAuthMode(AuthModeEnum.SignUp)}
            className="text-[var(--primary-color)] cursor-pointer"
          >
            Sign up
          </span>
        )}
      </div>
    </div>
  );
};

export default Signin;
