
import "./App.css"
import Main from "./pages/Main"
import register from "./pages/Register"
import login from "./pages/Login"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/">
                        <Navbar/>
                        <Main />
                    </Route>
                    <Route path="/register">
                    <Navbar/>
                    </Route>
                    <Route path="/login">

                    </Route>
                    <Navbar/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
