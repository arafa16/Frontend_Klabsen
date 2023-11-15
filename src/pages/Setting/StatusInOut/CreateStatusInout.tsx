import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetStatusInout, createStatusInout } from '../../../stores/features/statusInoutSlice';

const CreateStatusInout = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isStatusInoutSuccess, messageStatusInout} = useSelector(
        (state : any) => state.statusInoutReducer
    )

    useEffect(()=>{
        if(isStatusInoutSuccess && messageStatusInout){
            navigate('/statusInout');
            dispatch(resetStatusInout());
        }
    },[isStatusInoutSuccess, messageStatusInout])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createStatusInout({
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
                linkBack={'/statusInout'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateStatusInout