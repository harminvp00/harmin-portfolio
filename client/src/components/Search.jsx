

export const Search = () => {
  return (
     <div className="relative w-full max-w-md">
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
            />
    </div>
  )
}
