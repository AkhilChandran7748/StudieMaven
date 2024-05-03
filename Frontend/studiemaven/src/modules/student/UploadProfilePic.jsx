import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import DocumentTypes from "./DocumentTypesDropDown";
const UploadDocument = () => {
    const [visible, setVisible] = useState(false);
    const FooterContent = () => (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button label="Submit" className="small-button margin-r-10" severity="success" />
            <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        value: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset,
        register,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error" style={{ marginBottom: '10px' }}>{errors[name].message}</small> : <small className="p-error" style={{ marginBottom: '10px' }}>&nbsp;</small>;
    };
    const onUpload = (e) => {
        console.log(e);
    }
    return (
        <>
            <div style={{ textAlign: 'right' }} >
                <span onClick={() => setVisible(true)} title="Add New Document" className="pi pi-upload margin-r-10 grey action-icon " style={{ fontSize: '.8rem' }} ></span>
            </div>
            <Dialog header="New Document" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)} >
                <form onSubmit={handleSubmit(onSubmit)} className="add-student">
                    <Toast ref={toast} />
                    <>
                        <Controller
                            name="documentName"
                            control={control}
                            rules={{ required: 'Document Name is required.' }}
                            render={({ field, fieldState }) => (
                                <div>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                    <DocumentTypes/>
                                    {getFormErrorMessage(field.name)}
                                </div>
                            )}
                        />
                        <Controller
                            name="documentName"
                            control={control}
                            rules={{ required: 'Document Name is required.' }}
                            render={({ field, fieldState }) => (
                                <div>
                                   
                                   <input type="file"/>
                                   </div>
                            )}
                        />

                        <Controller
                            name="notes"
                            control={control}
                            render={({ field, fieldState }) => (
                                <div className=" ">
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                    <span className="p-float-label">
                                        <InputTextarea rows={2} cols={30} autoResize id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>Document Notes</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </div>
                            )}
                        />
                    </>
                    {/* </div> */}
                    <FooterContent />
                </form>
            </Dialog>
        </>
    )
}

export default UploadDocument