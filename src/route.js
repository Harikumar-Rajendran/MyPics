import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Authentication/Auth";
import Settings from "./Settings/Settings";
import FetchContent from "./Contentful/FetchContent";
import Cards from "./Dashboard/Cards/Cards";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Auth />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/pics" element={<FetchContent />}></Route>
        <Route path="/cards/:id" element={<Cards />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;