import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Products from "./pages/Products";
import ConsumerInfo from "./pages/ConsumerInfo";
import Distributor from "./pages/Distributor";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Benefits from "./pages/ConsumerInfo/Benefits";
import Uses from "./pages/ConsumerInfo/Uses";
import Resources from "./pages/ConsumerInfo/Resources";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/info" element={<ConsumerInfo />} />
          <Route path="/info/benefits" element={<Benefits />} />
          <Route path="/info/uses" element={<Uses />} />
          <Route path="/info/resources" element={<Resources />} />
          <Route path="/info/faq" element={<Resources />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
