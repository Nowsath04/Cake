import "./App.css";
import LayOut from "./components/Layout/LayOut";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <LayOut>
          <Home />
        </LayOut>
      </div>
    </>
  );
}

export default App;
