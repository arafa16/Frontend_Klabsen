import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createGroups, resetGroups } from '../../../stores/features/groupsSlice';

const CreateGroup = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {groups, isGroupsSuccess, messageGroups} = useSelector(
        (state : any) => state.groupsReducer
    )

    useEffect(()=>{
        if(isGroupsSuccess && messageGroups){
            navigate('/group');
            dispatch(resetGroups());
        }
    },[isGroupsSuccess, messageGroups])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createGroups({
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
                linkBack={'/group'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateGroup