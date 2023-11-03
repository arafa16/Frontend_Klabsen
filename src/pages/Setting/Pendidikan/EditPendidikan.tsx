import React, {useEffect, useState}  from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePendidikans, deletePendidikans, resetPendidikans, getPendidikansById } from '../../../stores/features/pendidikansSlice';
import FormEdit from '../../../components/Form/Attribute/FormEdit';

const EditPendidikan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {pendidikans, isPendidikansSuccess, isPendidikansError, messagePendidikans} = useSelector(
        (state : any) => state.pendidikansReducer
    );

    useEffect(()=>{
        dispatch(getPendidikansById({uuid}));
    },[]);

    useEffect(()=>{
        if(isPendidikansSuccess && pendidikans){
            setName(pendidikans && pendidikans.name);
            setCode(pendidikans && pendidikans.code);
            setIsActive(pendidikans && pendidikans.isActive ? '1' : '0');
            dispatch(resetPendidikans());
        }
    },[pendidikans, isPendidikansSuccess]);

    useEffect(()=>{
        if(isPendidikansSuccess && messagePendidikans){
            navigate('/pendidikan');
            dispatch(resetPendidikans());
        }
    },[isPendidikansSuccess, messagePendidikans]);

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updatePendidikans({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deletePendidikans({
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
            linkBack={'/pendidikan'}
            changeDataSetting={changeDataSetting}
            deleteDataSetting={deleteDataSetting}
        />
    </div>
  )
}

export default EditPendidikan