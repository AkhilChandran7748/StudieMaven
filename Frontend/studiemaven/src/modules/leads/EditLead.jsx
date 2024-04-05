import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import IntakeDropDown from "../components/IntakeDropDown";
import AgentDropDown from "../components/AgentDropDown";
import StaffDropDown from "../components/StaffDropDown";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import CountryDropDown from "../components/CountryDropDown";
import { updateLEAD } from "./leadServices";
const EditStudent = ({ student, reload }) => {
    // console.log(student, 'student');
    const [visible, setVisible] = useState(false);
    const FooterContent = () => (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button label="Update" className="small-button margin-r-10" severity="success" />
            <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        name: student.Name,
        mobile: student.MobileNumber,
        email: student.Email,
        qualification: student.HigherQualification,
        aps_status: student.APS_Status || 2,
        country_id: student.CountryId,
    };

    // console.log(defaultValues, 'student');
    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset,
        register,
        setValue,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        let params = {
            id: student.LeadId,
            email: data.email,
            name: data.name,
            mobile: data.mobile,
            aps_status: data.aps_status,
            qualification: data.qualification,
            country_id: data.country_id,
        }
        updateLEAD(params).then((res) => {
            if (res?.data?.success) {
                setVisible(false);
                reset();
                reload();
            }
        })
        console.log(data, 'data--------------->');
        // data.value && show();

        // reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error" style={{ marginBottom: '10px' }}>{errors[name].message}</small> : <small className="p-error" style={{ marginBottom: '10px' }}>&nbsp;</small>;
    };
    return (
        <>
            <span onClick={() => setVisible(true)} title="Edit" className="pi pi-user-edit margin-r-10 grey" ></span>
            <Dialog header="Update Student" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} >
                <form onSubmit={handleSubmit(onSubmit)} className="add-student">
                    <Toast ref={toast} />
                    <Splitter >
                        <SplitterPanel className="flex align-items-center margin-l-10" size={50}>
                            <>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: 'Name is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name </label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: 'Email is required.',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Email </label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="mobile"
                                    control={control}
                                    rules={{ required: 'Contact is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Contact</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="qualification"
                                    control={control}
                                    // rules={{ required: 'Contact is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Heighest Qualification</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="aps_status"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-inputtext-sm p-float-label   ">
                                                <Dropdown inputId="dd-city" value={field.value} onChange={(e) => {
                                                    setValue('aps_status', e.value)
                                                }} options={[
                                                    { value: 1, name: 'Yes' },
                                                    { value: 2, name: 'No' },
                                                ]} optionLabel="name" className="m-width-220p" />
                                                <label htmlFor="dd-city">APS Status</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                            </>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center " size={50}>
                            <>

                                <Controller
                                    name="country_id"
                                    control={control}
                                    // rules={{ required: 'Lead is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <CountryDropDown
                                                onChange={(v) => {
                                                    setValue('country_id', v.code)
                                                }} />
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                            </>
                        </SplitterPanel>
                    </Splitter>
                    {/* </div> */}
                    <FooterContent />
                </form>
            </Dialog>
        </>
    )
}

export default EditStudent