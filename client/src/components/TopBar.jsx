import { useEffect, useState } from "react";

export const TopBar = ({ userLogged, setUserLogged }) => {
  function printDate() {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  function logout() {
    localStorage.setItem("userLogged", "false");
    setUserLogged(false);
  }

  const [date, setDate] = useState(printDate());

  function editDate() {
    alert("edit dates");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(printDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex items-center h-10 w-full px-4 topbar">
      <div className="flex-1 font-bold">Harmin Vekariya</div>
      <div className="relative flex-1 flex justify-center group">
        <p className="cursor-pointer">{date}</p>

        <div className="absolute top-5 hidden group-hover:flex flex-col bg-[#f5f5f5] shadow-lg rounded-md">
          <div className="px-10 py-2 hover:bg-gray-200 cursor-pointer">
            Feature
          </div>
          <div className="px-10 py-2 hover:bg-gray-200 cursor-pointer">
            Feature
          </div>
          <div className="px-10 py-2 hover:bg-gray-200 cursor-pointer">
            Feature
          </div>
          <div className="px-10 py-2 hover:bg-gray-200 cursor-pointer">
            Feature
          </div>
        </div>
      </div>
      {
        userLogged ?
          <div className="flex-1 flex justify-end">
            <button onClick={logout}>Logout</button>
          </div>
          : 
          <div className="flex-1">  </div>

      }

      

      
    </nav>
  );
};
