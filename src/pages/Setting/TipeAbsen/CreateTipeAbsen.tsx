import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetTipeAbsens, createTipeAbsens } from '../../../stores/features/tipeAbsenSlice';
import FormCreateTipeAbsen from '../../../components/Form/TipeAbsen/FormCreateTipeAbsen';

const CreateTipeAbsen = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isSelect, setIsSelect] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isTipeAbsensSuccess, messageTipeAbsens} = useSelector(
        (state : any) => state.tipeAbsensReducer
    )

    useEffect(()=>{
        if(isTipeAbsensSuccess && messageTipeAbsens){
            navigate('/tipeAbsen');
            dispatch(resetTipeAbsens());
        }
    },[isTipeAbsensSuccess, messageTipeAbsens])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createTipeAbsens({
            uuid, name, code, isSelect, isActive
        }));
    }

    return (
        <div>
            <FormCreateTipeAbsen
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isSelect={isSelect}
                setIsSelect={setIsSelect}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/tipeAbsen'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateTipeAbsen