import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function StaffDropDown({label}) {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Varda', code: 'NY' },
        { name: 'Sreejith', code: 'RM' },
        { name: 'Anu   ', code: 'LDN' },
    ];

    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
            <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="m-width-220p" />
            <label htmlFor="dd-city">{label?label:'Lead Owner'}</label>
        </span>
    )
}