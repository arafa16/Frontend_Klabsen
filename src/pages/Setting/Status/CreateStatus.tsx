import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetStatus, createStatus } from '../../../stores/features/statusSlice';

const CreateStatus = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isStatusSuccess, messageStatus} = useSelector(
        (state : any) => state.statusReducer
    )

    useEffect(()=>{
        if(isStatusSuccess && messageStatus){
            navigate('/status');
            dispatch(resetStatus());
        }
    },[isStatusSuccess, messageStatus])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createStatus({
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
                linkBack={'/status'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateStatus