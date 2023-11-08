import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getStatusKoreksiById, resetStatusKoreksi, updateStatusKoreksi, deleteStatusKoreksi } from '../../../stores/features/statusKoreksiSlice';
import FormEdit from '../../../components/Form/Attribute/FormEdit';

const EditStatusKoreksi = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {statusKoreksi, isStatusKoreksiSuccess, messageStatusKoreksi} = useSelector(
        (state : any) => state.statusKoreksiReducer
    )

    useEffect(()=>{
        dispatch(getStatusKoreksiById({uuid}));
    },[]);

    useEffect(()=>{
        if(isStatusKoreksiSuccess && statusKoreksi){
            setName(statusKoreksi && statusKoreksi.name);
            setCode(statusKoreksi && statusKoreksi.code);
            setIsActive(statusKoreksi && statusKoreksi.isActive ? '1' : '0');
            dispatch(resetStatusKoreksi());
        }
    },[statusKoreksi, isStatusKoreksiSuccess]);

    useEffect(()=>{
        if(isStatusKoreksiSuccess && messageStatusKoreksi){
            navigate('/statusKoreksi');
            dispatch(resetStatusKoreksi());
        }
    },[isStatusKoreksiSuccess, messageStatusKoreksi])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateStatusKoreksi({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteStatusKoreksi({
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
                linkBack={'/statusKoreksi'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditStatusKoreksi