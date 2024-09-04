import './assets/css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Grammar from "./pages/Grammar";
import Dictionary from "./pages/Dictionary";
import Counters from "./pages/Counters";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/nihongo-grammar-book"} exact element={<Home />}>
                  <Route index element={<Grammar />}/>
                  <Route path={"grammar"} element={<Grammar />}/>
                  <Route path={"dictionary"} element={<Dictionary/>}/>
                  <Route path={"counters"} element={<Counters/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
