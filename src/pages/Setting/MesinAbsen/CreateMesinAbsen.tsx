import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMesinAbsens, resetMesinAbsens } from '../../../stores/features/mesinAbsensSlice';
import { useParams } from 'react-router-dom';
import FormCreateMesinAbsen from '../../../components/Form/Attribute/FormCreateMesinAbsen';

const CreateMesinAbsen = () => {
    const [name, setName] = useState('');
    const [ipMesin, setIpMesin] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {mesinAbsens, isMesinAbsensSuccess, messageMesinAbsens, isMesinAbsensLoading} = useSelector(
        (state : any) => state.mesinAbsensReducer
    );
    
    useEffect(()=>{
        if(isMesinAbsensSuccess && messageMesinAbsens){
            navigate('/mesinAbsen');
            dispatch(resetMesinAbsens());
        }
    },[isMesinAbsensSuccess, messageMesinAbsens])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createMesinAbsens({
            name, ipMesin, code, isActive
        }));
    }

  return (
    <div>
        <FormCreateMesinAbsen
            name={name}
            setName={setName}
            ipMesin={ipMesin}
            setIpMesin={setIpMesin}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/mesinAbsen'}
            createDataSetting={createDataSetting}
        />
    </div>
  )
}

export default CreateMesinAbsen