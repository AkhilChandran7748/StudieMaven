import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function AgentDropDown() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Hidas', code: 'NY' },
        { name: 'Ansif', code: 'RM' },
        { name: 'Mustafa   ', code: 'LDN' },
        { name: 'OWN', code: 'IST' },
    ];

    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
            <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="m-width-220p" />
            <label htmlFor="dd-city">Agent</label>
        </span>
    )
}