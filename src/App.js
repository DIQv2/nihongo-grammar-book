import './assets/css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Grammar from "./pages/Grammar";
import Dictionary from "./pages/Dictionary";
import Counters from "./pages/Counters";
import KanjiPage from "./pages/KanjiPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} exact element={<Home />}>
                  <Route index element={<Grammar />}/>
                  <Route path={"grammar"} element={<Grammar />}/>
                  <Route path={"dictionary"} element={<Dictionary/>}/>
                  <Route path={"counters"} element={<Counters/>}/>
                  <Route path={"kanji"} element={<KanjiPage />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
