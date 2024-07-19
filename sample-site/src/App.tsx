import Title from "./components/Title";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <main className="container mt-5">
      <Title text="My React App Using TypeScript"/>
    </main>
    </>
  );
}

export default App;
