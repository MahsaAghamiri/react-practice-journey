import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./src/Pages/HomePage/index.jsx";
import XOGame from "./src/Pages/XOGame/index.jsx";
import InvestmentCalculator from "./src/Pages/InvestmentCalculator/index.jsx";
import ProjectManagment from "./src/Pages/ProjectManagment/index.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/XOGame" element={<XOGame />} />
        <Route
          path="/InvestmentCalculator"
          element={<InvestmentCalculator />}
        />
        <Route path="/ProjectMng" element={<ProjectManagment />} />
      </Routes>
    </BrowserRouter>
  );
}
