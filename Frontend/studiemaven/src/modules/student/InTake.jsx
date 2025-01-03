import React, { useState } from "react";
import { Badge } from 'primereact/badge';
import moment from "moment";
const InTake = ({ InTake, IsDefered }) => {
    const covertDate = () => {
        if (InTake)
            return moment(`${InTake}`).format('MMM YY')
        return '-'
    }
    return (
        <span className={`${IsDefered ? 'red' : ''}`} style={{ marginRight: '5px' }} >
            {IsDefered ? <Badge title="Postponed" value="p" severity="danger"></Badge> : ''}
            {covertDate()}</span>

    )
}
export default InTake