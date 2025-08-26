import React from "react";
import { Edge } from "@/Types/EdgesType";
function Advantages({ Edge }: { Edge: Edge }) {
  return (
    <div
      className={`flex flex-col border  border-r-4 p-4 ${
        Edge.id % 2 === 0 ? "border-r-orange-500" : "border-r-red-500"
      }`}
    >
      <div className="flex items-center gap-2 ">
        <p
          className={`text-2xl font-bold ${
            Edge.id % 2 === 0 ? "text-orange-500" : "main-red"
          }`}
        >
          {Edge.percentage}
        </p>
        <p className="text-xl text-white font-bold ">{Edge.title}</p>
      </div>
      <p className="text-gray-600">{Edge.description}</p>
    </div>
  );
}

export default Advantages;
