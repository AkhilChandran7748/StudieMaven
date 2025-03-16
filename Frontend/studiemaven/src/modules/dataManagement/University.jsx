import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getUniversities, addUniversity } from "./dataServices";
import WithHeader from "../common/WithHeaderHoc";
import { InputTextarea } from "primereact/inputtextarea";
const University = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(null);
    const [editId, setEditId] = useState(null)
    const loadData = () => {
        getUniversities().then(res => {
            if (res?.data?.success) {
                setData(res.data?.data.filter((i) => i.DeleteStatus !== 1) || []);
            }
        })
    }
    useEffect(() => {
        loadData();
    }, [])
    const onSubmit = () => {
        if (value.uni_name) {
            const { uni_name, description } = value
            if (editId) {

                addUniversity({ uni_name, description, id: editId }).then((res) => {
                    if (res.data.success) {
                        loadData();
                    }
                })
            } else {
                addUniversity({ uni_name, description, delete_status: 0 }).then((res) => {
                    if (res.data.success) {
                        loadData();
                    }
                })
            }
            setValue({ uni_name: '', description: '' });
            setEditId('');
        }
    }
    const onDelete = (id) => {

        addUniversity({ delete_status: 1, id }).then((res) => {
            if (res.data.success) {
                loadData();
            }
        })
    }
    const TableActions = ({ Id, UniversityName, Description }) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(Id);
                setValue({ uni_name: UniversityName, description: Description })
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(Id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (<>
        <div className=" margin-t-30p">
            <div className="header padding-b-50p">University</div>
            <div className="content ">
                <div className="row align-center">
                    <span className="p-float-label margin-l-10  margin-r-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.uni_name} onChange={(e) => setValue({
                            ...value,
                            uni_name: e.target.value
                        })} />
                        <label htmlFor="username">University name</label>
                    </span>
                    <span className="p-float-label">
                        <InputTextarea value={value?.description} id="note" rows={2} cols={30} autoResize onChange={(e) => setValue({
                            ...value,
                            description: e.target.value
                        })} />
                        <label htmlFor={"note"}>Description</label>
                    </span>
                </div>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p padding-b-30p">

                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue({ uni_name: '', description: '' });
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
            </div>
            <div className="content" style={{ textAlign: "-webkit-center" }}>
                <DataTable value={data} className=" aligin-center" >
                    <Column field="UniversityName" header="University Name"></Column>
                    <Column field="Description" header="Description"></Column>
                    <Column body={TableActions} header="Action"></Column>
                </DataTable>
            </div>
        </div>
    </>)
}
export default WithHeader(University)