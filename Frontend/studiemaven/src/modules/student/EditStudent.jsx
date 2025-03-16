import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import IntakeDropDown from "../components/IntakeDropDown";
import AgentDropDown from "../components/AgentDropDown";
import { Dropdown } from "primereact/dropdown";
import CountryDropDown from "../components/CountryDropDown";
import { InputNumber } from "primereact/inputnumber";
import { addStudent } from "./student.services";
import moment from "moment";
import UniversityMultiSelect from "../components/UniversityMultiSelect";
const AddStudent = ({ reload, student }) => {
    const [visible, setVisible] = useState(false);
    const FooterContent = () => (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button label="Update" className="small-button margin-r-10" severity="success" />
            <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const defaultValues = {
        name: student.Name,
        email: student.Email,
        mobile: student.MobileNumber,
        intake: student.InTake,
        aps_status: student.APS_Status,
        qualification: student.HigherQualification,
        country_id: student.CountryId,
        university_id: student.UniversityId,
        agent_id: student.AgentId,
        course_name: student.Course,
        owner_id: student.OwnerId

    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        let is_defered = moment(student.InTake).format(' DD MMM YYYY') !== moment(data.intake).format(' DD MMM YYYY') ? 1 : 0
        addStudent({ ...data, application_id: student.ApplicationId, is_defered, is_converted: student.IsConverted }).then((res) => {
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
            <span onClick={() => setVisible(true)} title="Edit" className="pi pi-user-edit margin-r-10 grey" ></span>
            <Dialog header="Update Student" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} >
                <form onSubmit={handleSubmit(onSubmit)} className="add-student">
                    <Splitter >
                        <SplitterPanel className="flex align-items-center margin-l-10" size={50}>
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
                                    name="mobile"
                                    control={control}
                                    rules={{ required: 'Contact is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputNumber useGrouping={false} id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
                                                <label htmlFor={field.name}>Contact</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="intake"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <IntakeDropDown dateValue={field.value} onChange={(e) => {
                                                setValue('intake', e)
                                            }} />
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
                                    name="qualification"
                                    control={control}
                                    rules={{ required: 'Qualification is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div className="margin-l-10">
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
                                    name="country_id"
                                    control={control}
                                    rules={{ required: 'Country is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <CountryDropDown
                                                value={field.value}
                                                onChange={(v) => {
                                                    setValue('country_id', v)
                                                }} />
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="university_id"
                                    control={control}
                                    rules={{ required: 'Select atleast 1 university.' }}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <UniversityMultiSelect
                                                value={field?.value ? field.value.split(',') : []}
                                                onChange={(v) => {
                                                    setValue('university_id', v)
                                                }} />
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="agent_id"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <div>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <AgentDropDown value={field.value} onChange={(v) => {
                                                setValue('agent_id', v)
                                            }} />
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="course_name"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <div className="margin-l-10">
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Course </label>
                                            </span>
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

export default AddStudent