import React, {useState, useMemo} from 'react'

import {fetchFlash} from '../../api/flash'
import Loader from './Loader'

export default function FlashContainer() {
    const [flash, setFlash] = useState([])
    const [loading, setLoading] = useState(true)
    
    const allImages = document.getElementsByTagName('img')
    const images =[...allImages]

    useMemo(async () => {
        setFlash(await fetchFlash())

        setTimeout(() => {
            setLoading(false)    
        }, 2000);
        
    }, [loading])
    
    function onMouseOver(e) {
        e.preventDefault()
        const image = images.find((x) => {
            return x.id === e.target.id
        })

        image.style.border = '2px solid black'
    }

    function onMouseOut(e) {
        e.preventDefault()
        const image = images.find((x) => {
            return x.id === e.target.id
        })

        image.style.border = '2px solid white'
    }

    function onClick(e) {
        e.preventDefault()
        const getContainer = document.getElementsByClassName('imageContainer')
        const container = [...getContainer]

        container[0].style.display = 'flex'
        container[0].style.flexDirection = 'column'
                
        for(let i = 0; i < images.length; i++) {
            const image = images[i]
            image.style.width = '800px'
            image.style.height = '800px'
            image.style.marginLeft = 'auto'
            image.style.marginRight = 'auto'
            image.style.position = 'relative'
        }
    }

    return (
        <>
        <div className='imageContainer'>
            {loading  
            ? <Loader /> 
            : flash.images.map((x) => (
                <img src={`images/flash/${x.Filename}`} alt="flashImage" className='flashImage' id={x.id} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}/>
            ))
            } 
        </div>
        </>
    )
}