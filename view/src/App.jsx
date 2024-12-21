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
          minHeight: "100vh", // Ensure the parent container spans the entire viewport height
        }}
      >
        {/* Header (with Navbar) */}
        <Header />
        <AppRoute/>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
