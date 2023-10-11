
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./components/Popular";
import Main from './components/Main';
import "./components/App.css"
import DetailsCardMovie from "./components/DetailsCardMovie";
import TopRated from "./components/TopRated";
import NowPlaying from "./components/NowPlaying";
import Upcoming from "./components/UpComing"
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/:idMovie" element={<DetailsCardMovie />} />     
          <Route path="/upcoming" element={<Upcoming />} />     

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
