import React from 'react'
import GuestHeader from './GuestHeaderComponent'
import AdminHeader from './AdminHeader';
import StaffHeader from './StaffHeader';

const WithHeader = (HocComponent) => {

    const Wrapper = (props) => {
        let loginData = localStorage.getItem('userData');
        loginData = loginData && JSON.parse(loginData) || {};
        const getHeader = () => {
            if (loginData.isAdmin === 1) {
                return (
                    <AdminHeader
                        {...props}
                    />)
            }
            else if (loginData.isAdmin === 0) {
                return (
                    <StaffHeader
                        {...props}
                    />)
            }

            return <GuestHeader {...props} />
        }
        return (
            <>

                {getHeader()}
                <HocComponent {...props} />
            </>);
    };
    return Wrapper;
};
export default WithHeader;