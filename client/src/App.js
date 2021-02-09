import "./App.css";
<<<<<<< HEAD
import Main from "./pages/main.js";
import Userpage from "./pages/Userpage.js"
import Register from "./pages/register.js"
=======
import Main from "./pages/Main.js";
import Userpage from "./pages/Userpage.js";
import Register from "./pages/Register.js";
>>>>>>> 6f2f64d9bbb4a431e51ca8fd285eb70037651ccb
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
