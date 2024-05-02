import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AgentDropDown from "../components/AgentDropDown";
import IntakeDropDown from "../components/IntakeDropDown";

import StatusDropDown from "../components/StatusDropDown";
import { Accordion, AccordionTab } from 'primereact/accordion';
import StaffDropDown from "../components/StaffDropDown";
import PaymentStatusDropDown from "../components/PaymentStatus";
import UniversityDropdown from "../components/UniversityDropdown";
import VisaStatusDropDown from '../components/VisaStatusDropDown'
const Search = () => {
    const [value, setValue] = useState({
        name: '',
        agent_id: '',
        owner_id: '',
        visa_status: '',
        university_id: '',
        status_id: '',
        payment_status_id: '',
        course_name: '',
        intake: ''
    });
    const onSubmit = () => {
        console.log(value);
    }
    const onChange = (key, val) => {
        setValue({
            ...value,
            [key]: val
        })
    }
    return (<>
        <div className="card padding-b-10p padding-10p">
            <Accordion >
                <AccordionTab header="Search">
                    <div className="margin-l-10p">
                        <div className="row padding-t-10p">
                            <span className="p-float-label margin-l-10">
                                <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value.name} onChange={(e) => onChange('name', e.target.value)} />
                                <label htmlFor="username">Name</label>
                            </span>

                            <AgentDropDown value={value.agent_id} onChange={(e) => onChange('agent_id', e)} />
                            <StaffDropDown value={value.owner_id} onChange={(e) => onChange('owner_id', e)} />
                            <VisaStatusDropDown value={value.visa_status} onChange={(e) => {
                                onChange('visa_status', e.map((i) => i.Id))
                            }} />
                            <UniversityDropdown value={value.university_id} onChange={(e) => onChange('university_id', e)} />
                        </div>
                        <div className="row padding-t-30p">
                            <StatusDropDown value={value.status_id} onChange={(e) => onChange('status_id', e.map((i) => i.Id))} />
                            <PaymentStatusDropDown value={value.payment_status_id} onChange={(e) => onChange('payment_status_id',e.map((i) => i.Id))} />
                            <span className="p-float-label margin-l-10">
                                <InputText className="p-inputtext-sm  m-width-220p" id="username" onChange={(e) => onChange('course_name', e.target.value)} value={value.course_name} />
                                <label htmlFor="username">Course</label>
                            </span>
                            <IntakeDropDown value={value.intake} onChange={(e) => onChange('intake', e)} className={'margin-l-10'} />
                        </div>
                        <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                            <Button label="Search" onClick={onSubmit} className="small-button" />
                            <Button label="Reset" severity="secondary" className="small-button margin-l-5p" />
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    </>)
}
export default Search