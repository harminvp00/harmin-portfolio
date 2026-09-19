/**
 * this is component is used to search application on the desktop and manpulated listed application on the desktop, thats it
 */
import { useState } from "react";
import files from "../data/files";

/**
 *
 * @param {currentApps, setCurrentApps}, are passed prop from desktop page, and used to manipulate the listed component on the desktop
 * @returns it is return a list of application that appear as search results and specifically this component handles search
 */
export const Search = ({ currentApps, setCurrentApps }) => {
  let searchListedFiles = [];
  const [searchText, setSearchText] = useState("");

  if (searchText === "") {
    setCurrentApps(files);
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value);

    for (let app in currentApps) {
      if (currentApps[app].includes(searchText)) {
        searchListedFiles.push(currentApps[app]);
      }
    }
    setCurrentApps(searchListedFiles);

    if(searchListedFiles.length === 0){
      return <div> No Match found for search {searchText} </div>
    }
  };

  /**
   * this is return JSX: an input and manipulate desktop container that show search results or actual list of application on portfolio
   */

  return (
    <div className="relative w-full max-w-md transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer"
      >
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>

      <input
        className="w-full px-5 py-3 pr-12 bg-[#f5f5f5] placeholder:text-black text-xl rounded-[10px] outline-none"
        placeholder="Search"
        type="text"
        value={searchText}
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
};
