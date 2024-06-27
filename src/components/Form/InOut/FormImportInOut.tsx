import React, {useEffect, useState, useRef} from 'react'
import { FormInput, FormLabel } from '../../../base-components/Form'
import Button from '../../../base-components/Button'
import axios from 'axios';

const FormImportInOut = (props:any) => {
    const {reloadInOut} = props;

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

    const submitInOut = async(e : any) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append('file', data);

            const response :any = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/dataInOut/import`, formData);
            handleReset();
            setData([]);
            reloadInOut();
            console.log(response.data.msg , 'response');
            alert(response.data.msg);
        } catch (error : any) {
            console.log({error});
        }
    }

    return (
        <div>
            <form onSubmit={submitInOut}>
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

export default FormImportInOut