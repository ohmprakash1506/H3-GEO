import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AppRoute from "./routes/route";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Full viewport height
        }}
      >
        <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
          <Header />
        </div>
        
        {/* Main content */}
        <div
          style={{
            flex: 1, // Ensures AppRoute takes remaining space
          }}
        >
          <AppRoute />
        </div>
        
        {/* Fixed Footer */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            zIndex: 1000,
          }}
        >
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
