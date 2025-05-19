import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./src/Pages/HomePage/index.jsx";
import XOGame from "./src/Pages/XOGame/index.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/XOGame" element={<XOGame />} />
      </Routes>
    </BrowserRouter>
  );
}
