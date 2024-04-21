import React, {useEffect, useState}  from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getMesinAbsensById, updateMesinAbsens, deleteMesinAbsens, resetMesinAbsens } from '../../../stores/features/mesinAbsensSlice';
import FormEditMesinAbsen from '../../../components/Form/Attribute/FormEditMesinAbsen';

const EditMesinAbsen = () => {
    const {id} = useParams();
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
        dispatch(getMesinAbsensById({id}));
    },[]);

    useEffect(()=>{
        if(isMesinAbsensSuccess && mesinAbsens){
            setName(mesinAbsens && mesinAbsens.name);
            setIpMesin(mesinAbsens && mesinAbsens.ipMesin);
            setCode(mesinAbsens && mesinAbsens.code);
            setIsActive(mesinAbsens && mesinAbsens.isActive ? '1' : '0');
            dispatch(resetMesinAbsens());
        }
    },[mesinAbsens, isMesinAbsensSuccess]);

    useEffect(()=>{
        if(isMesinAbsensSuccess && messageMesinAbsens){
            navigate('/mesinAbsen');
            dispatch(resetMesinAbsens());
        }
    },[isMesinAbsensSuccess, messageMesinAbsens]);

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateMesinAbsens({
            id, name, ipMesin, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteMesinAbsens({
            id
        }));
    }

  return (
    <div>
        <FormEditMesinAbsen
            name={name}
            setName={setName}
            ipMesin={ipMesin}
            setIpMesin={setIpMesin}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/mesinAbsen'}
            changeDataSetting={changeDataSetting}
            deleteDataSetting={deleteDataSetting}
        />
    </div>
  )
}

export default EditMesinAbsen