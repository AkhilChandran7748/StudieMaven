
import React, { useEffect, useState } from "react";
import { getColors } from "../dataManagement/dataServices";
import { Dropdown } from "primereact/dropdown";
const ColorsDropdown = ({ onChange, value }) => {
    const [colors, setColors] = useState([])
    const [selected, setSelected] = useState(null);
    useEffect(() => {
        if (value) {
            let item = colors.find((i) => i.Id === value)
            item && setSelected(item)
        } else {
            setSelected(null)
        }
    }, [value])
    const getColorData = () => {
        getColors().then((res) => {
            if (res.data.success) {
                setColors(res.data.data)
            }
        })
    }
    useEffect(() => {
        getColorData();
    }, [])
    return (<>
        <Dropdown inputId="dd-city" value={selected} onChange={(e) => {
            setSelected(e.value);
            onChange && onChange(e.value)
        }} options={colors} optionLabel="ColorName" className="m-width-220p" />
        <label htmlFor="dd-city">Color</label>
    </>)
}
export default ColorsDropdown
