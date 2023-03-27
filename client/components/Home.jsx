import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return(
        <>
        <div className="header">
        <h1>Sailor Fairy</h1>
        </div>

        <div className="homeContainer">
            <div className="flashLink">
                <Link to="/Flash">
                    <p>Flash:</p>
                </Link>
                <Outlet />
            </div>

            <div className="flashLink">
                <Link to="/Gallery">
                    <p>Tattoo Gallery:</p>
                </Link>
                <Outlet />
            </div>

            <div className="flashLink">
                <Link to="/Booking">
                    <p>Make a Booking:</p>
                </Link>
                <Outlet />
            </div>
        </div>
        </>
    )
}