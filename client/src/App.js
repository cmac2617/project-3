
import "./App.css";
import Main from "./pages/Main";
import register from "./pages/Register";
import Login from "./components/Login/Login";

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
                    <Route path="/login">

                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
