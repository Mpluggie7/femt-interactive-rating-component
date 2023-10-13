import "./App.css";
import RateMe from "./pages/RateMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYou from "./pages/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RateMe />} />
        <Route path="thankyou/:star" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
