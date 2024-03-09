import "./App.css";
import PrimarySearchAppBar from "./components/bar";
import ActionAreaCard from "./components/card";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <PrimarySearchAppBar/>
      <ActionAreaCard />
    </div>
  );
}

export default App;
