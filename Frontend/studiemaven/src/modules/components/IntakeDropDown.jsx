import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
export default function IntakeDropDown({ className }) {
    const [date, setDate] = useState(null);
    const cities = [
        { name: 'January', code: 'NY' },
        { name: 'February', code: 'RM' },
        { name: 'March   ', code: 'LDN' },
        { name: 'April', code: 'IST1' },
        { name: 'May', code: 'IST2' },
        { name: 'June', code: 'IST3' },
        { name: 'July', code: 'IST4' },
        { name: 'August', code: 'IST5' },
        { name: 'September', code: 'IST6' },
        { name: 'October', code: 'IST7' },
        { name: 'November', code: 'IS8T' },
        { name: 'December', code: 'IST9' },
    ];
console.log(date);
    return (
        <span className={`p-inputtext-sm p-float-label ${className}`}>
            {/* <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="m-width-220p" /> */}
            <Calendar className=" m-width-220p" inputId="dd-city" value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="MM/yy" />
            <label htmlFor="dd-city">Intake</label>
        </span>
    )
}