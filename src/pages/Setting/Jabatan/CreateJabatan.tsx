import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { resetJabatans, createJabatans } from '../../../stores/features/jabatansSlice';
import { useParams, useNavigate } from 'react-router-dom';

const CreateJabatan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jabatans, isJabatansSuccess, messageJabatans} = useSelector(
        (state : any) => state.jabatansReducer
    )

    useEffect(()=>{
        if(isJabatansSuccess && messageJabatans){
            navigate('/jabatan');
            dispatch(resetJabatans());
        }
    },[isJabatansSuccess, messageJabatans])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createJabatans({
            uuid, name, code, isActive
        }));
    }

    return (
        <div>
            <FormCreate
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/jabatan'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateJabatan