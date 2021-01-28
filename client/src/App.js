import "./App.css";
import Main from "./pages/main.js";
import Navbar from "./components/Navbar/Navbar.js";
import register from "./pages/register.js";
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
            <Navbar />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
