import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paymentOptions } from "../student/data";
import { Dropdown } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';
import { colors } from "../../Utils/Constants";
import { getPaymentStatus, addPaymentStatus } from "./dataServices";
import ColorsDropdown from "../common/ColorDropDown";
const PaymentStatus = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)
    const getPaymentsStatusData = () => {
        getPaymentStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getPaymentsStatusData();
    }, [])
    const onSubmit = () => {
        if (value.PaymentStatusName) {
            if (editId) {

                addPaymentStatus({
                    pay_status_type_id: editId,
                    pay_status_type_name: value.PaymentStatusName,
                    color_id: value.ColorId,
                }).then((res) => {
                    if (res.data.success) {
                        getPaymentsStatusData();
                    }
                })
            } else {
                addPaymentStatus({
                    pay_status_type_name: value.PaymentStatusName,
                    color_id: value.ColorId,
                }).then((res) => {
                    if (res.data.success) {
                        getPaymentsStatusData();
                    }
                })
            }
            setValue(null);
            setEditId('');
        }
    }
    const onDelete = (id) => {
        addPaymentStatus({
            "pay_status_type_id": id,
            "delete_status": 1
        }).then((res) => {
            if (res.data.success) {
                getPaymentsStatusData();
            }
        })
    }
    const TableActions = (item) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(item.Id);
                setValue(item)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(item.Id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    const ColorComponent = ({ ColorName, ColorCode }) => {
        return <span className="color-badge" style={{ backgroundColor: `#${ColorCode}` }} >{ColorName}</span>
    }
    return (<>
        <div className="content margin-t-30p align-center">
            <div>
                <span className="p-float-label margin-l-10">
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.PaymentStatusName || ''} onChange={(e) => setValue({
                        ...value,
                        PaymentStatusName: e.target.value
                    })} />
                    <label htmlFor="username">Payment Status1</label>
                </span>
                <span className="p-inputtext-sm p-float-label  margin-l-10 ">
                    <ColorsDropdown value={value?.ColorId} onChange={(e) => {
                        setValue({
                            ...value,
                            ColorName: e.ColorName,
                            ColorCode: e.ColorCode,
                            ColorId: e.Id
                        })
                    }
                    } />
                </span>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue({});
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="width-350p aligin-center" >
                        <Column field="PaymentStatusName" header="Status"></Column>
                        <Column body={ColorComponent} header=" Color"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default PaymentStatus