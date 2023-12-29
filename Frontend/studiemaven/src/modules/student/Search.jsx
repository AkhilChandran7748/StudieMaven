import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AgentDropDown from "../components/AgentDropDown";
import IntakeDropDown from "../components/IntakeDropDown";
import VisaStatusDropDown from "../components/VisaStatusDropDown";
import StatusDropDown from "../components/StatusDropDown";
import { Accordion, AccordionTab } from 'primereact/accordion';
import StaffDropDown from "../components/StaffDropDown";
import PaymentStatusDropDown from "../components/PaymentStatus";
const Search = () => {
    const [value, setValue] = useState('');
    return (<>
        <div className="card padding-b-10p padding-10p">
            <Accordion >
                <AccordionTab header="Search">
                    <div className="margin-l-10p">
                        <div className="row padding-t-10p">
                            <span className="p-float-label margin-l-10">
                                <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                <label htmlFor="username">Name</label>
                            </span>

                            <AgentDropDown />
                            <StaffDropDown />
                            <VisaStatusDropDown />
                            <span className="p-float-label margin-l-10">
                                <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                <label htmlFor="username">University</label>
                            </span>
                        </div>
                        <div className="row padding-t-30p">
                            <StatusDropDown />
                            <PaymentStatusDropDown />
                            <span className="p-float-label margin-l-10">
                                <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                <label htmlFor="username">Course</label>
                            </span>
                            <IntakeDropDown className={'margin-l-10'} />
                        </div>
                        <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                            <Button label="Search" className="small-button" />
                            <Button label="Reset" severity="secondary" className="small-button margin-l-5p" />
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    </>)
}
export default Search