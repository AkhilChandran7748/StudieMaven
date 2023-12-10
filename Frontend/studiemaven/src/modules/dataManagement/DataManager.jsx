import React, { useState } from "react";
import WithHeader from "../common/WithHeaderHoc";
import { Dropdown } from 'primereact/dropdown';
import DocumentTypes from "./DocumentTypes";
import Status from "./Status";
const DataManager = () => {
    const [datSection, setDatSection] = useState(null);
    console.log(datSection, 'datSection');
    const cities = [
        { name: 'Document Types', code: 'docTypes' },
        { name: 'Status Types', code: 'status' },
    ];
    const getSection = () => {
        switch (datSection?.code) {
            case 'docTypes':
                return <DocumentTypes />
            case 'status':
                return <Status />
            default:
                return <></>
        }
    }
    return (<>
        <div className="content padding-30p  padding-t-30p data-manager">
            <Dropdown value={datSection} onChange={(e) => setDatSection(e.value)} options={cities} optionLabel="name"
                placeholder="Select data section" className="w-full md:w-14rem" />
            <div className="card margin-t-20p">
                {getSection()}
            </div>
        </div></>)
}
export default WithHeader(DataManager)