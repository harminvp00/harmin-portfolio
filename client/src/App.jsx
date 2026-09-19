import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import LandingPage from "./pages/LandingPage";
import Desktop from "./pages/Desktop";
import { TopBar } from "./components/TopBar";
import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      {/* TopBar; contain route to the settingsn and other accessbility of the system */}
      <TopBar u />
      <div className="flex flex-col justify-center items-center h-screen ">
        <Routes>
          <Route path="/desktop" element={<Desktop />} />

          {/* Landing Page of the miniOS */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
