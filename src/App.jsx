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
import ExclusivePage from "./pages/ExclusivePage/ExclusivePage";
import SlotPage from "./pages/SlotPage/SlotPage";
import NewReleasesPage from "./pages/NewReleasesPage/NewReleasesPage";
import TableGamePage from "./pages/TableGamePage/TableGamePage";
import BlackJackPage from "./pages/BlackJackPage/BlackJackPage";
import RoulettePage from "./pages/Roulette/RoulettePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import General from "./components/SettingsComponent/General/General";
import Security from "./components/SettingsComponent/Security/Security";
import Preferences from "./components/SettingsComponent/Preferences/Preferences";
import Blacklist from "./components/SettingsComponent/Blacklist/Blacklist";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import { useEffect } from "react";
import { LoadingUser } from "./Actions/UserAction";
import AfflicatePage from "./pages/AfflicatePage/AfflicatePage";
import Overview from "./components/AfflicatePageComponent/Overview/Overview";
import RefUser from "./components/AfflicatePageComponent/RefUser/RefUser";
import RefLink from "./components/AfflicatePageComponent/RefLink/RefLink";
import Otp from "./pages/Register/Otp";


function App() {

  useEffect(() => {
    store.dispatch(LoadingUser);
  });

  return (
    <>
      <div className="App">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LayOut> <Home /></LayOut>} />
            <Route exact path="/bonus" element={<LayOut> <Bonus /></LayOut>} />
            <Route exact path="/otp" element={<LayOut> <Otp /></LayOut>} />

            <Route
              path="/settings"
              element={
                <LayOut>
                  <SettingsPage />
                </LayOut>
              }
            >
              <Route path="general" element={<General />} />
              <Route path="security" element={<Security />} />
              <Route path="preferences" element={<Preferences />} />
              <Route path="black-list" element={<Blacklist />} />
            </Route>
            <Route
              path="/referral"
              element={
                <LayOut>
                  <AfflicatePage />
                </LayOut>
              }
            >
              <Route path="overview" element={<Overview />} />
              <Route path="comission" element={<RefUser />} />
              <Route path="referred-users" element={<RefLink />} />
            </Route>
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
              <Route path="exclusives" element={<ExclusivePage />} />
              <Route path="slots" element={<SlotPage />} />
              <Route path="new-releases" element={<NewReleasesPage />} />
              <Route path="table-games" element={<TableGamePage />} />
              <Route path="blackjack" element={<BlackJackPage />} />
              <Route path="roulette" element={<RoulettePage />} />
              <Route path="blog" element={<BlackJackPage />} />
              <Route path="live" element={<RoulettePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
