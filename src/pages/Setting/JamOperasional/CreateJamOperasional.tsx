import React, {useEffect, useState} from 'react'
import FormCreateJamOperasional from '../../../components/Form/Attribute/FormCreateJamOperasional';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetJamOperasionals, createJamOperasionals } from '../../../stores/features/jamOperasionalsSlice';
import { getTipeAbsens, resetTipeAbsens } from '../../../stores/features/tipeAbsenSlice';

const CreateJamOperasional = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [jamMasuk, setJamMasuk] = useState('');
    const [jamPulang, setJamPulang] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');
    const [tipeAbsenId, setTipeAbsenId] = useState('');
    const [tipeAbsenSelect, setTipeAbsenSelect] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jamOperasionals, isJamOperasionalsSuccess, messageJamOperasionals} = useSelector(
        (state : any) => state.jamOperasionalsReducer
    )

    const {tipeAbsens, isTipeAbsensSuccess} = useSelector(
        (state : any) => state.tipeAbsensReducer
    )

    useEffect(()=>{
        if(isJamOperasionalsSuccess && messageJamOperasionals){
            navigate('/jamOperasional');
            dispatch(resetJamOperasionals());
        }
    },[isJamOperasionalsSuccess, messageJamOperasionals])

    useEffect(()=>{
        if(tipeAbsens && isTipeAbsensSuccess){
            setTipeAbsenSelect(tipeAbsens)
        }
    },[tipeAbsens, isTipeAbsensSuccess]);

    useEffect(()=>{
        dispatch(getTipeAbsens());
    },[]);

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createJamOperasionals({
            uuid, name, jamMasuk, jamPulang, keterangan, code, tipeAbsenId, isActive
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
                tipeAbsenSelect={tipeAbsenSelect}
                tipeAbsenId={tipeAbsenId}
                setTipeAbsenId={setTipeAbsenId}
            />
        </div>
    </div>
  )
}

export default CreateJamOperasional