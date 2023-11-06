import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetStatusPerkawinans, createStatusPerkawinans } from '../../../stores/features/statusPerkawinansSlice';

const CreateStatusPerkawinan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {statusPerkawinans, isStatusPerkawinansSuccess, messageStatusPerkawinans} = useSelector(
        (state : any) => state.statusPerkawinansReducer
    )

    useEffect(()=>{
        if(isStatusPerkawinansSuccess && messageStatusPerkawinans){
            navigate('/statusPerkawinan');
            dispatch(resetStatusPerkawinans());
        }
    },[isStatusPerkawinansSuccess, messageStatusPerkawinans])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createStatusPerkawinans({
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
                linkBack={'/statusPerkawinan'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateStatusPerkawinan