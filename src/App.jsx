import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./components/Layout/LayOut";
import Casino from "./pages/Casino/Casino";
import Home from "./pages/Home/Home";
import CakeOriginalCard from "./components/cake-original-loading-card/CakeOriginalCard";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LayOut> <Home /></LayOut>} />
            <Route exact path="/casino" element={<LayOut> <Casino /></LayOut>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
