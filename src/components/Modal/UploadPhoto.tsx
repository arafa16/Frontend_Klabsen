import React, {useRef, useState} from 'react'
import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";
import { Dialog } from '../../base-components/Headless';
import Button from '../../base-components/Button';
import {FormInput } from '../../base-components/Form';
import LoadingIcon from '../../base-components/LoadingIcon';
import Dropzone, { DropzoneElement } from "../../base-components/Dropzone";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UploadPhoto = (props : any) => {
    const {showModal, setShowModal, getDataUser} = props;
    const {id} = useParams();
    const [data, setData] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [msg, setMsg] = useState('');

    // console.log(data, 'data uppload');

    const sendButtonRef = useRef(null);
    const NotificationUploadPhoto = useRef<NotificationElement>();

    const fileUpload = (e : any) => {
        const file = e.target.files[0];
        setUrlImage(URL.createObjectURL(file));
        setData(file);
    }

    const submitPhoto = async(e : any) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append('photo', data);

            const submit = await axios.patch(`http://localhost:5000/users/${id}/photo`, formData);

            getDataUser();
            setShowModal(false);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Notification
                getRef={(el) => {
                    NotificationUploadPhoto.current = el;
                }}
                options={{
                    duration: 3000,
                }}
                className="flex flex-col sm:flex-row"
                >
                <div className="font-medium normal-case">
                    {msg}
                </div>
            </Notification>
            {/* BEGIN: Modal Content */}
            <Dialog
                open={showModal}
                onClose={() => {
                    setShowModal(false);
                }}
                initialFocus={sendButtonRef}
            >
                <Dialog.Panel>
                    <Dialog.Title>
                        <h2 className="mr-auto text-base font-medium">
                        Upload Your Photo
                        </h2>
                    </Dialog.Title>
                    <form onSubmit={submitPhoto}>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-12">
                            <FormInput
                                id="modal-form-1"
                                type="file"
                                placeholder="file"
                                className='px-4 py-1'
                                onChange={fileUpload}
                            />
                            {/* <Dropzone
                                options={{
                                    method: 'patch',
                                    url: 'http://localhost:5000/users/c44ef4a1-b0c8-4675-9080-84906e3379a2/photo',
                                    thumbnailWidth: 150,
                                    maxFilesize: 0.5,
                                    headers: { "My-Awesome-Header": "header value" },
                                    paramName:'photo',
                                }}
                                className="dropzone"
                                >
                                <div className="text-lg font-medium">
                                    Drop files here or click to upload.
                                </div>
                            </Dropzone> */}
                            {/* <img src={data} /> */}
                            <div className={`${!urlImage ? 'hidden' : ''} mt-5 w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-md image-fit`}>
                                <img
                                alt="user image"
                                src={urlImage}
                                />
                            </div>
                        </div>
                    </Dialog.Description>
                    <Dialog.Footer>
                        <Button type='submit'>Upload Profile</Button>
                    </Dialog.Footer>
                    </form>
                </Dialog.Panel>
            </Dialog>
            {/* END: Modal Content */}
        </>
    )
}

export default UploadPhoto