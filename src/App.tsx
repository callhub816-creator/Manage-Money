import React from 'react';
import { Routes, HashRouter } from 'react-router-dom';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import AppRoutes from './routes';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        {AppRoutes}
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
