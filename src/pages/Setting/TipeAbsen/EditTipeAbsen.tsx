import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormEdit from '../../../components/Form/Attribute/FormEdit';
import { getTipeAbsensById, resetTipeAbsens, updateTipeAbsens, deleteTipeAbsens } from '../../../stores/features/tipeAbsenSlice';
import FormEditTipeAbsen from '../../../components/Form/TipeAbsen/FormEditTipeAbsen';

const EditTipeAbsen = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isSelect, setIsSelect] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {tipeAbsens, isTipeAbsensSuccess, messageTipeAbsens} = useSelector(
        (state : any) => state.tipeAbsensReducer
    )

    useEffect(()=>{
        dispatch(getTipeAbsensById({uuid}));
    },[]);

    useEffect(()=>{
        if(isTipeAbsensSuccess && tipeAbsens){
            setName(tipeAbsens && tipeAbsens.name);
            setCode(tipeAbsens && tipeAbsens.code);
            setIsSelect(tipeAbsens && tipeAbsens.isSelect ? '1' : '0');
            setIsActive(tipeAbsens && tipeAbsens.isActive ? '1' : '0');
            dispatch(resetTipeAbsens());
        }
    },[tipeAbsens, isTipeAbsensSuccess]);

    useEffect(()=>{
        if(isTipeAbsensSuccess && messageTipeAbsens){
            navigate('/tipeAbsen');
            dispatch(resetTipeAbsens());
        }
    },[isTipeAbsensSuccess, messageTipeAbsens])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateTipeAbsens({
            uuid, name, code, isSelect, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteTipeAbsens({
            uuid
        }));
    }

    return (
        <div>
            <FormEditTipeAbsen
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isSelect={isSelect}
                setIsSelect={setIsSelect}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/tipeAbsen'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditTipeAbsen