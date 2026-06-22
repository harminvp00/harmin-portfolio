
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import LandingPage from "./pages/LandingPage";
import Desktop from "./pages/Desktop";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mainSpace" element={<Desktop/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
