import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getStatusInoutById, resetStatusInout, updateStatusInout, deleteStatusInout } from '../../../stores/features/statusInoutSlice';
import FormEdit from '../../../components/Form/Attribute/FormEdit';

const EditStatusInout = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {statusInout, isStatusInoutSuccess, messageStatusInout} = useSelector(
        (state : any) => state.statusInoutReducer
    )

    useEffect(()=>{
        dispatch(getStatusInoutById({uuid}));
    },[]);

    useEffect(()=>{
        if(isStatusInoutSuccess && statusInout){
            setName(statusInout && statusInout.name);
            setCode(statusInout && statusInout.code);
            setIsActive(statusInout && statusInout.isActive ? '1' : '0');
            dispatch(resetStatusInout());
        }
    },[statusInout, isStatusInoutSuccess]);

    useEffect(()=>{
        if(isStatusInoutSuccess && messageStatusInout){
            navigate('/statusInout');
            dispatch(resetStatusInout());
        }
    },[isStatusInoutSuccess, messageStatusInout])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateStatusInout({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteStatusInout({
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
                linkBack={'/statusInout'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditStatusInout