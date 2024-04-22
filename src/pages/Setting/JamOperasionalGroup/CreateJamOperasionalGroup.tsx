import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetJamOperasionalGroups, createJamOperasionalGroups } from '../../../stores/features/jamOperasionalGroupsSlice';
import FormCreateJamOperasionalGroup from '../../../components/Form/Attribute/FormCreateJamOperasionalGroup';

const CreateJamOperasionalGroup = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');
    const [tipeAbsenSelect, setTipeAbsenSelect] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jamOperasionalGroups, isJamOperasionalGroupsSuccess, messageJamOperasionalGroups} = useSelector(
        (state : any) => state.jamOperasionalGroupsReducer
    )

    useEffect(()=>{
        if(isJamOperasionalGroupsSuccess && messageJamOperasionalGroups){
            navigate('/jamOperasional');
            dispatch(resetJamOperasionalGroups());
        }
    },[isJamOperasionalGroupsSuccess, messageJamOperasionalGroups])


    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createJamOperasionalGroups({
            uuid, name, keterangan, code, isActive
        }));
    }



  return (
    <div className='w-full'>
        <div>
            <FormCreateJamOperasionalGroup
                name={name}
                setName={setName}
                keterangan={keterangan}
                setKeterangan={setKeterangan}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/jamOperasionalGroup'}
                createDataSetting={createDataSetting}
                tipeAbsenSelect={tipeAbsenSelect}
            />
        </div>
    </div>
  )
}

export default CreateJamOperasionalGroup