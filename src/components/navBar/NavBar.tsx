"use client";
import React, { useState } from "react";

function NavBar() {
  const [current, setCurrent] = useState("#find");

  const handleSelect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setCurrent(event.currentTarget.id);
  };

  const links = [
    { id: "#find", label: "Find" },
    { id: "#instructions", label: "Instructions" },
    { id: "#about", label: "About" },
  ];

  return (
    <div className="flex flex-row justify-between items-center text-white">
      <div className="text-[16px] ml-8 md:text-[22px]">
        <a href="#" className="hover:text-white">
          CodeReview
        </a>
      </div>

      <div>
        {links.map(({ id, label }) => (
          <a
            key={id}
            id={id}
            href={`${id}`}
            onClick={handleSelect}
            className={`ml-1 md:mr-[0.5px] text-[14px] md:text-[19px] px-3 py-[24.5px] md:py-[21px] transition-all duration-200 ${
              current === id
                ? "bg-white text-black hover:text-black"
                : "hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
