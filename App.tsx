
import React from 'react';
import { Routes } from 'react-router-dom';
import Header from './src/shared/components/Header';
import Footer from './src/shared/components/Footer';
import AppRoutes from './src/routes';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          {AppRoutes}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
