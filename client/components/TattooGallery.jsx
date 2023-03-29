import React from "react"
import HomeButton from "./subcomponents/HomeButton"
import NavBar from "./subcomponents/NavBar"
import TattooGalleryContainer from "./subcomponents/TattooGalleryContainer"

export default function TattooGallery() {
    return (
        <>
        <NavBar heading="Tattoo Gallery" />
        <TattooGalleryContainer />
        </>
    )
}