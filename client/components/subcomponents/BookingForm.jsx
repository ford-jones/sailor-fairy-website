import React, {useState, useEffect} from "react"

export default function BookingForm() {
    const [bookingForm, setBookingForm] = useState({first_name: "", last_name: "", pref_name: "", email: "", mobile_number: "", pref_pronoun: "", flash: false, custom: false, brief_description: "", pref_day: "", pref_time: "", any_questions: ""})

    function handleChange(e) {
        if(e.target.type == "checkbox") {
            setBookingForm({...bookingForm, [e.target.name]: true})
        }
        if(e.target.type == "text") {
            setBookingForm({ ...bookingForm, [e.target.name]: e.target.value })
        }
    }

    function handleClick(e) {
        e.preventDefault()
        console.log(bookingForm)
    }

    return(
        <>
        <form id="bookingForm" >
        <h3>Booking Details:</h3>
            <label htmlFor="first_name" className="label">First Name:</label>
            <input 
            type="text" 
            name="first_name"  
            value={bookingForm.first_name} 
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="last_name" className="label">Last Name:</label>
            <input
            type="text"
            name="last_name"
            value={bookingForm.last_name}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="pref_name" className="label">Preffered Name:</label>
            <input
            type="text"
            name="pref_name"
            placeholder="(optional)"
            value={bookingForm.pref_name}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="email" className="label">Email:</label>
            <input
            type="text"
            name="email"
            value={bookingForm.email}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="mobile_number" className="label">Phone Number:</label>
            <input
            type="text"
            name="mobile_number"
            value={bookingForm.mobile_number}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="pref_pronoun" className="label">Preffered Pronouns:</label>
            <input
            type="text"
            name="pref_pronoun"
            placeholder="(optional)"
            value={bookingForm.pref_pronoun}
            onChange={handleChange}
            className="textbox"
            ></input>

        <h3>Flash or Custom?</h3>

            <label htmlFor="flash" className="checkboxLabel">Flash:</label>
            <input
            type="checkbox"
            name="flash"
            value={bookingForm.flash}
            onChange={handleChange}
            ></input>

            <label htmlFor="custom" className="checkboxLabel">Custom:</label>
            <input
            type="checkbox"
            name="custom"
            value={bookingForm.custom}
            onChange={handleChange}
            ></input>
            <label htmlFor="briefe_dscription" className="label">Give a Description:</label>
            <input
            type="text"
            name="brief_description" 
            placeholder="Anything you'd like; placement, colors, size etc..."
            value={bookingForm.brief_description}
            onChange={handleChange}
            className="bigTextBox"
            ></input>
            
        <h3>Dates & Times:</h3>
                        
            <label htmlFor="pref_day" className="label">Preffered Days:</label>
            <input 
            type="text"
            name="pref_day"
            placeholder="what works for you."
            value={bookingForm.pref_day}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="pref_time"className="label">Preffered Times:</label>
            <input
            type="text"
            name="pref_time"
            value={bookingForm.pref_time}
            onChange={handleChange}
            className="textbox"
            ></input>
        
        <h3>Any further questions are welcomed:</h3>

            <label htmlFor="any_questions" className="label">Any Questions?</label>
            <input
            type="text"
            name="any_questions"
            placeholder="(optional)"
            value={bookingForm.any_questions}
            onChange={handleChange}
            className="bigTextBox"
            ></input>

            <button type="submit" onClick={handleClick} className="button">Submit your booking</button>
        </form>
        </>
    )
}