import React from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Document from "./Document";
const Documents = ({ documents }) => {
    return (<>
        <Splitter >
        <SplitterPanel size={25} className="flex align-items-center justify-content-center">
           <Document />
        </SplitterPanel>
        <SplitterPanel size={25} className="flex align-items-center justify-content-center">
             <Document />
        </SplitterPanel>
        <SplitterPanel size={25} className="flex align-items-center justify-content-center">
             <Document />
        </SplitterPanel>
        <SplitterPanel size={25} className="flex align-items-center justify-content-center">
             <Document />
        </SplitterPanel>

        </Splitter>
    </>)
}
export default Documents