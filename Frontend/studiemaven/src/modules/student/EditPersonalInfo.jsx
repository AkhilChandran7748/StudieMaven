import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import IntakeDropDown from "../components/IntakeDropDown";
import AgentDropDown from "../components/AgentDropDown";
import StaffDropDown from "../components/StaffDropDown";
import { InputTextarea } from "primereact/inputtextarea";
import { addStudent } from "./student.services";
import { Dropdown } from "primereact/dropdown";
const EditPersonalInfo = ({ student = {}, reload }) => {
    const [visible, setVisible] = useState(false);
    const FooterContent = () => (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button label="Submit" className="small-button margin-r-10" severity="success" />
            <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
        </div>
    );




    const defaultValues = {
        name: student?.Name,
        email: student?.Email,
        mobile: student?.MobileNumber,
        secondary_email: student?.SecondaryEmail,
        "aps_status": student?.APS_Status,
        "tas_status":student?.TAS_Status,
        "cfs_status":student?.CFS_Status,

        
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        setValue,
        reset,
        register,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        addStudent({ ...data, application_id: student.ApplicationId }).then((res) => {
            if (res.data.success) {
                setVisible(false);
                reload('Student data updated successfully');
            }
        })
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error" style={{ marginBottom: '10px' }}>{errors[name].message}</small> : <small className="p-error" style={{ marginBottom: '10px' }}>&nbsp;</small>;
    };
    return (
        <>
            <span onClick={() => setVisible(true)} title="update personal info" className="pi pi-pencil grey  margin-r-10" style={{ float: 'right' }} />

            <Dialog header="Update Personal Info" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} >
                <form onSubmit={handleSubmit(onSubmit)} className="add-student">

                    <Splitter >
                        <SplitterPanel className="flex align-items-center margin-l-10 padding-t-10p" size={50}>

                            <>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: 'Name is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
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
                                    name="secondary_email"
                                    control={control}
                                    rules={{
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
                                                <label htmlFor={field.name}>Secondary Email </label>
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

                            </>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center  padding-t-10p " size={50}>
                            <Controller
                                name="aps_status"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <div>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                        <span className="p-inputtext-sm p-float-label  margin-l-10  ">
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
                            <Controller
                                name="tas_status"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <div>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                        <span className="p-inputtext-sm p-float-label   margin-l-10 ">
                                            <Dropdown inputId="dd-city" value={field.value} onChange={(e) => {
                                                setValue('tas_status', e.value)
                                            }} options={[
                                                { value: 1, name: 'Yes' },
                                                { value: 0, name: 'No' },
                                            ]} optionLabel="name" className="m-width-220p" />
                                            <label htmlFor="dd-city">TEST AS Status</label>
                                        </span>
                                        {getFormErrorMessage(field.name)}
                                    </div>
                                )}
                            />
                            <Controller
                                name="cfs_status"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <div>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                        <span className="p-inputtext-sm p-float-label   margin-l-10">
                                            <Dropdown inputId="dd-city" value={field.value} onChange={(e) => {
                                                setValue('cfs_status', e.value)
                                            }} options={[
                                                { value: 1, name: 'Yes' },
                                                { value: 0, name: 'No' },
                                            ]} optionLabel="name" className="m-width-220p" />
                                            <label htmlFor="dd-city">Campus France</label>
                                        </span>
                                        {getFormErrorMessage(field.name)}
                                    </div>
                                )}
                            />
                        </SplitterPanel>
                    </Splitter>
                    {/* </div> */}
                    <FooterContent />
                </form>
            </Dialog>
        </>
    )
}

export default EditPersonalInfo