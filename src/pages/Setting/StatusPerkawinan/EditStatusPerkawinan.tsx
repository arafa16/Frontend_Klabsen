import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getStatusPerkawinansById, resetStatusPerkawinans, updateStatusPerkawinans, deleteStatusPerkawinans } from '../../../stores/features/statusPerkawinansSlice';
import FormEdit from '../../../components/Form/Attribute/FormEdit';

const EditStatusPerkawinan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {statusPerkawinans, isStatusPerkawinansSuccess, messageStatusPerkawinans} = useSelector(
        (state : any) => state.statusPerkawinansReducer
    )

    useEffect(()=>{
        dispatch(getStatusPerkawinansById({uuid}));
    },[]);

    useEffect(()=>{
        if(isStatusPerkawinansSuccess && statusPerkawinans){
            setName(statusPerkawinans && statusPerkawinans.name);
            setCode(statusPerkawinans && statusPerkawinans.code);
            setIsActive(statusPerkawinans && statusPerkawinans.isActive ? '1' : '0');
            dispatch(resetStatusPerkawinans());
        }
    },[statusPerkawinans, isStatusPerkawinansSuccess]);

    useEffect(()=>{
        if(isStatusPerkawinansSuccess && messageStatusPerkawinans){
            navigate('/statusPerkawinan');
            dispatch(resetStatusPerkawinans());
        }
    },[isStatusPerkawinansSuccess, messageStatusPerkawinans])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateStatusPerkawinans({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteStatusPerkawinans({
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
                linkBack={'/statusPerkawinan'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditStatusPerkawinan