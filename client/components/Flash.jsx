import React from "react"

import FlashContainer from './subcomponents/FlashContainer'
import HomeButton from "./subcomponents/HomeButton"

export default function Flash() {

    return (
        <>
        <h1 className="header">Flash</h1>
        <HomeButton />
        <FlashContainer />
        </>
    )
}