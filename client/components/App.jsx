import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import Flash from './Flash'
import Faq from './Faq'
import Booking from './Booking'
import TattooGallery from './TattooGallery'

export default function App() {
    return (
        <>
        <div className='app'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Flash' element={<Flash />} />
                <Route path='/Gallery' element={<TattooGallery />} />
                <Route path='/Booking' element={<Booking />} />
                <Route path='/Faq' element={<Faq />} />
            </Routes>
        </div>
        </>
    )
}