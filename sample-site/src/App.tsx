import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Title text="My React App Using TypeScript" />
        <div className="d-flex justify-content-around">
          <Counter header="1st Number" amt={5} />
          <Counter header="2nd Number" amt={-9} />
        </div>
      </main>
    </>
  );
}

export default App;
