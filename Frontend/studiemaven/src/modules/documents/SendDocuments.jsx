import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { ListBox } from 'primereact/listbox';
const SendDocuments = () => {
    const [visible, setVisible] = useState(false);
    const [mailData, setMailData] = useState({
        header: 'Hi Allen,',
        subject: 'Greetings from Studie Mave. Plese finde the verified documents attached',
    })
    const cities = [
        { name: 'SSLC', code: 'NY' },
        { name: 'Degree', code: 'RM' },
        { name: 'Visa', code: 'LDN' },
    ];
const FooterContent = () => (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button label="Send" className="small-button margin-r-10" severity="success" />
        <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
    </div>
);
const onChange = (key, value) => {
setMailData({
    ...mailData,
    [key] : value
})
}

return (
    <>
        <div  >
            <span onClick={() => setVisible(true)} title="Send Mail" className="pi pi-envelope margin-r-10 grey action-icon "
                style={{ fontSize: '.8rem' }} ></span>
        </div>
        <Dialog header="Send Mail" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)} >
            <div className="card flex justify-content-center">
                <InputText style={{marginBottom: '10px'}} value={mailData.header} onChange={(e) => onChange('header', e.target.value)} />
                <InputTextarea value={mailData.subject} onChange={(e) => onChange('subject', e.target.value)} rows={5} cols={30} />
                <p>
                <span>Verified Documents</span>
                <ListBox options={cities} optionLabel="name" className="w-full md:w-14rem" />
                </p>
                <FooterContent/>
            </div>
        </Dialog>
    </>
)
}

export default SendDocuments