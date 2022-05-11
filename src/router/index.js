import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../views/Home';
import About from '../views/About';
import Login from '../views/Login';
import Consultation from '../views/Consultation';
import FirstVaccination from '../views/FirstVaccination';
import SecondVaccination from '../views/SecondVaccination';
import SpotDetail from '../views/SpotDetail';

const routes = [
    {
        exact: true,
        path: "/",
        element: Home
    },
    {
        path: "/login",
        element: Login
    },
    {
        path: "/consultation",
        element: Consultation
    },

    {
        path: "/first-vaccination",
        element: FirstVaccination
    },
    {
        path: "/second-vaccination",
        element: SecondVaccination
    },
    {
        path: "/spot/1",
        element: SpotDetail
    }
]

function Router(props) {
    return (
        <Routes>
            {routes.map((item, id) => {
                return <Route key={id} exact={item.exact ? true : false} path={item.path} element={<item.element />}></Route>
            })}

        </Routes>

    );
}

export default Router;