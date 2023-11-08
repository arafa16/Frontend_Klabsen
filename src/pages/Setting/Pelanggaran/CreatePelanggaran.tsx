import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPelanggarans, resetPelanggarans } from '../../../stores/features/pelanggaransSlice';
import { useParams } from 'react-router-dom';
import FormCreate from '../../../components/Form/Attribute/FormCreate';

const CreatePelanggaran = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isPelanggaransSuccess, messagePelanggarans} = useSelector(
        (state : any) => state.pelanggaransReducer
      );
    
    useEffect(()=>{
        if(isPelanggaransSuccess && messagePelanggarans){
            navigate('/pelanggaran');
            dispatch(resetPelanggarans());
        }
    },[isPelanggaransSuccess, messagePelanggarans])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createPelanggarans({
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
            linkBack={'/pelanggaran'}
            createDataSetting={createDataSetting}
        />
    </div>
  )
}

export default CreatePelanggaran