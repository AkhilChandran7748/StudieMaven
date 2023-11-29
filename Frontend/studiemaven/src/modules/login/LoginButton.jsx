import React, { useState } from "react";
import './login.css';
import { Dialog } from 'primereact/dialog';
import Login from "./Login";
const LoginButton = () => {
    const [show, setShow] = useState(false);
    return (<>
        <Dialog headerClassName="align-center" header="Login" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <Login onClose={() => setShow(false)} />
        </Dialog>
        <span onClick={() => setShow(true)} title="Login" className="pi pi-user margin-t-sm" style={{ color: 'white' }}></span></>)
}
export default LoginButton