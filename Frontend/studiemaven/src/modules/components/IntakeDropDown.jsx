import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
export default function IntakeDropDown({ className, label }) {
    const [date, setDate] = useState(null);
    // console.log(date);
    return (
        <span className={`p-inputtext-sm p-float-label ${className}`}>
            {/* <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="m-width-220p" /> */}
            <Calendar className=" m-width-220p" inputId="dd-city" value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="MM/yy" />
            <label htmlFor="dd-city">{`${label ? label : 'Intake'}`}</label>
        </span>
    )
}