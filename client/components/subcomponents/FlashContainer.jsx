import React, { useState, useMemo } from 'react'
import { fetchFlash } from '../../api/flash'
import Loader from './Loader'
import GoBack from './GoBack'

export default function FlashContainer() {
  const [flash, setFlash] = useState([])
  const [loading, setLoading] = useState(true)
  const [backArrow, setBackArrow] = useState(false)

  const allImages = document.getElementsByTagName('img')
  const images = [...allImages]

  useMemo(async () => {
    const getFlash = await fetchFlash()
    const reverseFlash = getFlash.images.reverse()

    setFlash(reverseFlash)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  function onMouseOver(e) {
    e.preventDefault()
    const image = images.find((x) => {
      return x.id === e.target.id
    })

    const match = flash.find((y) => {
      return y.id == e.target.id
    })

    match.Taken_status === '1'
      ? (image.style.border = '2px solid red')
      : (image.style.border = '2px solid black')
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
    for (let i = 0; i < images.length; i++) {
      const image = images[i]
      if (image.id) {
        image.style.width = '800px'
        image.style.height = '800px'
        image.style.marginLeft = 'auto'
        image.style.marginRight = 'auto'
        image.style.position = 'relative'
      }
    }
    const foundImage = images.find((x) => {
      return x.id === e.target.id
    })
    foundImage.scrollIntoView({ block: 'center' })
    setBackArrow(true)
  }
  return (
    <>
      <div className="imageContainer">
        {loading ? (
          <Loader />
        ) : (
          <>
            {backArrow ? <GoBack setBackArrow={setBackArrow} /> : null}
            {flash.map((x) => (
              <img
                src={`images/flash/${x.Filename}`}
                alt="flashImage"
                className="flashImage"
                id={x.id}
                key={x.id}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                onClick={onClick}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}
