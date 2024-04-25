import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { Badge } from 'primereact/badge';
const InTake = ({ inTake, isPostponed }) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(null);
    //psotpone
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change InTake" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                <Calendar className=" m-width-220p" inputId="dd-city" value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="MM/yy" />
                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={() => setShow(false)} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <span style={{marginRight: '5px'}} onClick={() => setShow(true)}>{inTake|| '-'}</span>
        {isPostponed &&<Badge value="p"  severity="danger"></Badge>}
    </>
    )
}
export default InTake