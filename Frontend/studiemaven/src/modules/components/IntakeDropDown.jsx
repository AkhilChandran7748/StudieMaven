import React, { useEffect, useState } from "react";
import { Calendar } from 'primereact/calendar';
import moment from "moment";
export default function IntakeDropDown({ className, label, onChange, dateValue }) {
    const [date, setDate] = useState();
    useEffect(() => {
        !dateValue && setDate(null)
    }, [dateValue])
    return (
        <span className={`p-inputtext-sm p-float-label ${className}`}>
            {/* <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="m-width-220p" /> */}
            <Calendar className=" m-width-220p" inputId="dd-city" value={date} onChange={(e) => {
                onChange && onChange(moment(e.value).format('MM-YYYY'))
                setDate(e.value)
            }} view="month" dateFormat="MM/yy" />
            <label htmlFor="dd-city">{`${label ? label : 'Intake'}`}</label>
        </span>
    )
}