import "./App.css";
import LayOut from "./components/Layout/LayOut";
import Casino from "./pages/Casino/Casino";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <LayOut>
          <Casino />
        </LayOut>

      </div>
    </>
  );
}

export default App;
