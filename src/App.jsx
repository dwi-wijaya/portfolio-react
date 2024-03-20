import React, { useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import ThemeToggle from "./components/toggles/ThemeToggle";
import ScrollUpToggle from "./components/toggles/ScrollUpToggle";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "./components/elements/ProgressBar";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 50,
    });
  }, []);
  return (
    <ThemeProvider>
      <Toaster
        toastOptions={{
          style: {
            background: "var(--container-color)",
            color: "var(--text-color)",
          },
        }}
        position="top-right"
      />
      <ThemeToggle />
      <ScrollUpToggle />
      <Sidebar />
      <div className="main">
        <div className="layout-overlay layout-menu-toggle"></div>
        <ProgressBar>
          <AppRoutes />
        </ProgressBar>
      </div>
    </ThemeProvider>
  );
}

export default App;
