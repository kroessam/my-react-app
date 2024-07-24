import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Combiner from "./components/Combiner";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Title text="My React App Using TypeScript" />
        <Combiner />
      </main>
    </>
  );
}

export default App;
