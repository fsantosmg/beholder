import React from "react";
import {BrowserRouter, Redirect, Route, Router} from 'react-router-dom';
import Login from "./public/Login/Login";
import Settings from "./private/Settings/Settings";
import Dashboard from "./private/Dashboard/Dashboard";

function Routes() {

   function PrivateRouter({children, ...rest}) {
        return (
            <Route{...rest} render={() => {
                return localStorage.getItem('token') ? children : <Redirect to="/"/>
            }}/>
        )
    };

    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login/>
            </Route>
            <PrivateRouter path="/settings">
                <Settings/>
            </PrivateRouter>
            <PrivateRouter path="/dashboard">
                <Dashboard/>
            </PrivateRouter>
        </BrowserRouter>
    )
}

export default Routes;