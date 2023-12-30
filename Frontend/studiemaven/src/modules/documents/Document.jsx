import React from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Image } from 'primereact/image';
const Document = ({ document }) => {
    return (
        <div className="card flex justify-content-center">
            <Image src="/img/cert1.jpg" alt="Image" width="250" preview />
            <span>Degree Certicficate</span>
        </div>
    )
}
export default Document