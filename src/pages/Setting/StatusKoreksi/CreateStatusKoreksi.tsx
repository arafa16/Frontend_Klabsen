import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetStatusKoreksi, createStatusKoreksi } from '../../../stores/features/statusKoreksiSlice';

const CreateStatusKoreksi = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isStatusKoreksiSuccess, messageStatusKoreksi} = useSelector(
        (state : any) => state.statusKoreksiReducer
    )

    useEffect(()=>{
        if(isStatusKoreksiSuccess && messageStatusKoreksi){
            navigate('/statusKoreksi');
            dispatch(resetStatusKoreksi());
        }
    },[isStatusKoreksiSuccess, messageStatusKoreksi])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createStatusKoreksi({
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
                linkBack={'/statusKoreksi'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateStatusKoreksi