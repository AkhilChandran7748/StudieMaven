import React from "react";
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
const IELTS = ({ ielts }) => {
    const { read, write, listen, speak, isQualified } = ielts
    return (isQualified ? <>
        < Badge value={'R -' + read} ></Badge >
        <Badge value={'W -' + write} severity="success"></Badge>
        <Badge value={'L -' + listen} severity="info"></Badge >
        <Badge value={'S -' + speak} severity="warning"></Badge>

    </> : 'N/A')
}
export default IELTS