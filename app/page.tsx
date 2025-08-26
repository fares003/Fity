import Image from "next/image";
import LandingPage from "./Pages/LandingPage";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-black px-8">
    <LandingPage />
   </div>
  );
}
