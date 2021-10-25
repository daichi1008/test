import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "./AuthService"
const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)
    return (
        <Route
            {...rest}
            component={
                // ログインしていればcomponentを描写
                // ログインしていなければ、"/loginにリダイレクト
                (routeProps) =>
                    user ? (
                        <Component {...rest} />
                    ) : (
                        <Redirect to={"/login"} />
                    )
            }
        />
    )
}

export default LoggedInRoute