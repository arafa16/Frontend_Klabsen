import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getJamOperasionalsById, resetJamOperasionals, updateJamOperasionals, deleteJamOperasionals, getJamOperasionals } from '../../../stores/features/jamOperasionalsSlice';
import FormEditJamOperasional from '../../../components/Form/Attribute/FormEditJamOperasional';
import { getTipeAbsens, resetTipeAbsens } from '../../../stores/features/tipeAbsenSlice';

const EditJamOperasional = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [jamMasuk, setJamMasuk] = useState('');
    const [jamPulang, setJamPulang] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');
    // const [tipeAbsenId, setTipeAbsenId] = useState('');
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
        if(tipeAbsens && isTipeAbsensSuccess){
            setTipeAbsenSelect(tipeAbsens)
        }
    },[tipeAbsens, isTipeAbsensSuccess]);

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
            setCode(jamOperasionals && jamOperasionals.code);
            // setTipeAbsenId(jamOperasionals && jamOperasionals.tipeAbsenId)
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

    useEffect(()=>{
        if(tipeAbsens && isTipeAbsensSuccess){
            setTipeAbsenSelect(tipeAbsens)
        }
    },[tipeAbsens, isTipeAbsensSuccess]);

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateJamOperasionals({
            uuid, name, jamMasuk, jamPulang, keterangan, code, isActive
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
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/jamOperasional'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
                tipeAbsenSelect={tipeAbsenSelect}
                // tipeAbsenId={tipeAbsenId}
                // setTipeAbsenId={setTipeAbsenId}
            />
        </div>
    )
}

export default EditJamOperasional