import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import IntakeDropDown from "../components/IntakeDropDown";
import { Accordion, AccordionTab } from 'primereact/accordion';
import StaffDropDown from "../components/StaffDropDown";
import CountryDropDown from "../components/CountryDropDown";
import { searchLead } from "./leadServices";
const Search = ({ onSearch }) => {
    const [value, setValue] = useState({
        name: '',
        country_id: '',
        owner_id: '',
        created_date: '',
        course: ''
    });
    const onChange = (field, v) => {
        setValue({
            ...value,
            [field]: v
        })
    }
    const reset = () => {
        setValue({
            name: '',
            country_id: '',
            owner_id: '',
            course: '',
            created_date: '',
        })
        onSearch()
    }
    const onSearchLeads = () => {
        onSearch(value)
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

                            <StaffDropDown
                                value={value.owner_id}
                                onChange={(id) => {
                                    onChange('owner_id', id)
                                }}
                            />
                            <IntakeDropDown onChange={(v) => onChange('created_date', v)} dateValue={value.created_date} className={'margin-l-10'} label={'Date of Admission'} />
                            <CountryDropDown value={value.country_id} onChange={(id) => {
                                onChange('country_id', id)

                            }} />
                            <span className="p-float-label margin-l-10">
                                <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value.course} onChange={(e) => onChange('course', e.target.value)} />
                                <label htmlFor="username">Cousre</label>
                            </span>
                        </div>
                        <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                            <Button onClick={onSearchLeads} label="Search" className="small-button" />
                            <Button onClick={reset} label="Reset" severity="secondary" className="small-button margin-l-5p" />
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    </>)
}
export default Search