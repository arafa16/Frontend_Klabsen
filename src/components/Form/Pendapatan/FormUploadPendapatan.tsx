import React, { useState } from 'react'
import { FormInput, FormLabel } from '../../../base-components/Form'
import Button from '../../../base-components/Button'
import axios from 'axios';

const FormUploadPendapatan = (props : any) => {
    const {getPendapatans, fromUpload, NotificationRegister, setMsg, setFormUpload} = props;
    const [data, setData] = useState<any>([]);

    console.log(data, 'data');

    const submitPendapatan = async(e : any) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append('file', data);

            await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/pendapatans/import`, formData);
            // setViewModal(false);
            getPendapatans();
            setData([]);
            NotificationRegister.current?.showToast();
            setMsg('Upload Success');
            setFormUpload(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={`box ${fromUpload ? '' : 'hidden'}`}>
            <form onSubmit={submitPendapatan}>
                <div className="flex w-full gap-4 justify-center p-4">
                    <div className="w-3/4">
                        <FormInput
                            formInputSize="sm"
                            id="file"
                            type="file"
                            name='file'
                            className='w-full'
                            value={data && data[0]}
                            onChange={(e : any)=>setData(e.target.files[0])}
                        />
                    </div>
                    <div className="w-1/4">
                        <Button 
                            variant="primary" 
                            className="w-full"
                            >
                            Upload
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormUploadPendapatan