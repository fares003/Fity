import React from "react";

function Button({ text, className, onClick }: { text: string; className?: string; onClick: () => void }) {
  return (
    <div
      className={`px-8 py-5 text-white font-semibold  
bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition cursor-pointer text-2xl ${className}`}
      onClick={onClick}
    >

      {text}
    </div>
  );
}

export default Button;
