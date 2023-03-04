import React, {useState, useEffect} from 'react'

import {fetchFlash} from '../../api/flash'
import Loader from './Loader'

export default function FlashContainer() {
    const [flash, setFlash] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        setFlash(await fetchFlash())
        return setLoading(false)
    }, [loading])

    return (
        <>
        <div className='imageContainer'>
            {loading  
            ? <Loader /> 
            : flash.images.map((x) => (
                <img src={`images/flash/${x.Filename}`} alt="flashImage" className='flashImage'/>
            ))
            } 
        </div>
        </>
    )
}