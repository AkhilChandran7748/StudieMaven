import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Splitter, SplitterPanel } from "primereact/splitter";
import React, { useRef, useState } from "react";
const ProfileComponent = ({ profileUrl = null }) => {
    let fileRef = useRef()
    const [visible, setVisible] = useState(false)
    const [file, setFile] = useState(false)
    const [preview, setPreview] = useState(null)
    const handleUpload = (files) => {
        let file = fileRef.current.files[0];
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

    }
    const FooterContent = () => (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Splitter style={{ height: '80px' }} >
                <SplitterPanel>
                    <input type="file"
                        accept="image/x-png,image/gif,image/jpeg"
                        name="dp"
                        ref={fileRef}
                        onChange={(e) => {
                            handleUpload(e.target)
                            setFile(e.target.files)
                        }} />
                </SplitterPanel>
                <SplitterPanel>
                    <Avatar onClick={() => setVisible(true)} className="p-overlay-badge"
                        image={preview ? preview : '/img/addPic.jpg'}
                        size="xlarge">
                    </Avatar>
                </SplitterPanel>
            </Splitter>
            <Button label="Upload" className="small-button margin-r-10" severity="success" />
            <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    return (<>
        <div>
            <Dialog header="Update Profile Picture" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)} >
                <FooterContent />
            </Dialog>
            <Avatar onClick={() => setVisible(true)} className="p-overlay-badge"
                image={profileUrl ? profileUrl : '/img/addPic.jpg'}
                size="xlarge">
            </Avatar>
        </div>
    </>)
}
export default ProfileComponent