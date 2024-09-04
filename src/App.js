import './assets/css/App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Grammar from "./pages/Grammar";
import Dictionary from "./pages/Dictionary";
import Counters from "./pages/Counters";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path={"/nihongo-grammar-book"} exact element={<Home />}>
                  <Route index element={<Grammar />}/>
                  <Route path={"grammar"} element={<Grammar />}/>
                  <Route path={"dictionary"} element={<Dictionary/>}/>
                  <Route path={"counters"} element={<Counters/>}/>
              </Route>
          </Routes>
      </HashRouter>
  );
}

export default App;
