import React, { useEffect, useRef, useState } from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Document from "./Document";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { documentsData } from "../student/data";
import { Image } from 'primereact/image';
import UploadDocument from "./UploadDocument";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import SendDocuments from "./SendDocuments";
import { getAllDocuments } from "./documentServices";
import { Toast } from 'primereact/toast';
const VisaDocuments = ({ studentId, visDocument }) => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)
    const toast = useRef(null);
    const show = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Sucess', detail });
    };
    const getDocuments = () => {
        getAllDocuments({ application_id: studentId }).then((res) => {
            if (res?.data?.success) {
                setData(res.data.data.filter((i) => visDocument ? i.IsVisaDocument === 1 : i.IsVisaDocument !== 1))
            }
        })
    }
    useEffect(() => {
        getDocuments();
    }, [])
    const onDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const VerifyAction = (item) => {
        //         sub and content- prepopulate
        // list of verified docs
        return (<>
            <span onClick={() => { }} title="Click To Verify" className="pi  pi-verified  margin-r-10" ></span>
        </>)
    }
    const TableActions = (item) => {
        return (<>
            <span title="View Document" >
                {/* <Button type="button" icon="pi pi-image" label="Image" /> */}
                <Image className="img-icon" src="/img/eye.png" zoomSrc="/img/cert1.jpg" alt="Image" width="25" preview />
                {/* <OverlayPanel ref={op} >
                         <img className="img-viewer" src={'/img/cert1.jpg'} alt="Bamboo Watch"></img>
                    </OverlayPanel> */}
            </span>
            <span title="Edit" onClick={() => {
                setEditId(item.id);
                setValue(item)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => { }} title="Delete" className="pi pi-download blue margin-r-10" ></span>
            <span onClick={() => onDelete(item.id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (<>
        <Toast ref={toast} />
        <div className="card content">
            <div className="" style={{
                textAlign: 'right',
                display: 'flex',
                direction: 'rtl'
            }}>
                <UploadDocument reload={(r) => {
                    show(r)
                    getDocuments();
                }} studentId={studentId} visDocument={true} />
                <SendDocuments />
            </div>

            <div className="content card" style={{ textAlign: "-webkit-center" }}>
                <DataTable value={data} className="aligin-center" >
                    <Column field="DocumentTypeName" header="Document Name"></Column>
                    <Column field="DocModifiedDate" header="Modified Date"></Column>
                    <Column field="DocNote" header="Document Notes"></Column>
                    <Column body={VerifyAction} header="Verify Document"></Column>
                    <Column body={TableActions} header="Action"></Column>
                </DataTable>
            </div>


        </div>
    </>)
}
export default VisaDocuments