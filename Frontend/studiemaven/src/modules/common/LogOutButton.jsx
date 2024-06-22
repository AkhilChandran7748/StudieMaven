import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { ManageLocalStorage } from "../../Services/Localstorage";
import { RENDER_URL } from "../../Utils/Urls"; import {
    useNavigate
} from "react-router-dom";
const LogoutButton = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const onLogOut = () => {
        navigate({
            pathname: RENDER_URL.GUEST_DASHBOARD,
        });
        window.location.reload();
        ManageLocalStorage.clear();
    }
    return (<>
        <ConfirmModal
            visible={show}
            onClose={() => setShow(false)}
            content={"Are you sure you want to logout?"}
            onConfirm={onLogOut}
            header={"Logout"}
        />
        <span onClick={() => setShow(true)} title="Logout" className="pi pi-sign-out margin-t-sm" style={{ color: 'white' }}></span></>)
}
export default LogoutButton