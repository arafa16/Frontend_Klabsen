import React, {useEffect, useState} from 'react'
import FormEdit from '../../../components/Form/Attribute/FormEdit'
import { useDispatch, useSelector} from 'react-redux';
import { getPenempatansById, resetPenempatans, updatePenempatans, deletePenempatans} from '../../../stores/features/penempatansSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditPenempatan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {penempatans, isPenempatansSuccess, isPenempatansError, messagePenempatans} = useSelector(
        (state : any) => state.penempatansReducer
    )

    useEffect(()=>{
        dispatch(getPenempatansById({uuid}));
    },[]);

    useEffect(()=>{
        if(isPenempatansSuccess && penempatans){
            setName(penempatans && penempatans.name);
            setCode(penempatans && penempatans.code);
            setIsActive(penempatans && penempatans.isActive ? '1' : '0');
            dispatch(resetPenempatans());
        }
    },[penempatans, isPenempatansSuccess]);

    useEffect(()=>{
        if(isPenempatansSuccess && messagePenempatans){
            navigate('/penempatan');
            dispatch(resetPenempatans());
        }
    },[isPenempatansSuccess, messagePenempatans])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updatePenempatans({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deletePenempatans({
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
                linkBack={'/penempatan'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditPenempatan