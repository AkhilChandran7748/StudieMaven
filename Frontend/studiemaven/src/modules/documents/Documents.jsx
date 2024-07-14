import React, { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from 'primereact/image';
import UploadDocument from "./UploadDocument";
import { getAllDocuments, uploadDocuments } from "./documentServices";
import { getBaseUrl } from "../../Services/HttpService";
import { Toast } from 'primereact/toast';
import moment from "moment";
import { downloadFile } from '../../Utils/Util'
import ConfirmModal from "../common/ConfirmModal";
import PdfViewer from "../common/PdfViewer";
const Documents = ({ studentId, visDocument }) => {
     const [data, setData] = useState([]);
     const [value, setValue] = useState({});
     const [editId, setEditId] = useState(null)
     const [show, setShow] = useState(false)
     const [showDoc, setShowDoc] = useState({})
     const toast = useRef(null);
     const showToast = (detail) => {
          toast.current.show({ severity: 'info', summary: 'Sucess', detail });
     };
     const onDelete = () => {
          let formdata = new FormData()
          formdata.append("document_id", editId)
          formdata.append("delete_status", 1)

          uploadDocuments(formdata).then((res) => {
               if (res.data.success) {
                    showToast('Document deleted successfully')
                    getDocuments();
               }

          }).catch(er => {

               console.log(er)
          })
     }
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
     const TableActions = (item) => {
          const { DocFileName, DocId } = item;
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
               <span title="Edit" onClick={() => {

                    setEditId(item.DocId);
                    setValue(item)
               }} className="pi pi-pencil margin-r-10 grey" ></span>
               <span
                    onClick={() => {
                         downloadFile(`${getBaseUrl()}uploads/documents/${DocFileName}`, DocFileName)
                    }}
                    title="Delete" className="pi pi-download blue margin-r-10" />
               <span onClick={() => { setEditId(DocId); setShow(true) }} title="Delete" className="pi pi-trash red" ></span>
          </>)
     }
     return (<>
          <div className="card content">
               {showDoc.DocId && <PdfViewer key={showDoc.DocId} header={showDoc.DocFileName} show={true} path={`${getBaseUrl()}/uploads/documents/${showDoc.DocFileName}`} setShow={() => setShowDoc({})} />}
               <Toast ref={toast} />
               <UploadDocument
                    clearData={() => {
                         setValue(null)
                    }}
                    documentData={value}
                    visDocument={visDocument}
                    studentId={studentId}
                    reload={(r) => {
                         showToast(r)
                         getDocuments();
                         setValue(null)
                    }} />
               <div className="content card" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="aligin-center" >
                         <Column field="DocumentTypeName" header="Document Name"></Column>
                         <Column
                              body={(item) => <span>{moment(item.DocModifiedDate).format(' DD MMM YYYY, , h:mm:ss a')}</span>}
                              field="DocModifiedDate" header="Modified Date"></Column>
                         <Column field="DocNote" header="Document Notes"></Column>
                         <Column body={TableActions} header="Action"></Column>
                    </DataTable>
               </div>


          </div>
     </>)
}
export default Documents