import React from "react"
import HomeButton from "./subcomponents/HomeButton"
import TattooGalleryContainer from "./subcomponents/TattooGalleryContainer"

export default function TattooGallery() {
    return (
        <>
        <h1 className="header">Tattoo Gallery</h1>
        <HomeButton />
        <TattooGalleryContainer />
        </>
    )
}