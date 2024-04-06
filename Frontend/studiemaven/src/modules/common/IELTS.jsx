import React, { useState } from "react";
import { Badge } from 'primereact/badge';
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { updateIELTS } from "../leads/leadServices";
import moment from "moment";
const IELTS = ({ HasIelts, IELTS, LeadId, reload }) => {
    const { Reading, Writing, Listening, Speaking, ExpiryOn } = IELTS
    const [show, setShow] = useState(false);
    const [ieltsData, setIelts] = useState({
        HasIelts: HasIelts ? true : false,
        Reading,
        Writing,
        Listening,
        Speaking,
        ExpiryOn : ExpiryOn?new Date(ExpiryOn): '',
    })
    const onUpdateIELTS = () => {
        const { Reading, Writing, Listening, Speaking, ExpiryOn } = ieltsData
        const updatePrams = {
            "lead_id": LeadId,
            "reading": Reading,
            "writing": Writing,
            "listening": Listening,
            "speaking": Speaking,
            "expiry": ExpiryOn
        }
        updateIELTS(updatePrams).then((res) => {
            if (res?.data?.success) {
                reload();
                setShow(false)
            }
        })
    }
    return (
        <>
            {show && <Dialog headerClassName="align-center" header="Update IELTS" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
                <div className=" align-center ">
                    <Dropdown value={ieltsData.HasIelts} onChange={(e) => setIelts({
                        ...ieltsData,
                        HasIelts: e.value
                    })} options={[{ name: 'Yes', value: true }, { name: 'No', value: false }]} optionLabel="name"
                        placeholder="Has IELTS" className="m-width-220p" />
                    {ieltsData.HasIelts ? <>
                        <div style={{ marginTop: '15px' }} className="margin-t-10p">
                            <InputText placeholder="R" className="scoreInput" value={ieltsData.Reading} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    Reading: e.target.value
                                })
                            }} />
                            <InputText placeholder="W" className="scoreInput" value={ieltsData.Writing} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    Writing: e.target.value
                                })
                            }} />
                            <InputText placeholder="L" className="scoreInput" value={ieltsData.Listening} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    Listening: e.target.value
                                })
                            }} />
                            <InputText placeholder="S" className="scoreInput" value={ieltsData.Speaking} onChange={(e) => {
                                setIelts({
                                    ...ieltsData,
                                    Speaking: e.target.value
                                })
                            }} />
                        </div>
                        <Calendar placeholder="Expiry Date" value={ieltsData.ExpiryOn} onChange={(e) => setIelts({
                            ...ieltsData,
                            ExpiryOn: e.value
                        })} className="m-width-220p margin-t-20p calender-w" />
                    </> : <></>
                    }

                    <div className="padding-t-20p">
                        <span className="padding-r-sm">   <Button onClick={onUpdateIELTS} label="Update" severity="success" size="small" /></span>
                        <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                    </div>
                </div>
            </Dialog>}
            <div onClick={() => setShow(true)}>
                {ieltsData.HasIelts ? <>
                    < Badge className="f-10p" value={'R -' + Reading} ></Badge >
                    <Badge className="f-10p" value={'W -' + Writing} severity="success"></Badge>
                    <Badge className="f-10p" value={'L -' + Listening} severity="info"></Badge >
                    <Badge className="f-10p" value={'S -' + Speaking} severity="warning"></Badge>
                    <div className="date-button margin-t-sm">{moment(ExpiryOn).format('DD/MM/YY')}</div>

                </> : 'N/A'}
            </div>
        </>)
}
export default IELTS