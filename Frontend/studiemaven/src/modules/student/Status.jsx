import React from "react";
import { Badge } from 'primereact/badge';
const Status = ({ status }) => {
    const getSeverity = () => {
        switch (status) {
            case 'Rejected':
                return 'danger'
            case 'Completed':
                return 'success';
            default: return '';
        }
    }
    return (<>
        <Badge value={status} severity={getSeverity()} />
    </>
    )
}
export default Status