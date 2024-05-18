import React, { useEffect, useRef, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { countries } from "../student/data";
import { Toast } from 'primereact/toast';
import { addAgents, getAgents, updateAgent } from "./dataServices";
const Agents = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [editId, setEditId] = useState(null)
    const toast = useRef(null);
    const loadData = () => {
        getAgents().then(res => {
            if (res?.data?.success) {
                setData(res.data?.data || []);
            }
        })
    }
    useEffect(() => {
        loadData();
    }, [])
    const onSubmit = () => {
        if (value) {
            if (data.find((i) => i.AgentName === value)) {
                show();
                return;
            }
            if (editId) {
                let params = {
                    agent_id: editId,
                    "agent_name": value,
                }
                updateAgent(params).then(res => {
                    if (res.data?.success) {
                        loadData();
                    }
                })
            } else {
                let params = {
                    "agent_name": value,
                    "country_id": "2",
                    "approve_status": 0
                }
                addAgents(params).then(res => {
                    if (res.data?.success) {
                        loadData();
                    }
                })
            }
            setValue('');
            setEditId('');
        }
    }
    const onDelete = (id) => {
        let params = {
            agent_id: id,
            "country_name": value,
            "country_code": "",
            "country_flag": "",
            delete_status: 1,
        }
        updateAgent(params).then(res => {
            if (res.data?.success) {
                loadData();
            }
        })
    }
    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Error', detail: 'Agent name already exist' });
    };

    const TableActions = ({ Id, AgentName }) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(Id);
                setValue(AgentName)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(Id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (<>
        <div className="content margin-t-30p align-center">
            <Toast ref={toast} />
            <div>
                <span className="p-float-label margin-l-10">
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Agent Name</label>
                </span>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue('');
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="width-350p aligin-center" >
                        <Column field="AgentName" header="Agent Name"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default Agents