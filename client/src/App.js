import "./App.css";
import Main from "./pages/Main.js";
import Navbar from "./components/Navbar/Navbar.js";
import Login from "./components/Login/Login.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/register">
    
          </Route>
          <Route path="/userpage">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
