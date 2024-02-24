import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function CountryDropDown({ onChange }) {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Germany', code: 2 },
        { name: 'France', code: 1 },
    ];

    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
            <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => {
                setSelectedCity(e.value)
                onChange(e.value)
            }} options={cities} optionLabel="name" className="m-width-220p" />
            <label htmlFor="dd-city">Country</label>
        </span>
    )
}