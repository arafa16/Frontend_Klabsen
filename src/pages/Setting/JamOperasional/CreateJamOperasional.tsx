import React, {useEffect, useState} from 'react'
import FormCreateJamOperasional from '../../../components/Form/Attribute/FormCreateJamOperasional';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetJamOperasionals, createJamOperasionals } from '../../../stores/features/jamOperasionalsSlice';
import { resetJamOperasionalGroups, createJamOperasionalGroups, getJamOperasionalGroups } from '../../../stores/features/jamOperasionalGroupsSlice';

const CreateJamOperasional = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [jamMasuk, setJamMasuk] = useState('');
    const [jamPulang, setJamPulang] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [jamOperasionalGroupId, setJamOperasionalGroupId] = useState('');
    const [jamOperasionalGroupSelect, setJamOperasionalGroupSelect] = useState([]);
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jamOperasionals, isJamOperasionalsSuccess, messageJamOperasionals} = useSelector(
        (state : any) => state.jamOperasionalsReducer
    )

    const {jamOperasionalGroups, isJamOperasionalGroupsSuccess, messageJamOperasionalGroups} = useSelector(
        (state : any) => state.jamOperasionalGroupsReducer
    )

    useEffect(()=>{
        if(jamOperasionalGroups && isJamOperasionalGroupsSuccess){
            setJamOperasionalGroupSelect(jamOperasionalGroups);
        }
    },[jamOperasionalGroups, isJamOperasionalGroupsSuccess])

    useEffect(()=>{
        dispatch(getJamOperasionalGroups());
    },[])

    useEffect(()=>{
        if(isJamOperasionalsSuccess && messageJamOperasionals){
            navigate('/jamOperasional');
            dispatch(resetJamOperasionals());
        }
    },[isJamOperasionalsSuccess, messageJamOperasionals])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createJamOperasionals({
            uuid, name, jamMasuk, jamPulang, keterangan, jamOperasionalGroupId, code, isActive
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
                jamOperasionalGroupId={jamOperasionalGroupId}
                setJamOperasionalGroupId={setJamOperasionalGroupId}
                jamOperasionalGroupSelect={jamOperasionalGroupSelect}
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