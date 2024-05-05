import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Splitter, SplitterPanel } from "primereact/splitter";
import React, { useRef, useState } from "react";
import { getBaseUrl } from "../../Services/HttpService";
import { uploadProfile } from "./student.services";

const ProfileComponent = ({ profileUrl = null, application_id, reload }) => {
    let fileRef = useRef()
    const [visible, setVisible] = useState(false)
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const handleUpload = () => {
        let file = fileRef.current.files[0];
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

    }
    const onSubmit = (data) => {

        let formdata = new FormData()
        formdata.append("profile", file[0])
        formdata.append("application_id", application_id)

        uploadProfile(formdata).then((res) => {
            if (res.data.success) {
                setVisible(false);
                reload('Profile Picture updated successfully')
            }

        }).catch(er => {
            
            console.log(er)
        })

    }
    const FooterContent = () => (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Splitter style={{ height: '80px' }} >
                <SplitterPanel>
                    <input type="file"
                        accept="image/x-png,image/gif,image/jpeg"
                        
                        ref={fileRef}
                        onChange={(e) => {
                            handleUpload(e.target)
                            setFile(e.target.files[0])
                        }} />
                </SplitterPanel>
                <SplitterPanel>
                    <Avatar onClick={() => setVisible(true)} className="p-overlay-badge"
                        image={preview ? preview : '/img/addPic.jpg'}
                        size="xlarge">
                    </Avatar>
                </SplitterPanel>
            </Splitter>
            <Button label="Upload" onClick={onSubmit} className="small-button margin-r-10" severity="success" />
            <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    return (<>
        <div>
            <Dialog header="Update Profile Picture" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)} >
                <FooterContent />
            </Dialog>
            <Avatar onClick={() => setVisible(true)} className="p-overlay-badge"
                image={profileUrl ? `${getBaseUrl()}/uploads/${profileUrl}` : '/img/addPic.jpg'}
                size="xlarge">
            </Avatar>
        </div>
    </>)
}
export default ProfileComponent