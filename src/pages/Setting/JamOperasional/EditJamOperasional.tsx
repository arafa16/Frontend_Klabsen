import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getJamOperasionalsById, resetJamOperasionals, updateJamOperasionals, deleteJamOperasionals, getJamOperasionals } from '../../../stores/features/jamOperasionalsSlice';
import FormEditJamOperasional from '../../../components/Form/Attribute/FormEditJamOperasional';
import { getTipeAbsens, resetTipeAbsens } from '../../../stores/features/tipeAbsenSlice';
import { resetJamOperasionalGroups, createJamOperasionalGroups, getJamOperasionalGroups } from '../../../stores/features/jamOperasionalGroupsSlice';

const EditJamOperasional = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [jamMasuk, setJamMasuk] = useState('');
    const [jamPulang, setJamPulang] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [jamOperasionalGroupId, setJamOperasionalGroupId] = useState('');
    const [jamOperasionalGroupSelect, setJamOperasionalGroupSelect] = useState([]);
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');
    // const [tipeAbsenId, setTipeAbsenId] = useState('');
    // const [tipeAbsenSelect, setTipeAbsenSelect] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jamOperasionals, isJamOperasionalsSuccess, messageJamOperasionals} = useSelector(
        (state : any) => state.jamOperasionalsReducer
    );

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

    console.log(jamOperasionals, 'jamOperasionals');

    useEffect(()=>{
        dispatch(getJamOperasionalsById({uuid}));
        dispatch(getTipeAbsens());
    },[]);

    useEffect(()=>{
        if(isJamOperasionalsSuccess && jamOperasionals){
            setName(jamOperasionals && jamOperasionals.name);
            setJamMasuk(jamOperasionals && jamOperasionals.jamMasuk);
            setJamPulang(jamOperasionals && jamOperasionals.jamPulang);
            setKeterangan(jamOperasionals && jamOperasionals.keterangan);
            setJamOperasionalGroupId(jamOperasionals.jam_operasional_group && jamOperasionals.jam_operasional_group.uuid);
            setCode(jamOperasionals && jamOperasionals.code);
            setIsActive(jamOperasionals && jamOperasionals.isActive ? '1' : '0');
            dispatch(resetJamOperasionals());
        }
    },[jamOperasionals, isJamOperasionalsSuccess]);

    useEffect(()=>{
        if(isJamOperasionalsSuccess && messageJamOperasionals){
            navigate('/jamOperasional');
            dispatch(resetJamOperasionals());
        }
    },[isJamOperasionalsSuccess, messageJamOperasionals])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateJamOperasionals({
            uuid, name, jamMasuk, jamPulang, keterangan, jamOperasionalGroupId, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteJamOperasionals({
            uuid
        }));
    }

    return (
        <div>
            <FormEditJamOperasional
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
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditJamOperasional