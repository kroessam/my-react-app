import Title from "./components/Title";
import Navbar from "./components/Navbar";
import NumberGame from "./components/NumberGame";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Title text="My React App Using TypeScript" />
        <NumberGame />
      </main>
    </>
  );
}

export default App;
