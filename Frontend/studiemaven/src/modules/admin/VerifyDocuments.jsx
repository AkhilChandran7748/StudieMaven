import React, { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getBaseUrl } from "../../Services/HttpService";
import { documentsData } from "../student/data";
import { Image } from 'primereact/image';
import { getAllDocuments, uploadDocuments } from "../documents/documentServices";
import { Toast } from 'primereact/toast';
import { Link } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import PdfViewer from "../common/PdfViewer";
const VerifyDocuments = () => {
    const [data, setData] = useState()
    const [showDoc, setShowDoc] = useState({})
    let loginData = localStorage.getItem('userData');
    loginData = loginData && JSON.parse(loginData) || {};
    const toast = useRef(null);
    const showToast = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Sucess', detail });
    };
    const getDocuments = () => {
        getAllDocuments({ verified_status: 2 }).then((res) => {
            if (res?.data?.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getDocuments();
    }, [])

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
    const TableActions = (item) => {
        const { DocFileName, DocId, VerifiedStatus } = item; const isPdf = () => {
            let ar = DocFileName.split('.')
            return ar[ar.length - 1] === 'pdf'
        }
        return (<>
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
    const NameColumn = ({ ApplicationId, Name }) => {
        return (<>
            <span>
                {Name}
                <Link to={`${RENDER_URL.VIEW_STUDENT}/${ApplicationId}`} target="_blank">
                    <span title="View Student Profile" className="pi pi-external-link margin-r-10 margin-l-10 grey" >

                    </span>
                </Link>

            </span>
        </>)
    }
    return (
        <div className="content" style={{ textAlign: "-webkit-center" }}>
            {showDoc.DocId && <PdfViewer key={showDoc.DocId} header={showDoc.DocFileName} show={true} path={`${getBaseUrl()}/uploads/documents/${showDoc.DocFileName}`} setShow={() => setShowDoc({})} />}
            <Toast ref={toast} />
            <DataTable value={data} className="width-600p aligin-center" >
                <Column field="Name" body={NameColumn} header="Student Name"></Column>
                <Column field="DocumentTypeName" header="Document Name"></Column>
                <Column field="DocNote" header="Document Note"></Column>

                <Column body={TableActions} header="Action"></Column>
            </DataTable>
        </div>
    )
}

export default VerifyDocuments
