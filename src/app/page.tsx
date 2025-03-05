/** user defined component */

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import LandingPage from "@/layouts/LandingPage";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
