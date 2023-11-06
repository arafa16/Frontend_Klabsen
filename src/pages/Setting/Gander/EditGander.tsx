import React, {useEffect, useState} from 'react'
import FormEdit from '../../../components/Form/Attribute/FormEdit'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getGandersById, resetGanders, updateGanders, deleteGanders } from '../../../stores/features/ganderSlice';
const EditGander = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {ganders, isGandersSuccess, messageGanders} = useSelector(
        (state : any) => state.ganderReducer
    )

    useEffect(()=>{
        dispatch(getGandersById({uuid}));
    },[]);

    useEffect(()=>{
        if(isGandersSuccess && ganders){
            setName(ganders && ganders.name);
            setCode(ganders && ganders.code);
            setIsActive(ganders && ganders.isActive ? '1' : '0');
            dispatch(resetGanders());
        }
    },[ganders, isGandersSuccess]);

    useEffect(()=>{
        if(isGandersSuccess && messageGanders){
            navigate('/gander');
            dispatch(resetGanders());
        }
    },[isGandersSuccess, messageGanders])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateGanders({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteGanders({
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
                linkBack={'/gander'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditGander