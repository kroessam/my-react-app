import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}

export default App;
