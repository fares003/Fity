"use client";
import React from "react";
import Button from "../../Components/Button";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";
import image from "@/public/images/Untitled.png";
import Slider from "./Slider";
import Result from "./Result";
function BMIPage() {
  const [height, setHeight] = React.useState(170);
  const [weight, setWeight] = React.useState(70);
  const [gender, setGender] = React.useState("male");
  const [bmi, setBmi] = React.useState<number | null>(null);
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };
  return (
    <div className=" relative pt-24 h-fit overflow-hidden">
      <div className="flex flex-col  gap-8 px-8 mb-12">
      <div className="flex gap-4 text-xl font-semibold text-white">
        <button className={`relative cursor-pointer  p-[2px] ${gender === "male" ? "bg-gradient-to-r from-red-500 to-red-700" : "bg-gray-700"}`} onClick={() => setGender("male")}>
          <span className="block  bg-gray-700 px-6 py-3 text-white">
            <IoIosMale className="inline-block mr-2" />
            Male
          </span>
        </button>

        <button className={`relative cursor-pointer p-[2px] ${gender === "female" ? "bg-gradient-to-r from-red-500 to-red-700" : "bg-gray-700"}`} onClick={() => setGender("female")}>
          <span className="block  bg-gray-700 px-6 py-3 text-white">
            <IoIosFemale className="inline-block mr-2" />
            Female
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <Slider value={height} type="height" setValue={setHeight} />
        <Slider value={weight} type="weight" setValue={setWeight} />
      </div>
      <div className="flex gap-8">
        <Button text="Calculate BMI" onClick={() => { setBmi(calculateBMI()); }} />
      </div>
      </div>
      <Result result={bmi} height={height} />
      <img src={image.src} className="absolute p-0 scale-75 m-0 top-[-155px] right-[-110px] object-contain " alt="" />
    </div>
  );
}

export default BMIPage;
