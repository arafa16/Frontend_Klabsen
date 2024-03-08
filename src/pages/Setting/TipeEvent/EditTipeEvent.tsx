import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormEdit from '../../../components/Form/Attribute/FormEdit';
import { updateTipeEvents, getTipeEventsById, deleteTipeEvents, resetTipeEvents } from '../../../stores/features/tipeEventSlice';

const EditTipeEvent = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {tipeEvents, messageTipeEvents, isTipeEventsSuccess} = useSelector(
        (state : any) => state.tipeEventsReducer
    )

    

    useEffect(()=>{
        dispatch(getTipeEventsById({id}));
    },[]);

    useEffect(()=>{
        console.log(tipeEvents, 'tipe event');
        if(isTipeEventsSuccess && tipeEvents){
            setName(tipeEvents && tipeEvents.name);
            setCode(tipeEvents && tipeEvents.code);
            setIsActive(tipeEvents && tipeEvents.isActive ? '1' : '0');
            dispatch(resetTipeEvents());
        }
    },[tipeEvents, isTipeEventsSuccess]);

    useEffect(()=>{
        if(isTipeEventsSuccess && messageTipeEvents){
            navigate('/tipeEvent');
            dispatch(resetTipeEvents());
        }
    },[isTipeEventsSuccess, messageTipeEvents])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateTipeEvents({
            id, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteTipeEvents({
            id
        }));
    }

    return (
        <div>
            <FormEdit
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/tipeEvent'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditTipeEvent