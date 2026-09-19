import Application from "../components/Aplications";
import { Search } from "../components/Search";
import { useState } from "react";
import files from "../data/files";

const Desktop = () => {
  const [currentApps, setCurrentApps] = useState(files);
  return (
    <div className="animate-page-enter h-full w-full flex flex-col justify-center items-center gap-10">
      <p className="text-white font-bold"> miniOS portfolio </p>

      <Search currentApps={currentApps} setCurrentApps={setCurrentApps} />

      <div className="text-white grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-5">
        {currentApps.map((ele, index) => {
          return <Application key={index} index={index} title={ele} />;
        })}
      </div>
    </div>
  );
};

export default Desktop;
