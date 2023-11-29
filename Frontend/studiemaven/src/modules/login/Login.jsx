import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
const Login = ({onClose}) => {
    const [loginData, setLoginData]= useState({
        username:'',
        password:''
    })
    const navigate = useNavigate();
    
    const onChange=(path, value)=>{
        setLoginData({
            ...loginData,
            [path]: value
        })
    }
    const onLogin = () =>{
        if(loginData.username==='admin' && loginData.password === 'admin'){
            localStorage.setItem('userData',JSON.stringify({ isLoggedIn: true, isAdmin: true }))
            navigate(RENDER_URL.ADMIN_DASHBOARD);
        }
    }
    return (<>
        <div className=" align-center ">
            <InputText placeholder="Username" value={loginData.username} onChange={(e) => onChange('username', e.target.value)} className="p-inputtext-sm margin-b-md" />
            <Password feedback={false} placeholder="Password" value={loginData.password} onChange={(e) => onChange('password', e.target.value)} className="p-inputtext-sm margin-b-md" />
            <div className=" ">
                <span className="padding-r-sm">   <Button onClick={onLogin} label="Login" severity="success" size="small" /></span>
                <Button onClick={onClose} label="Cancel" severity="danger" size="small" />
            </div>
        </div>
    </>)
}
export default Login