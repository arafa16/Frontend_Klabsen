import React, {useEffect, useState} from 'react'
import FormEdit from '../../../components/Form/Attribute/FormEdit'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateGroups, resetGroups, getGroupsById, deleteGroups } from '../../../stores/features/groupsSlice';

const EditGroup = () => {
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
        dispatch(getGroupsById({uuid}));
    },[]);

    useEffect(()=>{
        if(isGroupsSuccess && groups){
            setName(groups && groups.name);
            setCode(groups && groups.code);
            setIsActive(groups && groups.isActive ? '1' : '0');
            dispatch(resetGroups());
        }
    },[groups, isGroupsSuccess]);

    useEffect(()=>{
        if(isGroupsSuccess && messageGroups){
            navigate('/group');
            dispatch(resetGroups());
        }
    },[isGroupsSuccess, messageGroups])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateGroups({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteGroups({
            uuid
        }));
    }

    return (
        <div>
            <FormEdit
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/group'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditGroup