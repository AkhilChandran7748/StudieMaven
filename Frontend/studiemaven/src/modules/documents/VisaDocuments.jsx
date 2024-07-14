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
import { getAllDocuments, uploadDocuments } from "./documentServices";
import { Toast } from 'primereact/toast';
import { getBaseUrl } from "../../Services/HttpService";
import { downloadFile } from "../../Utils/Util";
import ConfirmModal from "../common/ConfirmModal";
import PdfViewer from "../common/PdfViewer";
const VisaDocuments = ({ studentId, visDocument }) => {
    let loginData = localStorage.getItem('userData');
    loginData = loginData && JSON.parse(loginData) || {};

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)
    const [showDoc, setShowDoc] = useState({})
    const toast = useRef(null);
    const showToast = (detail) => {
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
        let formdata = new FormData()
        formdata.append("document_id", editId)
        formdata.append("delete_status", 1)

        uploadDocuments(formdata).then((res) => {
            if (res.data.success) {
                showToast('Document deleted successfully')
                setShow(false)
                getDocuments();
            }

        }).catch(er => {

            console.log(er)
        })
    }
    const verifyDocument = (id) => {
        let formdata = new FormData()
        formdata.append("document_id", id)
        formdata.append("verified_status", loginData.isAdmin ? 1 : 2)

        uploadDocuments(formdata).then((res) => {
            if (res.data.success) {
                showToast(`Document ${loginData.isAdmin ? 'Verified' : 'Verify Request Submitted'} Successfully`)
                getDocuments();
            }

        }).catch(er => {

            console.log(er)
        })
    }
    const getColor = (clr) => {
        switch (clr) {
            case 1:
                return 'green'
            case 2:
                return 'blue'
            default:
                return 'gray'
        }
    }
    const getTitle = (clr) => {
        switch (clr) {
            case 1:
                return 'Verified'
            case 2:
                return 'Pending for approval'
            default:
                return 'Click to verify'
        }
    }
    const VerifyAction = ({ VerifiedStatus, DocId }) => {
        //         sub and content- prepopulate
        // list of verified docs
        return (<>
            <span onClick={() => {
                if (VerifiedStatus == 1) {
                    return
                } else if ((!loginData.isAdmin && VerifiedStatus !== 2) || loginData.isAdmin) {
                    verifyDocument(DocId);
                }

            }}
                title={getTitle(VerifiedStatus)}
                className={`pi  pi-verified  margin-r-10 ${getColor(VerifiedStatus)}`}
            ></span>
        </>)
    }
    const TableActions = (item) => {
        const { DocFileName, DocId, VerifiedStatus } = item;
        const isPdf = () => {
            let ar = DocFileName.split('.')
            return ar[ar.length - 1] === 'pdf'
        }
        return (<>
            <ConfirmModal
                visible={show}
                onClose={() => setShow(false)}
                content={"Are you sure you want to delete?"}
                onConfirm={onDelete}
                header={"Confirm Delete"}
            />
            <span title="View Document" >

                {isPdf() ?
                    <>
                        <span title="View" onClick={() => {

                            setShowDoc(item)
                        }} className="pi pi-eye margin-r-10 grey" ></span>

                    </>
                    :
                    <Image className="img-icon" src="/img/eye.png" zoomSrc={`${getBaseUrl()}/uploads/documents/${DocFileName}`} alt="Image" width="25" preview />}
            </span>
            {VerifiedStatus !== 1 || loginData.isAdmin ?
                <span title="Edit" onClick={() => {
                    setEditId(DocId);
                    setValue(item)
                }} className="pi pi-pencil margin-r-10 grey" ></span> : <></>}

            <span onClick={() => {
                downloadFile(`${getBaseUrl()}uploads/documents/${DocFileName}`, DocFileName)
            }} title="Delete" className="pi pi-download blue margin-r-10" ></span>
            {VerifiedStatus !== 1 || loginData.isAdmin ? <span onClick={() => {
                setEditId(DocId);
                setShow(true)
            }} title="Delete" className="pi pi-trash red" ></span > : <></>}
        </>)
    }
    return (<>
        {showDoc.DocId && <PdfViewer key={showDoc.DocId} header={showDoc.DocFileName} show={true} path={`${getBaseUrl()}/uploads/documents/${showDoc.DocFileName}`} setShow={() => setShowDoc({})} />}
        <Toast ref={toast} />
        <div className="card content">
            <div className="" style={{
                textAlign: 'right',
                display: 'flex',
                direction: 'rtl'
            }}>
                <UploadDocument
                    clearData={() => {
                        setValue(null)
                    }}
                    documentData={value}
                    reload={(r) => {
                        showToast(r)
                        getDocuments();
                        setValue(null)
                    }}
                    studentId={studentId}
                    visDocument={true} />
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