import React from 'react'
import GuestHeader from './GuestHeaderComponent'
import AdminHeader from './AdminHeader';
const WithHeader = (HocComponent) => {

    const Wrapper = (props) => {
        let loginData = localStorage.getItem('userData');
        loginData = loginData && JSON.parse(loginData) || {};
        const getHeader = () => {
            if (loginData.isLoggedIn) {
                return (loginData.isAdmin ?
                    <AdminHeader
                        {...props}
                    /> : <> <AdminHeader {...props} />
                    </>)
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