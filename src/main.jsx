import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./admin-panel/dashboard/Sidebar/Sidebar.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  </React.StrictMode>
);
