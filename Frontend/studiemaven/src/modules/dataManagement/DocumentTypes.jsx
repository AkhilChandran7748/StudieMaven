import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { countries } from "../student/data";
import { addDocumentType, getDocumentTypes } from "./dataServices";
import { Checkbox } from "primereact/checkbox";
const Country = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [is_visa_document, setIs_visa_document] = useState(false);
    const [editId, setEditId] = useState(null)
    const loadData = () => {
        getDocumentTypes().then(res => {
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
            if (editId) {
                let params = {
                    document_id: editId,
                    "document_name": value,
                    "document_note": "",
                    is_visa_document: is_visa_document ? 1 : 0,
                }
                addDocumentType(params).then(res => {
                    if (res.data?.success) {
                        loadData();
                    }
                })
            } else {
                let params = {
                    "document_name": value,
                    "document_note": "",
                    is_visa_document: is_visa_document ? 1 : 0,
                }
                addDocumentType(params).then(res => {
                    if (res.data?.success) {
                        loadData();
                    }
                })
            }
            setValue('');
            setEditId('');
            setIs_visa_document(false)
        }
    }
    const onDelete = (id) => {
        let params = {
            document_id: id,
            delete_status: 1,
        }
        addDocumentType(params).then(res => {
            if (res.data?.success) {
                loadData();
            }
        })
    }
    const TableActions = ({ Id, DocumentTypeName, IsVisaDocument }) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(Id);
                setValue(DocumentTypeName)
                setIs_visa_document(IsVisaDocument)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(Id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    const EnableDateComponent = ({ IsVisaDocument }) => {
        return IsVisaDocument ? <i className="pi pi-check"></i> : <></>
    }
    return (<>
        <div className="content margin-t-30p align-center">
            <div>
                <span className="p-float-label margin-l-10">
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Document Name</label>
                </span>
                <>
                    <div>   Is Visa Document  </div> <Checkbox checked={is_visa_document === 1 || is_visa_document === true} onChange={(e) => {
                        setIs_visa_document(
                            !is_visa_document)
                    }} />
                </>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue('');
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="width-350p aligin-center" >
                        <Column field="DocumentTypeName" header="Document Name"></Column>
                        <Column body={EnableDateComponent} header="Is Visa Document"></Column>
                     
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div >
    </>)
}
export default Country