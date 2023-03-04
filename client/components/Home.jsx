import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return(
        <>
        <div className="home">
        <h1>Sailor Fairy</h1>
        <p>Welcome!</p>

        <Link to="/Flash">
            <div className="flashLink">
                <p>Flash:</p>
            </div>
        </Link>
        <Outlet />

        <Link to="/Gallery">
            <div className="flashLink">
                <p>Tattoo Gallery:</p>
            </div>
        </Link>
        <Outlet />

        <Link to="/Faq">
            <div className="flashLink">
                <p>FAQ:</p>
            </div>
        </Link>
        <Outlet />

        <Link to="/Booking">
            <div className="flashLink">
                <p>Make a Booking:</p>
            </div>
        </Link>
        <Outlet />
        </div>
        </>
    )
}