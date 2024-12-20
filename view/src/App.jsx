import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    resolution: 7,
  });

  const handleNavbarInputChange = (inputs) => {
    setLocation(inputs);
    console.log('Updated Location:', inputs);
    // Use the location values for H3 processing or map updates
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (with Navbar) */}
      <Header onNavbarInputChange={handleNavbarInputChange} />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        {/* Placeholder for H3 Map */}
        <div className="h-[500px] w-[800px] bg-gray-300 border-2 border-gray-400 rounded-md shadow-md">
          <p className="text-center text-gray-600">H3 Map will render here</p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
