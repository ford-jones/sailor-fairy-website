import React from "react"
import HomeButton from './subcomponents/HomeButton'
import AdminFlashForm from './subcomponents/AdminFlashForm'
import AdminTattooForm from './subcomponents/AdminTattooForm'

export default function Admin() {
    return (
        <>
        <h1 className="header">Admin Interface:</h1>
        <HomeButton />
        <AdminFlashForm />
        <AdminTattooForm />
        </>
    )
}