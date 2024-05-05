import React, { useEffect, useRef, useState } from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Document from "./Document";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from 'primereact/image';
import UploadDocument from "./UploadDocument";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { getAllDocuments } from "./documentServices";
import { getBaseUrl } from "../../Services/HttpService";
import moment from "moment";
const Documents = ({ studentId }) => {
     const [data, setData] = useState([]);
     const [value, setValue] = useState({});
     const [editId, setEditId] = useState(null)
     const op = useRef(null);
     const onDelete = (id) => {
          setData(data.filter((item) => item.id !== id))
     }
     const getDocuments = () => {
          getAllDocuments({ application_id: studentId }).then((res) => {
               if (res.data.success) {
                    setData(res.data.data)
               }
          })
     }
     useEffect(() => {
          getDocuments();
     }, [])
     const TableActions = (item) => {
          const { DocFileName, DocId } = item;
          return (<>
               <span title="View Document" >
                    {/* <Button type="button" icon="pi pi-image" label="Image" /> */}
                    <Image className="img-icon" src="/img/eye.png" zoomSrc={`${getBaseUrl()}/uploads/${DocFileName}`} alt="Image" width="25" preview />
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
          <div className="card content">
               <UploadDocument studentId={studentId} reload={() => {
                    getDocuments();
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