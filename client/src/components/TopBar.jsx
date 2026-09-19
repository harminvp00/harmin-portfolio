import { useEffect, useState } from "react";

export const TopBar = ({}) => {
  function printDate() {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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
      <div className="flex-1 flex items-center gap-2 font-bold">
        <img src="/android.svg" alt="" />
        Harmin Vekariya
      </div>
      <div className="relative flex-1 flex justify-center group">
        <p className="cursor-pointer">{date}</p>
      </div>
      <div className="flex-1">

      </div>
    </nav>
  );
};
