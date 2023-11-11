import React from 'react'
import GuestHeader from './GuestHeaderComponent'
const WithHeader = (HocComponent) => {

    const Wrapper = (props) => {
        const loginData = { isLoggedIn: false };
        const getHeader = () => {
            if (loginData.isLoggedIn) {
                // return (loginData.isAdmin ?
                //     <AdminHeaderComponent
                //         {...props}
                //     /> : <> <UserHeaderComponent {...props} />
                //     </>)
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