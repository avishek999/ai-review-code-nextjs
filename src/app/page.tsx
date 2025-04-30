/** user defined component */
"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import LandingPage from "@/components/LandingPage";



export default function Home() {


  return (
    <div className="w-full">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
