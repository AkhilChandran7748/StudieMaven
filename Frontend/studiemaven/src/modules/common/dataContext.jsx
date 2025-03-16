import { createContext, useEffect, useState } from "react";
import { getPaymentStatus, getStatus, getVisaStatus } from "../dataManagement/dataServices";


export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {

    const [payemntData, setPaymentData] = useState([]);
    const [visaStatustData, setViasaStatusData] = useState([]);
    const [statustData, setStatusData] = useState([]);
    const getPaymentsStatusData = () => {
        getPaymentStatus().then((res) => {
            if (res.data.success) {
                setPaymentData(res.data.data)
            }
        })
    }
    const getViasStatusData = () => {
        getVisaStatus().then((res) => {
            if (res.data.success) {
                setViasaStatusData(res.data.data)
            }
        })
    }
    const getStatusData = () => {
        getStatus().then((res) => {
            if (res.data.success) {
                setStatusData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getPaymentsStatusData();
        getViasStatusData()
        getStatusData();
    }, [])

    return (
        <div>
            <DataContext.Provider value={{
                payemntData,
                visaStatustData,
                statustData,

            }}>
                {children}
            </DataContext.Provider>

        </div>
    )
}
export default DataContextProvider;