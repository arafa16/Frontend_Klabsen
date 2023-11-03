import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPendidikans, resetPendidikans } from '../../../stores/features/pendidikansSlice';
import { useParams } from 'react-router-dom';
import FormCreate from '../../../components/Form/Attribute/FormCreate';

const CreatePendidikan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isPendidikansSuccess, messagePendidikans} = useSelector(
        (state : any) => state.pendidikansReducer
      );
    
    useEffect(()=>{
        if(isPendidikansSuccess && messagePendidikans){
            navigate('/pendidikan');
            dispatch(resetPendidikans());
        }
    },[isPendidikansSuccess, messagePendidikans])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createPendidikans({
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
            linkBack={'/pendidikan'}
            createDataSetting={createDataSetting}
        />
    </div>
  )
}

export default CreatePendidikan