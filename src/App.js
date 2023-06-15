import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./Home/index.js";
import Budget from "./Budget/index.js";
import {Provider} from "react-redux";
import store from "./Redux/store.js";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/*"
                         element={<Home/>}/>
                  <Route path="/budget"
                         element={<Budget/>}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
