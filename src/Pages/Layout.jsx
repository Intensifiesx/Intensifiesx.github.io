// Import libraries
import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            {!isHomePage && <Navbar />}
            <Outlet />
        </>
    );
};

export default Layout;
