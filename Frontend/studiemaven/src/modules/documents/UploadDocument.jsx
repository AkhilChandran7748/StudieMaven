import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import DocumentTypes from "./DocumentTypesDropDown";
import { uploadDocuments } from "./documentServices";
const UploadDocument = ({ reload, studentId }) => {
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
        let formdata = new FormData()
        formdata.append("document_type_id", data.document_type_id)
        formdata.append("document_file", data.document_file)
        formdata.append("document_notes", data.document_notes)
        formdata.append("application_id",studentId)
        

        uploadDocuments(formdata).then((res) => {
            if (res.data.success) {
                setVisible(false);
                reload('Profile Picture updated successfully')
            }

        }).catch(er => {

            console.log(er)
        })
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
                            name="document_type_id"
                            control={control}
                            rules={{ required: 'Document Name is required.' }}
                            render={({ field, fieldState }) => (
                                <div>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                    <DocumentTypes value={field.value} onChange={(e) => setValue('document_type_id', e)} />
                                    {getFormErrorMessage(field.name)}
                                </div>
                            )}
                        />
                        <Controller
                            name="document_file"
                            control={control}
                            rules={{ required: 'Document File is required.' }}
                            render={({ field, fieldState }) => (
                                <div>

                                    <input type="file" onChange={(e) => setValue(field.name, e.target.files[0])} />
                                    {getFormErrorMessage(field.name)}
                                </div>
                            )}
                        />

                        <Controller
                            name="document_notes"
                            control={control}
                            render={({ field, fieldState }) => (
                                <div style={{ marginTop: '10px' }} className="">
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                    <span className="p-float-label">
                                        <InputTextarea rows={2} cols={30} autoResize id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })}
                                            onChange={(e) => setValue('document_notes', e.target.value)} />
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