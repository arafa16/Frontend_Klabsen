import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetTipeAbsens, createTipeAbsens } from '../../../stores/features/tipeAbsenSlice';

const CreateTipeAbsen = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
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
                linkBack={'/tipeAbsen'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateTipeAbsen