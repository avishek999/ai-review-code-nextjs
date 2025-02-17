import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <LandingPage />
    </div>
  );
}
