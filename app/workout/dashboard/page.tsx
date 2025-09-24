import React from "react";
import WelcomeBar from "../components/WelcomeBar";
import Kcal from "./components/Kcal";
import { Bar } from "recharts";
import BieChart from "@/app/Components/BieChart";
const childrenStyle="p-4 rounded-xl flex flex-col gap-4 bg-white shadow-md text-black flex-1"
function page() {
  return (
    <div className="min-h-screen bg-gray-200   p-4 ">
      <WelcomeBar
        mainTitle="Welcome back champion! "
        subTitle="Ready to crush your workout today?🔥🔥"
      />
 <div className="flex justify-between w-full gap-2">
  <div className={childrenStyle}>
    <h1>
        <p className="text-xl  font-bold capitalize">
        commence at any location <br/> Reach any objective
        </p>
        <p className="text-xs font-normal text-gray-600">
            Fity provides intentional, progressive fitness <br /> programs with specific nutritional, recovery, and mindset <br /> tips to help you reach your goals.
        </p>
    </h1>
    <Kcal />
  </div>
  <div className={childrenStyle}>
         <p className="text-xl font-bold mb-4 capitalize">
        Activity
        </p>
        <BieChart />
  </div>
</div>

    </div>
  );
}

export default page;
