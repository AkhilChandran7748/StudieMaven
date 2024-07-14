import React, { useEffect } from "react";
import { Dialog } from 'primereact/dialog';
const PdfViewer = ({ path, show, setShow, header }) => {
    // const [src, setSrc]= uses
    // useEffect(())
    return (<>
        <Dialog header={header} visible={show} style={{ width: '70vw' }} onHide={() => { if (!show) return; setShow(false); }}>
            <iframe src={path} width='100%' height='500px' />
        </Dialog>

    </>)
}
export default PdfViewer