import React from "react"
import Login from "./Login"
import SignUp from "./SignUp"
import Room from "./Room"
import LoggedInRoute from "./LoggedinRoute"
import { AuthProvider } from "./AuthService"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path="/" component={Room} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />

                </Switch>
            </Router>
        </AuthProvider >
    )
}

export default App