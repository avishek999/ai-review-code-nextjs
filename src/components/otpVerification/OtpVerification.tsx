import { verifyOtp } from "@/services/api";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
interface OTPFormData {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
}

interface IOtpVerification {
  setLoading: (loading: boolean) => void;
}

const OtpVerification: React.FC<IOtpVerification> = ({ setLoading }) => {
  const { register, handleSubmit } = useForm<OTPFormData>();
  const router = useRouter();

  const onSubmit = async (data: OTPFormData) => {
    const otp = Object.values(data).join("");
    const payload = {
      otp: otp,
    };
    setLoading(true);

    const response = await verifyOtp(payload);

    console.log(response.status);

    try {
      if (response.status === true) {
        console.log("trueeeee");
        router.push("/home");

      } else {
        console.log(response.status);
        console.log("falseee");
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto text-center px-4 sm:px-8 py-10 rounded-xl shadow ">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>
      </header>
      <form id="otp-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 "
              maxLength={1}
              {...register(`otp${index + 1}` as keyof OTPFormData)}
            />
          ))}
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500 mt-4">
        Didn &apos; t receive code?{" "}
        <a
          className="font-medium text-indigo-500 hover:text-indigo-600"
          href="#0"
        >
          Resend
        </a>
      </div>
    </div>
  );
};

export default OtpVerification;
