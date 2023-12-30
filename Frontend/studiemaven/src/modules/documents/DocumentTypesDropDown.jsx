
import { docTypes } from "../student/data";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DocumentTypes() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Hidas', code: 'NY' },
        { name: 'Ansif', code: 'RM' },
        { name: 'Mustafa   ', code: 'LDN' },
        { name: 'OWN', code: 'IST' },
    ];

    return (
        <span className="p-inputtext-sm p-float-label  ">
            <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={docTypes} optionLabel="documentName" className="m-width-220p" />
            <label htmlFor="dd-city">Documen Name</label>
        </span>
    )
}