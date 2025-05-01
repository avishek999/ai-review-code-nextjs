/** user defined component */
"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import LandingPage from "@/components/LandingPage";
import { useAuthContext } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const { isAuthenticated } = useAuthContext();

  const params = useSearchParams();
  const key = params.toString();
  return (
    <div className="w-full">
      <Navbar isAuthenticated={isAuthenticated} />

      <LandingPage isAuthenticated={isAuthenticated} key={key} />
      <Footer />
    </div>
  );
}
