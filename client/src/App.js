
import "./App.css"
import Main from "./pages/main"
import Navbar from "./components/Navbar/Navbar"
import register from "./pages/register"
import Login from "./pages/login"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "./pages/login"

function App() {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/main">
                        <Navbar/>
                        <Main />
                    </Route>
                    <Route path="/register">
                    <Navbar/>
                    
                    </Route>
                    <Route path="/login">
                    <Navbar/>
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    )
}

export default App;
