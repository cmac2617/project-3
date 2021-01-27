
import "./App.css"
import Main from "./pages/main";
import register from "./pages/register";
import login from "./pages/login";

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
