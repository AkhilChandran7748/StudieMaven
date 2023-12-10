import React, { useState } from "react";

import { MultiSelect } from 'primereact/multiselect';

export default function StatusDropDown() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'COL', code: 'NY' },
        { name: 'OUL', code: 'RM' },
        { name: 'Accepted', code: 'LDN' },
        { name: 'Rejected', code: 'LDN' },
    ];

    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
          <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                 maxSelectedLabels={1} className=" m-width-220p" />
            <label htmlFor="dd-city">Status</label>
        </span>
    )
}