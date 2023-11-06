import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetGanders, createGanders } from '../../../stores/features/ganderSlice';

const CreateGander = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {ganders, isGandersSuccess, messageGanders} = useSelector(
        (state : any) => state.ganderReducer
    )

    useEffect(()=>{
        if(isGandersSuccess && isGandersSuccess){
            navigate('/gander');
            dispatch(resetGanders());
        }
    },[isGandersSuccess, isGandersSuccess])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createGanders({
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
                linkBack={'/gander'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateGander