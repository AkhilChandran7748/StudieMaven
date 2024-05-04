import React, { useState } from "react";
import { Badge } from 'primereact/badge';
import moment from "moment";
const InTake = ({ InTake, isDefered }) => {
    const covertDate = () => {
        if (InTake)
            return moment(`${InTake}`).format('MMM YY')
    }
    //psotpone
    return (
        <span className={`${isDefered ? 'red' : ''}`} style={{ marginRight: '5px' }} > 
        {isDefered && <Badge title="Postponed" value="p" severity="danger"></Badge>}
        {covertDate() || '-'}</span>

    )
}
export default InTake