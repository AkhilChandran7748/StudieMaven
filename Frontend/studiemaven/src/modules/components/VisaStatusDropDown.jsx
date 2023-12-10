import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
export default function VisaStatusDropDown() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'Pending', code: 'NY' },
        { name: 'Visa Granted', code: 'RM' },
        { name: 'Visa Rejected   ', code: 'LDN' },
    ];

    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
             <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                 maxSelectedLabels={1} className=" m-width-220p" />
            {/* <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="m-width-220p" /> */}
            <label htmlFor="dd-city">Visa Status</label>
        </span>
    )
}