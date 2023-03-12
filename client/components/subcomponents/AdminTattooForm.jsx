import React, {useState} from "react";
import { fetchGallery, postTattoo } from "../../api/tattooGallery"
import { postTattooImage } from "../../api/tattooImages"
import AdminUploadPopup from "./AdminUploadPopup"

export default function AdminTattooForm() {
    const [textForm, setTextForm] = useState({
        id: "",
        Date: "",
        Filename: "",
    })
    const [imageForm, setImageForm] = useState({
        preview: "",
        data: ""
    })
    const [postStatus, setPostStatus] = useState("")
    const [popup, setPopup] = useState(false)

    async function handleImage(e) {
        e.preventDefault()
    
        let formData = new FormData()
        formData.append('image', imageForm.data)
    
        fetch('http://localhost:8080/api/v1/tattooImages', {
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

        const gallery = await fetchGallery()
        console.log(e.target.files[0])
        const newId = String(Number(gallery.images.pop().id) + 1)
        const date = new Date(Date.now())
        setTextForm({...textForm, id: newId, Date: date, Filename: e.target.files[0].name})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(textForm != {id: "", Date: "", Filename: ""}) {
            postTattooImage(imageForm)
            postTattoo(textForm)
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
        <h2>Tattoo gallery image upload:</h2>
        <form action="/images" encType="multipart/form-data" method="post">
            <input type="file" name="image" onChange={handleImage}></input>
        </form>
        <img src={imageForm.preview} alt="tattooPreview"></img>
            <button type="submit" onClick={handleSubmit} className="button">
              Submit to database
            </button>
        <div className="break"></div>
        </>
    )
}