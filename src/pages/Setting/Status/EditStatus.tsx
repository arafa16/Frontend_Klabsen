import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getStatusById, resetStatus, updateStatus, deleteStatus } from '../../../stores/features/statusSlice';
import FormEdit from '../../../components/Form/Attribute/FormEdit';

const EditStatus = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {status, isStatusSuccess, messageStatus} = useSelector(
        (state : any) => state.statusReducer
    )

    useEffect(()=>{
        dispatch(getStatusById({uuid}));
    },[]);

    useEffect(()=>{
        if(isStatusSuccess && status){
            setName(status && status.name);
            setCode(status && status.code);
            setIsActive(status && status.isActive ? '1' : '0');
            dispatch(resetStatus());
        }
    },[status, isStatusSuccess]);

    useEffect(()=>{
        if(isStatusSuccess && messageStatus){
            navigate('/status');
            dispatch(resetStatus());
        }
    },[isStatusSuccess, messageStatus])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateStatus({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteStatus({
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
                linkBack={'/status'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditStatus