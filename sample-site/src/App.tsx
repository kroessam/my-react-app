import Navbar from "./components/Navbar";
import Combiner from "./components/Combiner";

import { Routes, Route } from "react-router-dom";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Combiner />} />
        <Route path="/test" element={<Title text="Test Routing Page" />} />
      </Routes>
    </>
  );
}

export default App;
