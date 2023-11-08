import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormEdit from '../../../components/Form/Attribute/FormEdit';
import { getTipePendapatansById, resetTipePendapatans, updateTipePendapatans, deleteTipePendapatans } from '../../../stores/features/tipePendapatanSlice';

const EditTipePendapatan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {tipePendapatans, isTipePendapatansSuccess, messageTipePendapatans} = useSelector(
        (state : any) => state.tipePendapatansReducer
    )

    useEffect(()=>{
        dispatch(getTipePendapatansById({uuid}));
    },[]);

    useEffect(()=>{
        if(isTipePendapatansSuccess && tipePendapatans){
            setName(tipePendapatans && tipePendapatans.name);
            setCode(tipePendapatans && tipePendapatans.code);
            setIsActive(tipePendapatans && tipePendapatans.isActive ? '1' : '0');
            dispatch(resetTipePendapatans());
        }
    },[tipePendapatans, isTipePendapatansSuccess]);

    useEffect(()=>{
        if(isTipePendapatansSuccess && messageTipePendapatans){
            navigate('/tipePendapatan');
            dispatch(resetTipePendapatans());
        }
    },[isTipePendapatansSuccess, messageTipePendapatans])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateTipePendapatans({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteTipePendapatans({
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
                linkBack={'/tipePendapatan'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditTipePendapatan