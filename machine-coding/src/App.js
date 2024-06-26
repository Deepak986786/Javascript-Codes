import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProblemHome from "./problems/ProblemHome";
import Home from "./Home/Home";
import HomeLayout from "./Home/HomeLayout";
import ProblemsLayout from "./problems/problemsLayout";
import NotFound from "./shared/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/*" element={<NotFound />}></Route>
      </Route>
      <Route path="/problems" element={<ProblemsLayout />}>
        <Route path="/problems/home" element={<ProblemHome />} />
        <Route path="/problems/*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
