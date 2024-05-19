import FileSaver from 'file-saver';
import { useRef, useEffect } from 'react'
import {saveAs} from 'file-saver'
export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};
export const downloadFile = (doclink, name) => {
    FileSaver.saveAs(
        doclink,
        name,
      );
}

const makeTimer = () => {
    //for add management
    setInterval(() => {
        const months = ["January", "February", "March", "April", "May", "June", "July"];

        const random = Math.floor(Math.random() * months.length);
        console.log(random, months[random]);


    }, 1000)
} 
