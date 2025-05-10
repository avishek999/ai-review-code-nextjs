/** user defined component */
"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import LandingPage from "@/components/LandingPage";
import { useAuthContext } from "@/context/AuthContext";

export default function Home() {
  const { isAuthenticated ,revalidateAuth } = useAuthContext();
  return (
    <div className="w-full">
      <Navbar isAuthenticated={isAuthenticated} />

      <LandingPage isAuthenticated={isAuthenticated}  revalidateAuth={revalidateAuth} />
      <Footer />
    </div>
  );
}
