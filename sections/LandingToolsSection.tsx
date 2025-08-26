'use client'
import Navigate from "@/app/Components/Navigate";
import React, { useState } from "react";
import {toolsData} from "@/StaticData/ToolsData";
import ToolCard from "@/app/Components/ToolCard";
import { ToolType } from "@/Types/ToolsType";
import SliderComponent from "@/app/Components/Slider";
const pageCount = 5;
const toolsPerPage = Math.ceil(toolsData.length / pageCount);
function LandingToolsSection() {
    const [currentPage, setCurrentPage] = useState(0);

    const atNext = () => {
      if (currentPage < toolsPerPage - 1) {
        setCurrentPage((prev) => prev + 1);
      }
    };
    const atPrevious = () => {
        if (currentPage > 0) {
          setCurrentPage((prev) => prev - 1);
        }
    };


  return (
    <div className="flex items-center mb-24 flex-col gap-8">
      <div className="w-full flex justify-between">
        <div className="text-4xl font-bold text-red-500">
          <span className="text-white">Our Fitness</span> Tools
        </div>
        <Navigate atNext={atNext} atPrevious={atPrevious} pageCount={toolsPerPage} currentPage={currentPage} />
      </div>
      <p className="text-lg  text-gray-600">
        Access a variety of tools to help you reach your fitness goals more
        effectively
      </p>
      <div className="w-full overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentPage * (100 / pageCount)}%)`,
      width: `${(toolsData.length * 100) / pageCount}%`,
    }}
  >
    {toolsData.map((tool) => (
      <div
        key={tool.id}
        className="w-[calc(100%/6)] flex-shrink-0 px-2"
      >
        <ToolCard tool={tool} />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default LandingToolsSection;
