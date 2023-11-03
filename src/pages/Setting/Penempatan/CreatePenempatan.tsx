import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { resetPenempatans, createPenempatans } from '../../../stores/features/penempatansSlice';
import { useParams, useNavigate } from 'react-router-dom';

const CreatePenempatan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {penempatans, isPenempatansSuccess, isPenempatansError, messagePenempatans} = useSelector(
        (state : any) => state.penempatansReducer
    )

    useEffect(()=>{
        if(isPenempatansSuccess && messagePenempatans){
            navigate('/penempatan');
            dispatch(resetPenempatans());
        }
    },[isPenempatansSuccess, messagePenempatans])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createPenempatans({
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
                linkBack={'/penempatan'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreatePenempatan