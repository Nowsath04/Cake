import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./components/Layout/LayOut";
import Casino from "./pages/Casino/Casino";
import Home from "./pages/Home/Home";
import CakeOriginalCard from "./components/cake-original-loading-card/CakeOriginalCard";
import Bonus from "./pages/bonus/Bonus";
import OriginalPage from "./pages/OriginalPage/OriginalPage";
import LobbyPage from "./pages/LobbyPage/LobbyPage";
import LivePage from "./pages/LivePage/LivePage";
import GameShowPage from "./pages/GameShowPage/GameShowPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import RecentPage from "./pages/RecentPage/RecentPage";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LayOut> <Home /></LayOut>} />
            <Route exact path="/bonus" element={<LayOut> <Bonus /></LayOut>} />
            <Route
              path="/casino"
              element={
                <LayOut>
                  <Casino />
                </LayOut>
              }
            >
              <Route path="lobby" element={<LobbyPage />} />
              <Route path="cake-original" element={<OriginalPage />} />
              <Route path="live-casino" element={<LivePage />} />
              <Route path="game-shows" element={<GameShowPage />} />
              <Route path="favourite" element={<FavouritePage />} />
              <Route path="recents" element={<RecentPage />} />
              <Route path="exclusives" element={<RecentPage />} />
              <Route path="slots" element={<RecentPage />} />
              <Route path="new-releases" element={<RecentPage />} />
              <Route path="table-games" element={<RecentPage />} />
              <Route path="blackjack" element={<RecentPage />} />
              <Route path="roulette" element={<RecentPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
