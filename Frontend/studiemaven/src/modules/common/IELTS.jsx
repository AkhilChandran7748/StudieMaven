import React, { useState } from "react";
import { Badge } from 'primereact/badge';
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
const IELTS = ({ ielts }) => {
    const { read, write, listen, speak, isQualified, expiryData } = ielts
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [ieltsData, setIelts] = useState({
        hasIelts: false,
        r: '',
        w: '',
        l: '',
        s: '',
        expiryDate: ''
    })

    const statusList = [
        { name: 'Accepted', code: 'LDN' },
        { name: 'Rejected', code: 'LDsN' },
        { name: 'Appointment Scheduled', code: 'LDssN', hasDate: true },
    ];
    console.log(ieltsData);
    return (
        <>
            {show && <Dialog headerClassName="align-center" header="Update IELTS" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
                <div className=" align-center ">
                    <Dropdown value={ieltsData.hasIelts} onChange={(e) => setIelts({
                        ...ieltsData,
                        hasIelts: e.value
                    })} options={[{ name: 'Yes', value: true }, { name: 'No', value: false }]} optionLabel="name"
                        placeholder="Has IELTS" className="m-width-220p" />
                    {ieltsData.hasIelts && <>
                        <div style={{ marginTop: '15px' }} className="margin-t-10p">
                            <InputText placeholder="R" className="scoreInput" value={ieltsData.r} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    r: e.target.value
                                })
                            }} />
                            <InputText placeholder="W" className="scoreInput" value={ieltsData.w} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    w: e.target.value
                                })
                            }} />
                            <InputText placeholder="L" className="scoreInput" value={ieltsData.l} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    l: e.target.value
                                })
                            }} />
                            <InputText placeholder="S" className="scoreInput" value={ieltsData.s} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    s: e.target.value
                                })
                            }} />
                        </div>
                        <Calendar placeholder="Expiry Date" value={date} onChange={(e) => setDate(e.value)} className="m-width-220p margin-t-20p calender-w" />
                    </>
                    }

                    <div className="padding-t-20p">
                        <span className="padding-r-sm">   <Button onClick={() => setShow(false)} label="Update" severity="success" size="small" /></span>
                        <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                    </div>
                </div>
            </Dialog>}
            <div onClick={() => setShow(true)}>
                {isQualified ? <>
                    < Badge value={'R -' + read} ></Badge >
                    <Badge value={'W -' + write} severity="success"></Badge>
                    <Badge value={'L -' + listen} severity="info"></Badge >
                    <Badge value={'S -' + speak} severity="warning"></Badge>
                    <div className="date-button margin-t-sm">{expiryData}</div>

                </> : 'N/A'}
            </div>
        </>)
}
export default IELTS