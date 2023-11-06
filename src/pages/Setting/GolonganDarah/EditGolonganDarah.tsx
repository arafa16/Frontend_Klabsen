import React, {useEffect, useState} from 'react'
import FormEdit from '../../../components/Form/Attribute/FormEdit'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getGolonganDarahsById, resetGolonganDarahs, updateGolonganDarahs, deleteGolonganDarahs } from '../../../stores/features/golonganDarahSlice';

const EditGolonganDarah = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {golonganDarahs, isGolonganDarahsSuccess, messageGolonganDarahs} = useSelector(
        (state : any) => state.golonganDarahsReducer
    )

    useEffect(()=>{
        dispatch(getGolonganDarahsById({uuid}));
    },[]);

    useEffect(()=>{
        if(isGolonganDarahsSuccess && golonganDarahs){
            setName(golonganDarahs && golonganDarahs.name);
            setCode(golonganDarahs && golonganDarahs.code);
            setIsActive(golonganDarahs && golonganDarahs.isActive ? '1' : '0');
            dispatch(resetGolonganDarahs());
        }
    },[golonganDarahs, isGolonganDarahsSuccess]);

    useEffect(()=>{
        if(isGolonganDarahsSuccess && messageGolonganDarahs){
            navigate('/golonganDarah');
            dispatch(resetGolonganDarahs());
        }
    },[isGolonganDarahsSuccess, messageGolonganDarahs])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateGolonganDarahs({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteGolonganDarahs({
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
                linkBack={'/golonganDarah'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditGolonganDarah