import React, { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getBaseUrl } from "../../Services/HttpService";
import { documentsData } from "../student/data";
import { Image } from 'primereact/image';
import { getAllDocuments, uploadDocuments } from "../documents/documentServices";
import { Toast } from 'primereact/toast';
const VerifyDocuments = () => {
    const [data, setData] = useState(documentsData.filter((i) => i.verifyStatus === 'Pending'))
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
        const { DocFileName, DocId, VerifiedStatus } = item;
        return (<>
            <span title="View Document" >
                <Image className="img-icon" src="/img/eye.png" zoomSrc={`${getBaseUrl()}/uploads/documents/${DocFileName}`} alt="Image" width="25" preview />

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
    return (
        <div className="content" style={{ textAlign: "-webkit-center" }}>
              <Toast ref={toast} />
            <DataTable value={data} className="width-350p aligin-center" >
                <Column field="DocumentTypeName" header="Student Name"></Column>
                <Column field="DocumentTypeName" header="Document Name"></Column>
                <Column body={TableActions} header="Action"></Column>
            </DataTable>
        </div>
    )
}

export default VerifyDocuments
