import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getJamOperasionalGroupsById, resetJamOperasionalGroups, updateJamOperasionalGroups, deleteJamOperasionalGroups, getJamOperasionalGroups } from '../../../stores/features/jamOperasionalGroupsSlice';
import { getTipeAbsens, resetTipeAbsens } from '../../../stores/features/tipeAbsenSlice';
import FormEditJamOperasionalGroup from '../../../components/Form/Attribute/FormEditJamOperasionalGroup';

const EditJamOperasionalGroup = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');
    // const [tipeAbsenId, setTipeAbsenId] = useState('');
    const [tipeAbsenSelect, setTipeAbsenSelect] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jamOperasionalGroups, isJamOperasionalGroupsSuccess, messageJamOperasionalGroups} = useSelector(
        (state : any) => state.jamOperasionalGroupsReducer
    )

    useEffect(()=>{
        dispatch(getJamOperasionalGroupsById({uuid}));
        dispatch(getTipeAbsens());
    },[]);

    useEffect(()=>{
        if(isJamOperasionalGroupsSuccess && jamOperasionalGroups){
            setName(jamOperasionalGroups && jamOperasionalGroups.name);
            setKeterangan(jamOperasionalGroups && jamOperasionalGroups.keterangan);
            setCode(jamOperasionalGroups && jamOperasionalGroups.code);
            // setTipeAbsenId(jamOperasionals && jamOperasionals.tipeAbsenId)
            setIsActive(jamOperasionalGroups && jamOperasionalGroups.isActive ? '1' : '0');
            dispatch(resetJamOperasionalGroups());
        }
    },[jamOperasionalGroups, isJamOperasionalGroupsSuccess]);

    useEffect(()=>{
        if(isJamOperasionalGroupsSuccess && messageJamOperasionalGroups){
            navigate('/jamOperasionalGroup');
            dispatch(resetJamOperasionalGroups());
        }
    },[isJamOperasionalGroupsSuccess, messageJamOperasionalGroups])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateJamOperasionalGroups({
            uuid, name, keterangan, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteJamOperasionalGroups({
            uuid
        }));
    }

    return (
        <div>
            <FormEditJamOperasionalGroup
                name={name}
                setName={setName}
                keterangan={keterangan}
                setKeterangan={setKeterangan}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/jamOperasionalGroup'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
                tipeAbsenSelect={tipeAbsenSelect}
                // tipeAbsenId={tipeAbsenId}
                // setTipeAbsenId={setTipeAbsenId}
            />
        </div>
    )
}

export default EditJamOperasionalGroup