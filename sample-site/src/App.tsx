import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";

import Navbar from "./components/Navbar";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  );
}

export default App;
