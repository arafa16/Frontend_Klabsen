import React, {useEffect, useState, useRef} from 'react'
import { FormInput, FormLabel } from '../../../base-components/Form'
import Button from '../../../base-components/Button'
import axios from 'axios';

const FormImportUser = (props:any) => {
    const {showForm, setShowForm, reloadData} = props;

    const [data, setData] = useState<any>([]);

    console.log(data, 'data');

    // Ref object to reference the input element
    const inputFile = useRef<any>(null);
 
    // Function to reset the input element
    const handleReset = () => {
        if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    };

    const submitUser = async(e : any) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append('file', data);

            await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/users/import`, formData);
            // setViewModal(false);
            setShowForm(false);
            handleReset();
            setData([]);
            reloadData();
        } catch (error : any) {
            console.log(error , error.response.status, error.response.data.msg, 'error');
            alert(error.response.status + ' ' + error.response.data.msg);
        }
    }

    return (
        <div className={`box ${!showForm ? 'hidden' : ''}`}>
            <form onSubmit={submitUser}>
                <div className="flex w-full gap-4 justify-center p-4">
                    <div className="w-3/4">
                        <FormInput
                            formInputSize="sm"
                            id="file"
                            type="file"
                            name='file'
                            className='w-full'
                            value={data && data[0]}
                            ref={inputFile}
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

export default FormImportUser