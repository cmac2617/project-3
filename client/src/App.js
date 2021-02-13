import "./App.css";
import Main from "./pages/main.js";
import Userpage from "./pages/Userpage.js";
import Register from "./pages/register.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route path="/userpage">
            <Userpage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
