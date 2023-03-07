import React, {useState, useEffect} from "react"

export default function BookingForm() {
    const [bookingForm, setBookingForm] = useState({first_name: "", last_name: "", pref_name: "", email: "", mobile_number: "", pref_pronoun: "", flash: false, custom: false, brief_description: "", pref_day: "", pref_time: "", any_questions: ""})

    function handleChange(e) {
        e.preventDefault()
    }

    return(
        <>

        <form className="bookingForm" noValidate>
        <h3>Booking Details:</h3>
            <label htmlFor="firstName" className="label">First Name:</label>
            <input 
            type="text" 
            name="firstName" 
            placeHolder=" " 
            value={bookingForm.first_name} 
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="lastName" className="label">Last Name:</label>
            <input
            type="text"
            name="lastName"
            placeholder=" "
            value={bookingForm.last_name}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="prefName" className="label">Preffered Name:</label>
            <input
            type="text"
            name="prefName"
            placeholder="(optional)"
            value={bookingForm.pref_name}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="email" className="label">Email:</label>
            <input
            type="text"
            name="email"
            placeholder=" "
            value={bookingForm.email}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="mobileNumber" className="label">Phone Number:</label>
            <input
            type="text"
            name="mobileNumber"
            placeholder=" "
            value={bookingForm.mobile_number}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="prefPronouns" className="label">Preffered Pronouns:</label>
            <input
            type="text"
            name="prefPronouns"
            placeholder="(optional)"
            value={bookingForm.pref_pronoun}
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
            <label htmlFor="briefDescription" className="label">Give a Description:</label>
            <input
            type="text"
            name="briefDescription" 
            placeholder="Anything you'd like; placement, colors, size etc..."
            value={bookingForm.brief_description}
            onChange={handleChange}
            className="bigTextBox"
            ></input>
            
        <h3>Dates & Times:</h3>
                        
            <label htmlFor="prefDays" className="label">Preffered Days:</label>
            <input 
            type="text"
            name="prefDays"
            placeholder="what works for you."
            value={bookingForm.pref_day}
            onChange={handleChange}
            className="textbox"
            ></input>
            <label htmlFor="prefTime"className="label">Preffered Times:</label>
            <input
            type="text"
            name="prefTime"
            placeholder=" "
            value={bookingForm.pref_time}
            onChange={handleChange}
            className="textbox"
            ></input>
        
        <h3>Any further questions are welcomed:</h3>

            <label htmlFor="anyQuestions" className="label">Any Questions?</label>
            <input
            type="text"
            name="anyQuestions"
            placeholder="(optional)"
            value={bookingForm.any_questions}
            className="bigTextBox"
            ></input>
        </form>
        </>
    )
}