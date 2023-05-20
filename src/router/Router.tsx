import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {ROUTES} from "../constants/navigation";
import MainPage from "../pages/Main";
import AboutMePage from "../pages/AboutMe";
import UserInfoPage from "../pages/UserInfo";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN} element={<MainPage/>}/>
            <Route path={ROUTES.ABOUT} element={<AboutMePage/>}/>
            <Route path={ROUTES.USERINFO} element={<UserInfoPage/>}/>
        </Routes>
    );
};

export default Router;