import React, { useState } from "react";
import WithHeader from "../common/WithHeaderHoc";
import { Dropdown } from 'primereact/dropdown';
import DocumentTypes from "./DocumentTypes";
import Status from "./Status";
import VisaStatus from "./VisaStatus";
import Country from "./Country";
import PaymentStatus from "./PaymentStatus";
import University from "./University";
const DataManager = () => {
    const [datSection, setDatSection] = useState(null);
    const cities = [
        { name: 'Document Types', code: 'docTypes' },
        { name: 'Status Types', code: 'status' },
        { name: 'VisaStatus Types', code: 'visaStatus' },
        { name: 'Countries', code: 'country' },
        { name: 'Payment Status', code: 'payment' },
        { name: 'University', code: 'university' },
    ];
    const getSection = () => {
        switch (datSection?.code) {
            case 'docTypes':
                return <DocumentTypes />
            case 'status':
                return <Status />
            case 'visaStatus':
                return <VisaStatus />
            case 'country':
                return <Country />
            case 'payment':
                return <PaymentStatus />
            case 'university':
                return <University />
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