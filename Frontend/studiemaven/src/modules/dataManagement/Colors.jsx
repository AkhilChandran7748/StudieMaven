import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { addColors, getColors, updateColor } from "./dataServices";
import { ColorPicker } from 'primereact/colorpicker';
const Color = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({ color_code: 'ff1a00s' });
    const [editId, setEditId] = useState(null)
    const getColorData = () => {
        getColors().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getColorData();
    }, [])
    const onSubmit = () => {
        if (value.color_name) {
            if (editId) {
                addColors({
                    ...value,
                    "color_id": editId,
                }).then((res) => {
                    if (res.data.success) {
                        getColorData();
                    }
                })
            } else {
                addColors(value).then((res) => {
                    if (res.data.success) {
                        getColorData();
                    }
                })
            }
            setValue({ color_code: 'ff1a00s' });
            setEditId('');
        }
    }
    const onDelete = (id) => {
        addColors({
            "color_id": id,
            "delete_status": "1",
        }).then((res) => {
            if (res.data.success) {
                getColorData();
            }
        })
    }
    const TableActions = (item) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(item.Id);
                setValue({
                    color_code: item.ColorCode,
                    color_name: item.ColorName
                })
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
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.color_name || ''} onChange={(e) => setValue({
                        ...value,
                        color_name: e.target.value
                    })} />
                    <label htmlFor="username">Color</label>
                </span>
                <span className="p-inputtext-sm p-float-label  margin-l-10 ">
                    <ColorPicker value={value?.color_code} onChange={(e) => setValue({
                        ...value,
                        color_code: e.target.value
                    })} />
                </span>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue({ color_code: 'ff1a00s' });
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="width-350p aligin-center" >
                        <Column field="ColorName" header="Status"></Column>
                        <Column body={ColorComponent} header="Badge Color"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default Color