import React, {useEffect, useState} from 'react'
import FormCreateJamOperasional from '../../../components/Form/Attribute/FormCreateJamOperasional';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getJamOperasionalsTable, resetJamOperasionals, createJamOperasionals } from '../../../stores/features/jamOperasionalsSlice';

const CreateJamOperasional = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [jamMasuk, setJamMasuk] = useState('');
    const [jamPulang, setJamPulang] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jamOperasionals, isJamOperasionalsSuccess, messageJamOperasionals} = useSelector(
        (state : any) => state.jamOperasionalsReducer
    )

    useEffect(()=>{
        if(isJamOperasionalsSuccess && messageJamOperasionals){
            navigate('/jamOperasional');
            dispatch(resetJamOperasionals());
        }
    },[isJamOperasionalsSuccess, messageJamOperasionals])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createJamOperasionals({
            uuid, name, jamMasuk, jamPulang, keterangan, code, isActive
        }));
    }

  return (
    <div className='w-full'>
        <div>
            <FormCreateJamOperasional
                name={name}
                setName={setName}
                jamMasuk={jamMasuk}
                setJamMasuk={setJamMasuk}
                jamPulang={jamPulang}
                setJamPulang={setJamPulang}
                keterangan={keterangan}
                setKeterangan={setKeterangan}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/jamOperasional'}
                createDataSetting={createDataSetting}
            />
        </div>
    </div>
  )
}

export default CreateJamOperasional