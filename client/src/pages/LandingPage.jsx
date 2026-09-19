"use strict";
import { useNavigate } from "react-router-dom";
const LandingPage = ({}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/desktop", { replace: true });
  };

  return (
    <div className="text-white flex flex-col h-screen justify-center items-center gap-5">
      <h1 className="text-xl font-bold">
        Hello, from <span className="text-yellow-400">Harmin</span>
      </h1>

      <button
        onClick={handleClick}
        className={`relative text-xl flex items-center justify-center gap-2 cursor-pointer px-4 py-2 w-40 border border-white hover:opacity-60 transition-all duration-300 ease-in-out`}
      >
        Explore
        {/*  Left Arrow Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#fff"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
    </div>
  );
};

export default LandingPage;
