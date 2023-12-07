import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AgentDropDown from "../components/AgentDropDown";
import IntakeDropDown from "../components/IntakeDropDown";
const Search = () => {
    const [value, setValue] = useState('');
    return (<>
        <div className="card padding-b-10p padding-10p">
            <div className="margin-l-10p">
                <div className="header padding-b-10">Search</div>
                <div className="row padding-t-10p">
                    <span className="p-float-label margin-l-10 m-width-220p">
                        <InputText className="p-inputtext-sm" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Name</label>
                    </span>

                    <AgentDropDown />
                   
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Lead Owner</label>
                    </span>
                    <IntakeDropDown/>
                </div>
                <div className="row padding-t-30p">
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Name</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>
                </div>
                <div className="row padding-t-10p">
                </div>
                <div className=" flex flex-wrap justify-content-center gap-3">
                    <Button label="Search" className="small-button" />
                    <Button label="Reset" severity="secondary" className="small-button margin-l-5p" />
                </div>
            </div>
        </div>
    </>)
}
export default Search