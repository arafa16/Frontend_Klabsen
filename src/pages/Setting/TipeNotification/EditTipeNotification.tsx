import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormEdit from '../../../components/Form/Attribute/FormEdit';
import { getTipeNotificationsById, resetTipeNotifications, updateTipeNotifications, deleteTipeNotifications } from '../../../stores/features/tipeNotificationSlice';

const EditTipeNotification = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {tipeNotifications, isTipeNotificationsSuccess, messageTipeNotifications} = useSelector(
        (state : any) => state.tipeNotificationsReducer
    )

    useEffect(()=>{
        dispatch(getTipeNotificationsById({uuid}));
    },[]);

    useEffect(()=>{
        if(isTipeNotificationsSuccess && tipeNotifications){
            setName(tipeNotifications && tipeNotifications.name);
            setCode(tipeNotifications && tipeNotifications.code);
            setIsActive(tipeNotifications && tipeNotifications.isActive ? '1' : '0');
            dispatch(resetTipeNotifications());
        }
    },[tipeNotifications, isTipeNotificationsSuccess]);

    useEffect(()=>{
        if(isTipeNotificationsSuccess && messageTipeNotifications){
            navigate('/tipeNotification');
            dispatch(resetTipeNotifications());
        }
    },[isTipeNotificationsSuccess, messageTipeNotifications])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateTipeNotifications({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteTipeNotifications({
            uuid
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
                linkBack={'/tipeNotification'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditTipeNotification