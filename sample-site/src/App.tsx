import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Title text="My React App Using TypeScript" />
        <Counter amt={-5}/>
      </main>
    </>
  );
}

export default App;
