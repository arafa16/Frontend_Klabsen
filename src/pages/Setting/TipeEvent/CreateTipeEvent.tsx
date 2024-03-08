import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createTipeEvents, resetTipeEvents } from '../../../stores/features/tipeEventSlice';

const CreateTipeEvent = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {tipeEvents, messageTipeEvents, isTipeEventsSuccess} = useSelector(
        (state : any) => state.tipeEventsReducer
    )

    useEffect(()=>{
        if(isTipeEventsSuccess && messageTipeEvents){
            navigate('/tipeEvent');
            dispatch(resetTipeEvents());
        }
    },[isTipeEventsSuccess, messageTipeEvents])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createTipeEvents({
            name, code, isActive
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
                linkBack={'/tipeEvent'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateTipeEvent