import React, { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {
    Link,
    useNavigate
} from "react-router-dom";

import { documentsData } from "../student/data";
import { Image } from 'primereact/image';
const VerifyDocuments = () => {
    const [data, setData] = useState(documentsData.filter((i) => i.verifyStatus === 'Pending'))
    const navigate = useNavigate();
 
    const TableActions = (item) => {
        return (<>
             <span title="View Document" className="margin-r-10" >
                   {/* <Button type="button" icon="pi pi-image" label="Image" /> */}
                  <Image className="img-icon" src="/img/eye.png" zoomSrc="/img/cert1.jpg" alt="Image" width="25" preview />
                  {/* <OverlayPanel ref={op} >
                       <img className="img-viewer" src={'/img/cert1.jpg'} alt="Bamboo Watch"></img>
                  </OverlayPanel> */}
             </span>
             <span onClick={() => { }} title="Click To Verify" className="pi  pi-verified  margin-r-10" ></span>
        </>)
   }
    return (
        <div className="content" style={{ textAlign: "-webkit-center" }}>
            <DataTable value={data} className="width-350p aligin-center" >
                <Column field="documentName" header="Document Name"></Column>
                <Column body={TableActions} header="Action"></Column>
            </DataTable>
        </div>
    )
}

export default VerifyDocuments
