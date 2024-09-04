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
                  <Route index exact element={<Grammar />}/>
                  <Route path={"grammar"} exact element={<Grammar />}/>
                  <Route path={"dictionary"} exact element={<Dictionary/>}/>
                  <Route path={"counters"} exact element={<Counters/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
