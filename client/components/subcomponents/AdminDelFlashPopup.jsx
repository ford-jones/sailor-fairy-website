import React, { useState } from "react"
import AdminDelTattooPopup from "./AdminDelTattooPopup"
import { deleteFlash } from '../../api/flash'

export default function AdminDelFlashPopup({setDeletionPopup, flashState}) {
    const [popup, setPopup] = useState(false)

    function handleClose(e) {
        e.preventDefault()
        setDeletionPopup(false)
    }

    function handleDelete(e) {
        e.preventDefault()
    
        const flash = flashState.find((x) => {
          return x.id == e.target.id
        })
        deleteFlash(flash)
        setPopup(true)

        setTimeout(() => {
            setPopup(false)
            window.location.reload()
        }, 2500);
    }

    return(
        <>
        {popup
        ? <delPopup />
        : null
        }
        <div className="delPopup">
        <h1>Delete Flash:</h1>
        {flashState.map((flash) => (
            <>
            <div className="delFlash">
              <img
                className="delFlashImage"
                src={`images/flash/${flash.Filename}`}
                alt="flashPhoto"
              />
              <form>
                <button type="submit" id={flash.id} onClick={handleDelete}>
                  Delete
                </button>
              </form>
            </div>
          </>
        ))}
            <button type="submit" onClick={handleClose}>
                close
            </button>
        </div>
        </>
    )
}