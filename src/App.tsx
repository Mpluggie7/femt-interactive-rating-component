import React from "react";
import "./App.css";
import RateMe from "./pages/RateMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter
      basename={
        import.meta.env.DEV ? "/" : "/femt-interactive-rating-component/"
      }
    >
      <Routes>
        <Route path="/" element={<RateMe />}>
          <Route path="thankyou/:star" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
