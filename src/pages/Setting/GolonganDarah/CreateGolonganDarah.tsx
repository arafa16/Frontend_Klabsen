import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createGolonganDarahs, resetGolonganDarahs } from '../../../stores/features/golonganDarahSlice';

const CreateGolonganDarah = () => {
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
        if(isGolonganDarahsSuccess && messageGolonganDarahs){
            navigate('/golonganDarah');
            dispatch(resetGolonganDarahs());
        }
    },[isGolonganDarahsSuccess, messageGolonganDarahs])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createGolonganDarahs({
            uuid, name, code, isActive
        }));
    }

    return (
        <div>
            <FormCreate
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/golonganDarah'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateGolonganDarah