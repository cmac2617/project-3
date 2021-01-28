
import "./App.css"
import Main from "./pages/main"
import Navbar from "./components/Navbar/Navbar"
import Register from "./pages/register"
// import Login from ".//Login/login"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/main">  
                    <Main/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    {/* <Route path="/login">
                    </Route> */}
                </Switch>
            </Router>
        </div>
    )
}

export default App;
