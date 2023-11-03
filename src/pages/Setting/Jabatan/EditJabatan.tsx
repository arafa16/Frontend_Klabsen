import React, {useEffect, useState} from 'react'
import FormEdit from '../../../components/Form/Attribute/FormEdit'
import { useDispatch, useSelector} from 'react-redux';
import { getJabatansById, resetJabatans, updateJabatans, deleteJabatans } from '../../../stores/features/jabatansSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditJabatan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jabatans, isJabatansSuccess, messageJabatans} = useSelector(
        (state : any) => state.jabatansReducer
    )

    useEffect(()=>{
        dispatch(getJabatansById({uuid}));
    },[]);

    useEffect(()=>{
        if(isJabatansSuccess && jabatans){
            setName(jabatans && jabatans.name);
            setCode(jabatans && jabatans.code);
            setIsActive(jabatans && jabatans.isActive ? '1' : '0');
            dispatch(resetJabatans());
        }
    },[jabatans, isJabatansSuccess]);

    useEffect(()=>{
        if(isJabatansSuccess && messageJabatans){
            navigate('/jabatan');
            dispatch(resetJabatans());
        }
    },[isJabatansSuccess, messageJabatans])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateJabatans({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteJabatans({
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
                linkBack={'/jabatan'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditJabatan