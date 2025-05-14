import { BrowserRouter, Routes, Route } from "react-router";
import Practice01 from "./src/Pages/Practice01/index.jsx";
import HomePage from "./src/Pages/HomePage/index.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice01" element={<Practice01 />} />
      </Routes>
    </BrowserRouter>
  );
}
