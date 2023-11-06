import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createBanks, resetBanks } from '../../../stores/features/banksSlice';

const CreateBank = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {banks, isBanksSuccess, messageBanks} = useSelector(
        (state : any) => state.banksReducer
    )

    useEffect(()=>{
        if(isBanksSuccess && messageBanks){
            navigate('/bank');
            dispatch(resetBanks());
        }
    },[isBanksSuccess, messageBanks])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createBanks({
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
                linkBack={'/bank'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateBank