
import "./App.css"
import main from "./pages/main"
import register from "./pages/register"
import login from "./pages/login"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App () {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/">

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
