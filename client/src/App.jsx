import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import LandingPage from "./pages/LandingPage";
import Desktop from "./pages/Desktop";
import { TopBar } from "./components/TopBar";
import { useEffect, useState } from "react";

function App() {
  const [userLogged, setUserLogged] = useState(
    () => localStorage.getItem("userLogged") === "true",
  );

  useEffect(() => {
    setUserLogged(localStorage.getItem("userLogged") === "true");
  }, []);

  return (
    <BrowserRouter>
        {/* TopBar; contain route to the settingsn and other accessbility of the system */}
        <TopBar userLogged={userLogged} setUserLogged={setUserLogged} />
      {userLogged ? (
        <div className="flex flex-col justify-center items-center h-screen ">
          <Routes>
            <Route path="/" element={<Desktop />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          {/* Landing Page of the miniOS */}
          <Route
            path="/"
            element={
              <LandingPage
                userLogged={userLogged}
                setUserLogged={setUserLogged}
              />
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
