import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { RegistrationProvider } from './context/RegistrationContext';
import { Navbar } from './components/common/Navbar/Navbar';
import { Footer } from './components/common/Footer/Footer';
import { ToastContainer } from './components/common/Toast/ToastContainer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { Home } from './pages/Home';
import { EventsCatalogue } from './pages/EventsCatalogue';
import { EventDetails } from './pages/EventDetails';
import { RegisterStandalone } from './pages/RegisterStandalone';
import { MyRegistrations } from './pages/MyRegistrations';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <RegistrationProvider>
          <BrowserRouter>
            <ScrollToTop />
            <a href="#main-content" className="skip-link">
              Skip to primary content
            </a>

            <div className="app-shell">
              <Navbar />

              <div id="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<EventsCatalogue />} />
                  <Route path="/events/:id" element={<EventDetails />} />
                  <Route path="/register" element={<RegisterStandalone />} />
                  <Route path="/register/:id" element={<RegisterStandalone />} />
                  <Route path="/my-registrations" element={<MyRegistrations />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>

              <Footer />
              <ToastContainer />
            </div>
          </BrowserRouter>
        </RegistrationProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};
