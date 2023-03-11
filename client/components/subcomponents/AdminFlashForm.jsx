import React, {useState} from "react";
import { fetchFlash } from "../../api/flash"
import { postFlash } from "../../api/flash"
import { postImage } from "../../api/images"
import AdminUploadPopup from "./AdminUploadPopup"

export default function AdminFlashForm() {
    const [textForm, setTextForm] = useState({
        id: "",
        Date: "",
        Filename: "",
        Taken_status: "0"
    })
    const [imageForm, setImageForm] = useState({
        preview: "",
        data: ""
    })
    const [postStatus, setPostStatus] = useState("")
    const [popup, setPopup] = useState(false)

    function handleChange(e) {
        e.preventDefault()
        setTextForm({...textForm, Taken_status: "1"})
        console.log(textForm.Taken_status)
    }

    async function handleImage(e) {
        e.preventDefault()
    
        let formData = new FormData()
        formData.append('image', imageForm.data)
    
        fetch('http://localhost:8080/api/v1/images', {
          method: 'POST',
          body: formData,
        })
        .then((res) => {
            setPostStatus(res.status)
            console.log('POST status: ', postStatus)
            const image = {
              preview: URL.createObjectURL(e.target.files[0]),
              data: e.target.files[0],
            }
            setImageForm(image)
        })
        .catch((err) => {
            console.error(err)
        })

        const flash = await fetchFlash()

        const newId = String(Number(flash.images.pop().id) + 1)
        const date = new Date(Date.now())
        setTextForm({...textForm, id: newId, Date: date, Filename: e.target.files[0].name})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(textForm)
        console.log(imageForm)
        if(textForm != {id: "", Date: "", Filename: "", Taken_status: "0"}) {
            postImage(imageForm)
            postFlash(textForm)
            handleImage(e)
            setPopup(true)
            setTimeout(() => {
                setPopup(false)
                window.location.reload()
            }, 3000)
        }
    }

    return(
        <>
        {popup 
        ? <AdminUploadPopup />
        : null}
        <h2>Flash gallery image upload:</h2>
        <form action="/images" encType="multipart/form-data" method="post">
            <input type="file" name="image" onChange={handleImage}></input>
        </form>
        <img src={imageForm.preview} alt="productPreview"></img>
        <form noValidate>
            <label htmlFor="Taken_status">Taken status:</label>
            <input 
            name="Taken_status"
            type="checkbox"
            value={textForm.Taken_status}
            onChange={handleChange}
            ></input>
            <button type="submit" onClick={handleSubmit} className="button">
              Submit to database
            </button>
        </form>
        <div className="break"></div>
        </>
    )
}