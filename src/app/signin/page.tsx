"use client";
/** core libraries & installed libraries */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

/** icons */
import { FaCode, FaGithub } from "react-icons/fa6";

/** user defined component */
import OtpVerification from "@/components/otpVerification/OtpVerification";
import { Toast } from "@/components/toast/toast";

/** services */
import { CLIENT_ID } from "@/services/config";
import {
  accessGithub,
  loginViaEmail,
  registerViaEmail,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
} from "@/services/api";

/** interfaces */
import { IUser } from "@/interface/user";
import { iResponse } from "@/interface/common";

enum AuthModeEnum {
  SignIn = "signin",
  SignUp = "signup",
  ForgetPassword = "forgetPassword",
}

const Signin: React.FC = () => {
  /** ================== useState start ================== */
  const [authMode, setAuthMode] = useState<AuthModeEnum>(AuthModeEnum.SignUp);
  const [isOtpSuccess, setIsOtpSuccess] = useState(false);
  const [isToastVisible, setToastVisible] = useState(false);
  const [toastValue, setToastValue] = useState<iResponse>();

  const [iForgetPasswordMailSent, setIsForgetPasswordMailSent] =
    useState(false);

  const [loading, setLoading] = useState(false);

  /** ================== useState end ================== */

  /** ==================  hooks start ================== */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({});

  const router = useRouter();

  /** ==================  hooks end ================== */
  /** ================== useEffect start ================== */
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  }, [isToastVisible]);

  /** ================== useEffect end ================== */

  /** ================== function start ================== */

  const onAuthSubmit = async (data: IUser) => {
    setLoading(true);

    /// ? note:  don't use data change it

    if (authMode === AuthModeEnum.SignIn) {
      delete data.name;
      try {
        const response = await loginViaEmail(data);

        if (response.status === true) {
          if (response.isAccountVerified === true) {
            setTimeout(() => {
              router.push("/home");
            }, 1500);

            setToastVisible(true);
          } else {
            setIsOtpSuccess(true);
            sendVerifyOtp();
          }
        } else {
          setToastVisible(true);
          setToastValue(response);

          console.log(response.status);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      return;
    }

    if (iForgetPasswordMailSent === true) {
      delete data.name;
      delete data.password;

      try {
        const response = await resetPassword(data);

        if (response.status === true) {
          router.push("/home");
        } else {
          setToastValue(response);
          setToastVisible(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
      console.log(data);
      return;
    }
    if (authMode === AuthModeEnum.ForgetPassword) {
      delete data.name;
      delete data.password;
      const response = await sendResetOtp(data);

      try {
        if (response.status === true) {
          setIsForgetPasswordMailSent(true);
        } else {
          setToastValue(response);
          setToastVisible(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      console.log(data);
      return;
    }

    const response = await registerViaEmail(data);

    try {
      if (response.status === true) {
        setLoading(false);
        setIsOtpSuccess(true);
        sendVerifyOtp();
      } else {
        console.log(response.status);
        setLoading(false);
        setToastValue(response);
        setToastVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getGithubCode = async () => {
    setLoading(true);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (!codeParam) {
      // Redirect to GitHub if there's no code in URL
      window.location.assign(
        "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
      );
    }
    if (codeParam === null) {
      return;
    }

    try {
      const response = await accessGithub({ code: codeParam });

      if (response.status === true) {
        console.log("trueee");
        router.push("/home");
      } else {
        router.push("false");

        setToastValue(response);
        setToastVisible(true);
      }
    } catch (error) {
      router.push("errorerror");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /** ================== function end ================== */

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      {isToastVisible && toastValue && <Toast toastValue={toastValue} />}

      <div className="text-xl md:text-3xl flex flex-col items-center gap-5 font-bold">
        <FaCode size={45} className=" text-[var(--icon-color)]" />
        <div className="text-center">
          CodeReviewAI
          <div className="text-sm font-normal text-[var(--secondary-text-color)]">
            Your intelligent review assistant
          </div>
        </div>
      </div>

      <div
        className={`relative  p-6 bg-[var(--secondary-background-color)] rounded-md mt-5 max-w-sm w-full  flex overflow-hidden  ${
          loading ? "opacity-75" : ""
        } `}
      >
        <div
          className={`absolute w-[30px] h-[5px] rounded-2xl top-0 left-0 bg-[var(--primary-color)] animate-loading  ${
            loading ? "block" : "hidden"
          }  `}
        ></div>

        <div
          className={` transition-all flex-none w-full ${
            isOtpSuccess ? "translate-x-[-500px]" : ""
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
              className="max-w-md mx-auto rounded-lg shadow-md space-y-6 mt-5"
            >
              {authMode === AuthModeEnum.SignUp && (
                <div className="relative">
                  <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: { value: true, message: "Name is required" },
                    })}
                    placeholder="Enter your name"
                    className="mt-1 w-full px-4 py-2 placeholder:text-sm bg-[var(--third-background-color)] outline-none rounded-md focus:ring focus:ring-[var(--primary-color)]"
                  />
                  <div className="absolute bottom-[-24px] right-0 text-[12px] text-[var(--error-text-color)]">
                    {errors.name?.message}
                  </div>
                </div>
              )}

              <div className="relative">
                <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                  })}
                  placeholder="Enter your email"
                  className="mt-1 w-full px-4 py-2 bg-[var(--third-background-color)] outline-none placeholder:text-sm rounded-md focus:ring focus:ring-[var(--primary-color)]"
                />
                <div className="absolute bottom-[-24px] right-0 text-[12px] text-[var(--error-text-color)]">
                  {errors.email?.message}
                </div>
              </div>

              {authMode !== AuthModeEnum.ForgetPassword && (
                <div className="relative">
                  <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                    placeholder="Enter your password"
                    className="mt-1 w-full px-4 py-2 placeholder:text-sm bg-[var(--third-background-color)] outline-none rounded-md focus:ring focus:ring-[var(--primary-color)]"
                  />
                  <div className="absolute bottom-[-23px] right-0 text-[12px] text-[var(--error-text-color)]">
                    {errors.password?.message}
                  </div>
                </div>
              )}

              {authMode === AuthModeEnum.ForgetPassword &&
                iForgetPasswordMailSent && (
                  <>
                    <div className="relative">
                      <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                        OTP
                      </label>
                      <input
                        type="number"
                        {...register("otp", {
                          required: { value: true, message: "OTP is required" },
                        })}
                        placeholder="Enter your OTP"
                        className="mt-1 w-full px-4 py-2 placeholder:text-sm bg-[var(--third-background-color)] outline-none rounded-md focus:ring focus:ring-[var(--primary-color)]"
                      />
                      <div className="absolute bottom-[-24px] right-0 text-[12px] text-[var(--error-text-color)]">
                        {errors.otp?.message}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-[var(--primary-text-color)]">
                        New Password
                      </label>
                      <input
                        type="password"
                        {...register("newPassword", {
                          required: {
                            value: true,
                            message: "Password is required",
                          },
                        })}
                        placeholder="Enter new password"
                        className="mt-1 w-full px-4 py-2 placeholder:text-sm bg-[var(--third-background-color)] outline-none rounded-md focus:ring focus:ring-[var(--primary-color)]"
                      />
                      <div className="absolute bottom-[-24px] right-0 text-[12px] text-[var(--error-text-color)]">
                        {errors.password?.message}
                      </div>
                    </div>
                  </>
                )}

              <div
                onClick={() => setAuthMode(AuthModeEnum.ForgetPassword)}
                className="text-[var(--primary-color)] text-[12px] text-end cursor-pointer"
              >
                Forget password?
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--primary-color)] text-white py-2 rounded-md hover:opacity-80 active:scale-95 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className={`transition-all  ${
            isOtpSuccess ? "translate-x-[-330px]" : "translate-x-[200px]"
          } `}
        >
          <OtpVerification
            setLoading={setLoading}
            setToastValue={setToastValue}
            setToastVisible={setToastVisible}
          />
        </div>
      </div>
      {!isOtpSuccess && (
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
      )}
    </div>
  );
};

export default Signin;
