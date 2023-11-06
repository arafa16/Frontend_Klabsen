import React, {useEffect, useState} from 'react'
import FormEdit from '../../../components/Form/Attribute/FormEdit'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetBanks, getBanksById, updateBanks, deleteBanks } from '../../../stores/features/banksSlice';

const EditBank = () => {
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
        dispatch(getBanksById({uuid}));
    },[]);

    useEffect(()=>{
        if(isBanksSuccess && banks){
            setName(banks && banks.name);
            setCode(banks && banks.code);
            setIsActive(banks && banks.isActive ? '1' : '0');
            dispatch(resetBanks());
        }
    },[banks, isBanksSuccess]);

    useEffect(()=>{
        if(isBanksSuccess && messageBanks){
            navigate('/bank');
            dispatch(resetBanks());
        }
    },[isBanksSuccess, messageBanks])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateBanks({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteBanks({
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
            linkBack={'/bank'}
            changeDataSetting={changeDataSetting}
            deleteDataSetting={deleteDataSetting}
        />
    </div>
  )
}

export default EditBank