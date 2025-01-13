import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import ConsumerInfo from "./pages/ConsumerInfo";
import Distributor from "./pages/Distributor";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/info" element={<ConsumerInfo />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
