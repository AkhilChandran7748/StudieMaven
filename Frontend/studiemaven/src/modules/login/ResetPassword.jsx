import React, { useState } from "react";
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import { useNavigate, useParams } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import { Dialog } from "primereact/dialog";
import { addStaffs } from "../staffs/staffService";
const ResetPassword = () => {
    const { id } = useParams();
    const [show, setShow] = useState(true);
    const [loginData, setLoginData] = useState({
        password: '',
        rePassword: '',
    })
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate();

    const onChange = (path, value) => {
        setLoginData({
            ...loginData,
            [path]: value
        })
    }
    const onChangePassword = () => {
        if (loginData.password === loginData.rePassword) {
            let editParams = {
                id,
                "password": loginData.password,
            }
            addStaffs(editParams).then((res) => {
                if (res?.data?.success) {
                    setShow(false);
                    navigate(RENDER_URL.STAFF_DASHBOARD)
                }
            }).catch((er) => setLoginError(true))
            // if(loginData.username==='admin' && loginData.password === 'admin'){
            //     localStorage.setItem('userData',JSON.stringify({ isLoggedIn: true, isAdmin: true }))
            //     navigate(RENDER_URL.ADMIN_DASHBOARD);
            // }
        } else {
            setLoginError(true)
        }
    }
    return (<>
        <Dialog headerClassName="align-center" header="Reset Password" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >

            <div className=" align-center ">
                <Password feedback={false} placeholder="Enter New Password" value={loginData.password} onChange={(e) => onChange('password', e.target.value)} className="p-inputtext-sm margin-b-md" />
                <Password feedback={false} placeholder="Re enter Password" value={loginData.rePassword} onChange={(e) => onChange('rePassword', e.target.value)} className="p-inputtext-sm margin-b-md" />
                {loginError && <div className="error  margin-b-md">Passwords should match</div>}
                <div className=" ">
                    <span className="padding-r-sm">   <Button onClick={onChangePassword} label="Reset" severity="success" size="small" /></span>
                    <Button onClick={() => {
                        setShow(false);
                        navigate(RENDER_URL.GUEST_DASHBOARD);
                    }} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>
    </>)
}
export default ResetPassword